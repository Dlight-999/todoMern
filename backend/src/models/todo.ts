// backend/src/models/todo.ts

import mongoose, { Schema, Document } from 'mongoose';

export interface Todo extends Document {
  title: string;
  description: string;
}

const todoSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String }
});

export default mongoose.model<Todo>('Todo', todoSchema);
