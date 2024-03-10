// backend/src/routes/todo.ts

import express, { Request, Response } from 'express';
import Todo from '../models/todo';

const router = express.Router();

router.post('/add', async (req: Request, res: Response) => {
  const { title, description } = req.body;

  try {
    const todo = new Todo({ title, description });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    console.error('Error adding todo:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
