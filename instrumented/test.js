import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import this to extend expect with custom matchers
import App from './app.';

describe('App Component', () => {
  it('renders without crashing', () => {
    const { getByText, getByTestId } = render(<App />);

    expect(getByText('Falsa Página de Login')).toBeInTheDocument();
    expect(getByTestId('login-form')).toBeInTheDocument();
    expect(getByTestId('email-input')).toBeInTheDocument();
    expect(getByTestId('password-input')).toBeInTheDocument();
    expect(getByTestId('login-button')).toBeInTheDocument();
  });

  it('displays error message when submitting with empty fields', () => {
    const { getByTestId, getByText } = render(<App />);
    const loginButton = getByTestId('login-button');

    fireEvent.click(loginButton);

    expect(getByText('Por favor, preencha todos os campos.')).toBeInTheDocument();
  });

  it('displays success message when submitting with valid email and password', () => {
    const { getByTestId, getByText } = render(<App />);
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const loginButton = getByTestId('login-button');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);

    expect(getByText('Login bem-sucedido!')).toBeInTheDocument();
  });
});
