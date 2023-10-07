import { useState } from "react";
import { useTodos } from "../context/Todos";

export function TodoForm() {
  const [text, setText] = useState("");
  const { setTodos, todos } = useTodos();

  

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setTodos([...todos, { id: Date.now().toString(), text, done: false }]);
        setText("");
      }}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}
