import express, { Request, Response } from 'express';
import pool from '../config/db';

const router = express.Router();

// POST /api/contact - Save contact form submission
router.post('/', async (req: Request, res: Response): Promise<any> => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || name.trim() === '') {
      return res.status(400).json({ error: 'Please provide your name.' });
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    if (!message || message.trim() === '') {
      return res.status(400).json({ error: 'Please provide a message.' });
    }

    const query = 'INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)';
    const [result]: any = await pool.execute(query, [name, email, phone || null, message]);

    res.status(201).json({ message: 'Contact message saved successfully', id: result.insertId });
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({ error: 'Failed to save contact message' });
  }
});

export default router;
