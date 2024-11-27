// src/store.js

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import taskReducer from './reducers/taskReducer';

const store = createStore(taskReducer);

export default store;
