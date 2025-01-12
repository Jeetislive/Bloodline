import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import indexRoute from './routes/indexRoute.js';
import { errorHandler } from './error/ErrorHandler.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
app.use(express.json({ extended: true}));
app.use(cors());
// Add your routes here
app.use('/api',indexRoute);


// Error handling middleware
app.use(errorHandler);
// Mock Data 
app.get('/',(req,res) => {
    res.send('Welcome to the API');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

