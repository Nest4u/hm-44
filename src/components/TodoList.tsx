import React from "react";
import { useTodoContext } from "../context/TodoContext";

export const TodoList: React.FC = () => {
  const { todos, toggleTodo } = useTodoContext();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
          </label>
        </li>
      ))}
    </ul>
  );
};
