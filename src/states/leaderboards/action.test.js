/* eslint-disable max-len */
/* eslint-disable no-undef */
/**
 * skenario test
 *
 * - asyncReceiveLeaderboards thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncReceiveLeaderboards, receiveLeaderboardsActionCreator } from './action';

const fakeLeaderboardsResponse = [
  {
    user: {
      id: 'muslik_bertopeng',
      name: 'Ghani Aryasuta',
      email: 'muslikbertopeng@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 15,
  },
  {
    user: {
      id: 'shikakunxd',
      name: 'Axelliano Rafael',
      email: 'shikakunxd@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 10,
  },
  {
    user: {
      id: 'megumegumin',
      name: 'Megumin',
      email: 'archwizardofexplosion@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 5,
  },
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncReceiveLeaderboards thunk', () => {
  beforeEach(() => {
    api._getLeaderboards = api.getLeaderboards;
  });

  afterEach(() => {
    api.getLeaderboards = api._getLeaderboards;

    // delete backup data
    delete api._getLeaderboards;
  });

  // ... backup and restore

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getLeaderboards = () => Promise.resolve(fakeLeaderboardsResponse);
    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncReceiveLeaderboards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveLeaderboardsActionCreator(fakeLeaderboardsResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getLeaderboards = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = jest.fn();
    // mock alert
    window.alert = jest.fn();

    // action
    await asyncReceiveLeaderboards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
