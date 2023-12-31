import React, { useState } from 'react';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleEmailVerification = (inputEmail) => {
    if (inputEmail === 'teste1@email.com') {
      setLoginMessage('Mensagem 1');
    } else if (inputEmail === 'teste2@email.com') {
      setLoginMessage('Mensagem 2');
    } else if (inputEmail === 'teste3@email.com') {
      setLoginMessage('Mensagem 3');
    } else if (inputEmail === 'teste4@email.com') {
      setLoginMessage('Mensagem 4');
    } else if (inputEmail === 'teste5@email.com') {
      setLoginMessage('Mensagem 5');
    } else if (inputEmail === 'teste6@email.com') {
      setLoginMessage('Mensagem 6');
    } else if (inputEmail === 'teste7@email.com') {
      setLoginMessage('Mensagem 7');
    } else if (inputEmail === 'teste8@email.com') {
      setLoginMessage('Mensagem 8');
    } else if (inputEmail === 'teste9@email.com') {
      setLoginMessage('Mensagem 9');
    } else if (inputEmail === 'teste10@email.com') {
      setLoginMessage('Mensagem 10');
    } else {
      setLoginMessage('Mensagem padrão');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      setLoginMessage('Por favor, preencha todos os campos.');
    } else {
      handleEmailVerification(email);
    }
  };

  return (
    <div>
      <h2>Falsa Página de Login</h2>
      <form data-testid="login-form" onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            data-testid="email-input"
          />
        </label>
        <br />
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            data-testid="password-input"
          />
        </label>
        <br />
        <button type="submit" data-testid="login-button">
          Login
        </button>
      </form>
      {loginMessage && (
        <div data-testid="login-message" style={{ marginTop: '10px' }}>
          {loginMessage}
        </div>
      )}
    </div>
  );
};

export default App;
