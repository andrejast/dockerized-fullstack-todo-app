import axios from "axios";
import { TodoProps } from "./App";
const url = "http://test.localhost:5000/todos";
export const getAllTodos = () => axios.get(url);
export const createTodo = (newTodo: TodoProps) => axios.post(url, newTodo);
export const updateTodo = (id: number, updatedTodo: TodoProps) =>
  axios.patch(`${url}/${id}`, updatedTodo);
export const deleteTodo = (id: number) => axios.delete(`${url}/${id}`);
