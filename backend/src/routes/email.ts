import express, { Request, Response } from 'express';
import multer from 'multer';
import transporter from '../config/mailer';
import pool from '../config/db';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });
const senderAddress = () => `"CognitiveHealth" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`;

// POST /api/email/send-results-pdf - Send results PDF to user
router.post('/send-results-pdf', upload.single('file'), async (req: Request, res: Response): Promise<any> => {
  try {
    const { email } = req.body;
    const file = req.file;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }
    if (!file) {
      return res.status(400).json({ error: 'PDF file attachment is missing.' });
    }

    // 1. Save to Database
    const dbQuery = 'INSERT INTO downloadcomplete_result_package (email) VALUES (?)';
    await pool.execute(dbQuery, [email]);

    // 2. Send Email
    await transporter.sendMail({
      from: senderAddress(),
      to: email,
      subject: 'Your CognitiveHealth Results Package',
      html: `
        <p>Hello,</p>
        <p>Thank you for your interest! Please find your complete results package attached to this email.</p>
        <p>Best regards,<br/>The CognitiveHealth Team</p>
      `,
      attachments: [
        { filename: file.originalname || 'results.pdf', content: file.buffer },
      ],
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending results email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// POST /api/email/send-assessment-email - Send RCM assessment PDF to user
router.post('/send-assessment-email', upload.single('file'), async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, score } = req.body;
    const file = req.file;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }
    if (!file) {
      return res.status(400).json({ error: 'PDF file attachment is missing.' });
    }

    // 1. Save to Database
    const dbQuery = 'INSERT INTO readiness_assessment (email, score) VALUES (?, ?)';
    await pool.execute(dbQuery, [email, score || null]);

    // 2. Send Email
    await transporter.sendMail({
      from: senderAddress(),
      to: email,
      subject: 'Your RCM AI Readiness Assessment Results',
      html: `
        <p>Hello,</p>
        <p>Thank you for completing the RCM AI Readiness Assessment!
        You checked <strong>${score}</strong> items.</p>
        <p>Please find your full assessment report attached.</p>
        <p>Best regards,<br/>The CognitiveHealth Team</p>
      `,
      attachments: [
        { filename: file.originalname || 'RCM-AI-Assessment.pdf', content: file.buffer },
      ],
    });

    res.status(200).json({ message: 'Assessment email sent successfully' });
  } catch (error) {
    console.error('Error sending assessment email:', error);
    res.status(500).json({ error: 'Failed to send assessment email' });
  }
});

export default router;
