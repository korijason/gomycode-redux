// src/App.js

import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">ToDo Application</h1>
        <AddTask />
        <ListTask />
      </div>
    </div>
  );
};

export default App;
