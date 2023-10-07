import { createContext, useContext, useEffect, useState } from "react";
import { Todo } from "../types";

interface TodoContextValues {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

export const TodoContext = createContext<TodoContextValues>({
  todos: [],
  setTodos: () => {},
});

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos")!)
      : []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTodos() {
  const { todos, setTodos } = useContext(TodoContext);
  return { todos, setTodos };
}
