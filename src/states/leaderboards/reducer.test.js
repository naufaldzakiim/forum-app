/* eslint-disable no-undef */
/**
 * test scenario for leaderboardsReducer
 *
 * - leaderboardsReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the users when given by RECEIVE_LEADERBOARDS action
 *
 */

import leaderboardsReducer from './reducer';

describe('leaderboardsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // Arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // Action
    const nextState = leaderboardsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the users when given by RECEIVE_LEADERBOARDS action', () => {
    // Arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_LEADERBOARDS',
      payload: {
        leaderboards: [
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
        ],
      },
    };

    // Action
    const nextState = leaderboardsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
