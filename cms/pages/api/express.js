import nextConnect from 'next-connect';
import express from 'express';

const app = express();

// Middleware eller rutter kan läggas till här
app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Hello from Express.js!' });
});

// Använd nextConnect för att integrera Express.js med Next.js
const handler = nextConnect();

handler.use(app);

export default handler;
