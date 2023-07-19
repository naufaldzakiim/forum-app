import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import threadsReducer from './threads/reducer';

const store = configureStore({
  reducer: {
    threads: threadsReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
