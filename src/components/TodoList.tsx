import { useTodos } from "../context/Todos";

export function TodoList() {
  const { todos } = useTodos();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
