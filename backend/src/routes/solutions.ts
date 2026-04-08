import express, { Request, Response } from 'express';
import pool from '../config/db';

const router = express.Router();

// GET /api/solutions - Fetch solutions tab data (optionally filter by ?tab=...)
router.get('/', async (req: Request, res: Response): Promise<any> => {
  try {
    const { tab } = req.query;

    let query = 'SELECT * FROM solutions ORDER BY id ASC';
    let params: string[] = [];

    if (tab) {
      query = 'SELECT * FROM solutions WHERE tab_name = ? ORDER BY id ASC';
      params = [tab as string];
    }

    const [rows] = await pool.execute(query, params);
    res.status(200).json(rows);
  } catch (err) {
    console.error('Error fetching solutions:', err);
    res.status(500).json({ error: 'Failed to fetch solutions' });
  }
});

export default router;
