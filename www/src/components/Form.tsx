import React, { useState } from 'react';
import { createTodo } from '../service';
import { TodoProps } from '../App';


interface FormProps {
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

const Form: React.FC<FormProps> = ({ setTodos }) => {
  const [inputTxt, setInputTxt] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputTxt.trim()) {
      setError('Todo title cannot be empty');
      return;
    }

    const newTodo = { title: inputTxt.trim(), completed: false };

    try {
      const res = await createTodo(newTodo);
      setTodos(prevTodos => {
        const updatedTodos = [...prevTodos, res.data];
        return updatedTodos;
      });
      setInputTxt('');
      setError('');
    } catch (err) {
      console.error('Error creating todo:', err);
      setError(err instanceof Error ? err.message : 'Failed to create todo');
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <div className="px-4 py-2">
        <h1 className="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
      </div>
      <form className="w-full max-w-sm mx-auto px-4 py-2" onSubmit={handleSubmit}>
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Add a task"
            id="icon_prefix2"
            value={inputTxt}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInputTxt(e.target.value);
            }}
          />
          <button
            className="flex-shrink-0 cursor-pointer bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
      {error && <p className="text-red-500 text-xs italic px-4 py-2">{error}</p>}
    </div>
  );
};

export default Form;