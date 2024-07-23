import React, { useState } from "react";
import { deleteTodo, updateTodo } from "../service";
import { TodoProps } from "../App";

interface ITodoProps {
  todo: TodoProps;
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

const Todo: React.FC<ITodoProps> = ({ todo, setTodos }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedTitle, setEditedTitle] = useState<string>(todo.title);

  const toggleCompleted = (): void => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    updateTodo(updatedTodo._id!, updatedTodo)
      .then(() =>
        setTodos((prevTodos) =>
          prevTodos.map((t) => (t._id === todo._id ? updatedTodo : t))
        )
      )
      .catch((error) => console.error("Failed to update todo:", error));
  };

  const deleteTodoItem = (): void => {
    deleteTodo(todo._id!)
      .then(() =>
        setTodos((prevTodos) => prevTodos.filter((t) => t._id !== todo._id))
      )
      .catch((error) => console.error("Failed to delete todo:", error));
  };

  const handleEditClick = (): void => {
    if (isEditing) {
      // Save the edited todo
      const updatedTodo = { ...todo, title: editedTitle };
      updateTodo(updatedTodo._id!, updatedTodo)
        .then(() => {
          setTodos((prevTodos) =>
            prevTodos.map((t) => (t._id === todo._id ? updatedTodo : t))
          );
          setIsEditing(false);
        })
        .catch((error) => console.error("Failed to update todo:", error));
    } else {
      // Enter edit mode
      setIsEditing(true);
    }
  };

  return (
    <div className="py-4">
      <div className="flex items-center justify-between">
        <form
          className="flex items-center flex-grow"
          onSubmit={(e: React.FormEvent) => {
            e.preventDefault();
            handleEditClick();
          }}
        >
          <input
            id={`todo-${todo._id}`}
            name={`todo-${todo._id}`}
            type="checkbox"
            checked={todo.completed}
            onChange={toggleCompleted}
            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
          />
          <label
            htmlFor={`todo-${todo._id}`}
            className="ml-3 block text-gray-900 flex-grow cursor-pointer"
          >
            {isEditing ? (
              <input
                type="text"
                value={editedTitle}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEditedTitle(e.target.value)
                }
                className="text-lg font-medium w-8/12"
                autoFocus
              />
            ) : (
              <span
                className={`text-lg font-medium ${
                  todo.completed ? "line-through" : ""
                }`}
              >
                {todo.title}
              </span>
            )}
          </label>
        </form>
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={handleEditClick}
            className="text-teal-600 hover:text-teal-800"
          >
            {isEditing ? "Save" : "Edit"}
          </button>
          <button
            onClick={deleteTodoItem}
            className="text-red-600 hover:text-red-800"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
