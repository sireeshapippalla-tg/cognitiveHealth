import dotenv from 'dotenv';
dotenv.config();

import express, { Application } from 'express';
import cors from 'cors';

// Import routes
import contactRouter from './routes/contact';
import solutionsRouter from './routes/solutions';
import emailRouter from './routes/email';

const app: Application = express();
const port: number = parseInt(process.env.PORT as string, 10) || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mount routes
app.use('/api/contact', contactRouter);
app.use('/api/solutions', solutionsRouter);
app.use('/api/email', emailRouter);


// Start Server
app.listen(port, () => {
  console.log(`Backend API Server running at http://localhost:${port}`);
});
