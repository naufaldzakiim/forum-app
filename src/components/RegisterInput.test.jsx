/* eslint-disable object-curly-newline */
/* eslint-disable no-undef */
/**
 * skenario testing
 *
 * - RegisterInput component
 *   - should handle email typing correctly
 *   - should handle name typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import React from 'react';
import { cleanup, render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterInput from './RegisterInput';

describe('RegisterInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');

    // Action
    await act(async () => {
      await userEvent.type(emailInput, 'emailtest');
    });

    // Assert
    expect(emailInput).toHaveValue('emailtest');
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const nameInput = await screen.getByPlaceholderText('Name');

    // Action
    await act(async () => {
      await userEvent.type(nameInput, 'nametest');
    });

    // Assert
    expect(nameInput).toHaveValue('nametest');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
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
    const mockRegister = jest.fn();
    render(<RegisterInput register={mockRegister} />);
    const emailInput = await screen.getByPlaceholderText('Email');
    const nameInput = await screen.getByPlaceholderText('Name');
    const passwordInput = await screen.getByPlaceholderText('Password');
    const registerButton = await screen.getByRole('button', { name: 'Register' });

    // Action
    await act(async () => {
      await userEvent.type(emailInput, 'emailtest');
      await userEvent.type(nameInput, 'nametest');
      await userEvent.type(passwordInput, 'passwordtest');
      await userEvent.click(registerButton);
    });

    // Assert
    expect(mockRegister).toHaveBeenCalledWith({
      email: 'emailtest',
      name: 'nametest',
      password: 'passwordtest',
    });
  });
});
