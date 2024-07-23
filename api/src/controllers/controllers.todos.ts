import { Request, Response } from "express";
import { Todo } from "../models/models.todos";
import mongoose from "mongoose";

export const createTodo = async (
  req: Request,
  res: Response
): Promise<void | Response> => {
  const todo = new Todo(req.body);
  try {
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(409).json({ error: (error as Error).message });
  }
};

export const readTodos = async (
  _req: Request,
  res: Response
): Promise<void | Response> => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(404).json({ error: (error as Error).message });
  }
};

export const updateTodo = async (
  req: Request,
  res: Response
): Promise<void | Response> => {
  const { id } = req.params;
  const { title, completed } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No todo with id: ${id}`);
  }

  const updatedTodo = { title, _id: id, completed };
  try {
    const result = await Todo.findByIdAndUpdate(id, updatedTodo, { new: true });
    res.json(result);
  } catch (error) {
    res.status(409).json({ error: (error as Error).message });
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response
): Promise<void | Response> => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No todo with id: ${id}`);
  }

  try {
    await Todo.findByIdAndDelete(id);
    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(409).json({ error: (error as Error).message });
  }
};

export const markTodo = async (
  req: Request,
  res: Response
): Promise<void | Response> => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No todo with id: ${id}`);
  }

  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).send(`No todo with id: ${id}`);
    }
    todo.completed = true;
    await todo.save();
    res.json({ message: "Todo marked successfully", todo });
  } catch (error) {
    res.status(409).json({ error: (error as Error).message });
  }
};
