// src/components/Task.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../actions/taskActions';

const Task = ({ task }) => {
  const [newDescription, setNewDescription] = useState(task.description);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleToggleTask = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEditTask = () => {
    if (newDescription.trim()) {
      dispatch(editTask(task.id, newDescription));
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg mb-4 shadow-md">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={handleToggleTask}
          className="w-6 h-6"
        />
        {isEditing ? (
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-md"
          />
        ) : (
          <span
            className={`flex-1 text-lg ${task.isDone ? 'line-through text-gray-400' : ''}`}
          >
            {task.description}
          </span>
        )}
      </div>
      <div className="flex space-x-2">
        <button
          onClick={handleToggleTask}
          className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition"
        >
          {task.isDone ? 'Undo' : 'Done'}
        </button>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 transition"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default Task;
