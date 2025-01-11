import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { addTodo } from '../redux/todosSlice';

export const AddTodo: React.FC = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        className="flex-1 p-2 border border-gray-300 rounded"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
};

