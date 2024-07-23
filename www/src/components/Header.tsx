import React from 'react';
import { TodoProps } from '../App';

interface HeaderProps {
  todos: TodoProps[] | null;
}

const Header: React.FC<HeaderProps> = ({ todos }) => {
  return (
    <header
      className={`bg-cover bg-center ${todos && todos.length > 0 ? 'h-[20vh]' :'h-[30vh] md:h-[50vh]'} flex justify-center items-center mb-12 transition-all`}
      style={{
        backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, .7), rgba(255, 255, 255, .7)), url('/assets/photo-1484480974693-6ca0a78fb36b.avif')`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="text-6xl md:text-8xl text-teal-700">Todo App</h1>
    </header>
  );
};

export default Header;
