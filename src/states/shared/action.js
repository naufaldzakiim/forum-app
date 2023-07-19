/* eslint-disable no-unused-vars */
import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';

function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    try {
      const threads = await api.getAllThreads();

      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
  };
}

export { asyncPopulateUsersAndThreads };
