import express, { Request, Response } from 'express';
import pool from '../config/db';
import nodemailer from 'nodemailer';

const router = express.Router();

// Email transporter configuration for Brevo (formerly Sendinblue)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp-relay.brevo.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports (like 587)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

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

    // Beautiful HTML Template for the Company (Receiver)
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px; border-radius: 8px; border: 1px solid #e0e0e0;">
        <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #ff6b00;">
          <h2 style="color: #333; margin: 0;">New Contact Form Submission</h2>
        </div>
        
        <div style="padding: 20px 0;">
          <p style="color: #555; font-size: 16px;">You have received a new message from the contact form on your website.</p>
          
          <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #ff6b00; margin: 20px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
            <p style="margin: 0 0 10px 0; font-size: 15px;"><strong>Name:</strong> <span style="color: #333;">${name}</span></p>
            <p style="margin: 0 0 10px 0; font-size: 15px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #ff6b00; text-decoration: none;">${email}</a></p>
            <p style="margin: 0 0 10px 0; font-size: 15px;"><strong>Phone:</strong> <span style="color: #333;">${phone || 'Not provided'}</span></p>
            <p style="margin: 0 0 5px 0; font-size: 15px;"><strong>Message:</strong></p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 4px; color: #444; white-space: pre-wrap; font-size: 14px; line-height: 1.5;">${message}</div>
          </div>
        </div>
        
        <div style="text-align: center; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px;">
          <p>This email was automatically generated from the Cognitive Health website's contact form.</p>
        </div>
      </div>
    `;

    // Attempt to send the email to the company
    try {
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await transporter.sendMail({
          from: `"CognitiveHealth" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`, // sender address
          to: process.env.EMAIL_FROM, // receiver address (the company's email)
          replyTo: email, // Set user's email as reply-to so the company can easily reply
          subject: `New Contact Request from ${name}`, // Subject line
          html: emailHtml, // beautiful HTML body
        });
        console.log('Contact confirmation email sent to company.');
      } else {
        console.warn('Email credentials not properly configured. Email not sent.');
      }
    } catch (emailErr) {
      console.error('Error sending contact email:', emailErr);
      // We don't fail the request if the email fails, we still saved to DB
    }

    res.status(201).json({ message: 'Contact message saved successfully', id: result.insertId });
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({ error: 'Failed to save contact message' });
  }
});

export default router;
