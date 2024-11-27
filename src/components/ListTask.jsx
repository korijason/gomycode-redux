// src/components/ListTask.js

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const [filter, setFilter] = useState('all'); // can be 'all', 'done', 'notdone'

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone;
    if (filter === 'notdone') return !task.isDone;
    return true; // 'all' filter
  });

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex space-x-4 justify-center mb-6">
        <button
          onClick={() => setFilter('all')}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          All
        </button>
        <button
          onClick={() => setFilter('done')}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          Done
        </button>
        <button
          onClick={() => setFilter('notdone')}
          className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
        >
          Not Done
        </button>
      </div>
      <div>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
