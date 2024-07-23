import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container md:w-1/2 lg:w-1/3 mx-auto px-4">
      {children}
    </div>
  );
};

export default Container;