/* eslint-disable object-curly-newline */
/* eslint-disable no-undef */
/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import { cleanup, render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginInput from './LoginInput';

describe('LoginInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');

    // Action
    await act(async () => {
      await userEvent.type(emailInput, 'emailtest');
    });

    // Assert
    expect(emailInput).toHaveValue('emailtest');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    // Action
    await act(async () => {
      await userEvent.type(passwordInput, 'passwordtest');
    });

    // Assert
    expect(passwordInput).toHaveValue('passwordtest');
  });

  // ... skenario pengujian lainnya

  it('should call login function when login button is clicked', async () => {
    // Arrange
    const mockLogin = jest.fn();
    render(<LoginInput login={mockLogin} />);
    const emailInput = await screen.getByPlaceholderText('Email');
    const passwordInput = await screen.getByPlaceholderText('Password');
    const loginButton = await screen.getByRole('button', { name: 'Login' });

    // Action
    await act(async () => {
      await userEvent.type(emailInput, 'emailtest');
      await userEvent.type(passwordInput, 'passwordtest');
      await userEvent.click(loginButton);
    });

    // Assert
    expect(mockLogin).toHaveBeenCalledWith({
      email: 'emailtest',
      password: 'passwordtest',
    });
  });
});
