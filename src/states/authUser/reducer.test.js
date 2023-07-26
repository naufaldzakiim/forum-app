/* eslint-disable no-undef */
/**
 * test scenario for authUserReducer
 *
 * - authUserReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the authUser when given by SET_AUTH_USER action
 *  - should return null when given by UNSET_AUTH_USER action
 *
 */

import authUserReducer from './reducer';

describe('authUserReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // Arrange
    const initialState = null;
    const action = { type: 'UNKNOWN' };

    // Action
    const nextState = authUserReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the authUser when given by SET_AUTH_USER action', () => {
    // Arrange
    const initialState = null;
    const action = {
      type: 'SET_AUTH_USER',
      payload: {
        authUser: {
          user: {
            id: 'shikakunxd',
            name: 'Axelliano Rafael',
            email: 'shikakunxd@example.com',
            avatar: 'https://generated-image-url.jpg',
          },
        },
      },
    };

    // Action
    const nextState = authUserReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.authUser);
  });

  it('should return null when given by UNSET_AUTH_USER action', () => {
    // Arrange
    const initialState = {
      user: {
        id: 'shikakunxd',
        name: 'Axelliano Rafael',
        email: 'shikakunxd@example.com',
        avatar: 'https://generated-image-url.jpg',
      },
    };
    const action = {
      type: 'UNSET_AUTH_USER',
      payload: {
        authUser: null,
      },
    };

    // Action
    const nextState = authUserReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.authUser);
  });
});
