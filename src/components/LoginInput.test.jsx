/**
 * - LoginInput component
 *   - should handle username typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginInput from './LoginInput';

import '@testing-library/jest-dom';

describe('LoginInput component', () => {
  it('should handle username typing correctly', async () => {
    await act(async () => render(<LoginInput login={() => {}} />));
    const usernameInput = await screen.getByPlaceholderText('Username');

    await act(async () => userEvent.type(usernameInput, 'usernametest'));

    expect(usernameInput).toHaveValue('usernametest');
  });

  it('should handle password typing correctly', async () => {
    await act(async () => render(<LoginInput login={() => {}} />));
    const passwordInput = await screen.getByPlaceholderText('Password');

    await act(async () => userEvent.type(passwordInput, 'passwordtest'));

    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call login function when login button is clicked', async () => {
    const mockLogin = jest.fn();

    await act(async () => render(<LoginInput login={mockLogin} />));
    const usernameInput = await screen.getByPlaceholderText('Username');
    await act(async () => userEvent.type(usernameInput, 'usernametest'));
    const passwordInput = await screen.getByPlaceholderText('Password');
    await act(async () => userEvent.type(passwordInput, 'passwordtest'));

    const loginButton = await screen.getByRole('button', { name: 'Login' });

    await act(async () => userEvent.click(loginButton));

    expect(mockLogin).toBeCalledWith({
      id: 'usernametest',
      password: 'passwordtest',
    });
  });
});
