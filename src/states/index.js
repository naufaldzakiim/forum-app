import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';
import authUserReducer from './authUser/reducer';

const store = configureStore({
  reducer: {
    threads: threadsReducer,
    authUser: authUserReducer,
    users: usersReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
