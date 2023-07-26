/* eslint-disable no-undef */
/**
 * test scenario for usersReducer
 *
 * - usersReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the users when given by RECEIVE_USERS action
 *
 */

import usersReducer from './reducer';

describe('usersReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // Arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // Action
    const nextState = usersReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the users when given by RECEIVE_USERS action', () => {
    // Arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_USERS',
      payload: {
        users: [
          {
            id: 'muslik_bertopeng',
            name: 'Ghani Aryasuta',
            email: 'muslikbertopeng@example.com',
            avatar: 'https://generated-image-url.jpg',
          },
          {
            id: 'shikakunxd',
            name: 'Axelliano Rafael',
            email: 'shikakunxd@example.com',
            avatar: 'https://generated-image-url.jpg',
          },
          {
            id: 'megumegumin',
            name: 'Megumin',
            email: 'archwizardofexplosion@example.com',
            avatar: 'https://generated-image-url.jpg',
          },
        ],
      },
    };

    // Action
    const nextState = usersReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.users);
  });
});
