import React, { useState } from 'react';

const App = () => {
  // State variables to store email, password, and login message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica se tanto o email quanto a senha foram preenchidos
    if (email.trim() === '' || password.trim() === '') {
      setLoginMessage('Por favor, preencha todos os campos.');
    } else {
      // Verifica o e-mail e define a mensagem correspondente
      handleEmailVerification(email);
    }
  };

  // Função para verificar o e-mail e definir a mensagem correspondente
  const handleEmailVerification = (inputEmail) => {
    // Lista de e-mails correspondentes a mensagens específicas
    const emailMessages = {
      'teste1@email.com': 'Mensagem 1',
      'teste2@email.com': 'Mensagem 2',
      'teste3@email.com': 'Mensagem 3',
      'teste4@email.com': 'Mensagem 4',
      'teste5@email.com': 'Mensagem 5',
      'teste6@email.com': 'Mensagem 6',
      'teste7@email.com': 'Mensagem 7',
      'teste8@email.com': 'Mensagem 8',
      'teste9@email.com': 'Mensagem 9',
      'teste10@email.com': 'Mensagem 10',
    };

    // Verifica se o e-mail está na lista e define a mensagem correspondente
    setLoginMessage(emailMessages[inputEmail] || 'Mensagem padrão');
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
      {/* Exibe a mensagem de login em uma div abaixo do botão com o ID de teste */}
      {loginMessage && (
        <div data-testid="login-message" style={{ marginTop: '10px' }}>
          {loginMessage}
        </div>
      )}
    </div>
  );
};

export default App;
