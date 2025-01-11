import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { toggleTodo, deleteTodo } from '../redux/todosSlice';

export  const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.items);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <ul className="list-none p-0">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`flex items-center gap-2 p-2 border rounded mb-2 shadow-sm ${
            todo.completed ? 'bg-green-100 line-through text-gray-500' : 'bg-white'
          }`}
        >
          <input
            className="w-4 h-4"
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <span className="flex-1">{todo.text}</span>
          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

