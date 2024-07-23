import React from 'react';
import Todo from './Todo';
import { TodoProps } from '../App';


// Define the props interface for TodoList
interface TodoListProps {
  todos: TodoProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

// Use the interface as the component's prop type
const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  return (
    <>
      {/* Using Tailwind CSS for layout and spacing */}
      <div className="divide-y divide-gray-200 px-4 mt-6">
        {todos.map((todo) => (
          <Todo key={todo._id} todo={todo} setTodos={setTodos} />
        ))}
      </div>
    </>
  );
};

export default TodoList;