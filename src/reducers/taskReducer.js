// src/reducers/taskReducer.js

import { ADD_TASK, TOGGLE_TASK, EDIT_TASK } from '../actions/taskActions';

const initialState = {
  tasks: []
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };

    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        )
      };

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.newDescription }
            : task
        )
      };

    default:
      return state;
  }
};

export default taskReducer;
