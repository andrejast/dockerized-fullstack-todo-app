import React, { useEffect, useState } from "react";
import { getAllTodos } from "./service";
import Header from "./components/Header";
import Container from "./components/Container";
import Form from "./components/Form";
import Loading from "./components/Loading";
import TodoList from "./components/TodoList";

export interface TodoProps {
  title: string;
  completed: boolean;
  _id?: number;
}

function App(): JSX.Element {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const res = await getAllTodos();
        setTodos(res.data);
        setLoading(false);
      } catch (error: unknown) {
        console.error(
          "Failed to load todos:",
          error instanceof Error ? error.message : String(error)
        );
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Container>
        <Form setTodos={setTodos} />
        {loading ? <Loading /> : <TodoList todos={todos} setTodos={setTodos} />}
      </Container>
    </>
  );
}

export default App;
