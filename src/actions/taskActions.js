// src/actions/taskActions.js

// Action types
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const EDIT_TASK = 'EDIT_TASK';

// Action to add a new task
export const addTask = (description) => ({
  type: ADD_TASK,
  payload: {
    id: Date.now(), // unique ID based on timestamp
    description,
    isDone: false
  }
});

// Action to toggle task status (done/not done)
export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id
});

// Action to edit a task
export const editTask = (id, newDescription) => ({
  type: EDIT_TASK,
  payload: { id, newDescription }
});
