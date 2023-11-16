describe('Falsa Página de Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Certifique-se de ajustar a URL conforme necessário
  });

  it('exibe mensagem correta para o email teste1@email.com', () => {
    cy.get('[data-testid=email-input]').type('teste1@email.com');
    cy.get('[data-testid=password-input]').type('senha123');
    cy.get('[data-testid=login-button]').click();
    cy.get('[data-testid=login-message]').should('contain', 'Mensagem 1');
  });

  it('exibe mensagem correta para o email teste2@email.com', () => {
    cy.get('[data-testid=email-input]').type('teste2@email.com');
    cy.get('[data-testid=password-input]').type('senha123');
    cy.get('[data-testid=login-button]').click();
    cy.get('[data-testid=login-message]').should('contain', 'Mensagem 2');
  });

  it('exibe mensagem correta para o email teste3@email.com', () => {
    cy.get('[data-testid=email-input]').type('teste3@email.com');
    cy.get('[data-testid=password-input]').type('senha123');
    cy.get('[data-testid=login-button]').click();
    cy.get('[data-testid=login-message]').should('contain', 'Mensagem 3');
  });

  it('exibe mensagem correta para o email teste4@email.com', () => {
    cy.get('[data-testid=email-input]').type('teste4@email.com');
    cy.get('[data-testid=password-input]').type('senha123');
    cy.get('[data-testid=login-button]').click();
    cy.get('[data-testid=login-message]').should('contain', 'Mensagem 4');
  });

  it('exibe mensagem correta para o email teste5@email.com', () => {
    cy.get('[data-testid=email-input]').type('teste5@email.com');
    cy.get('[data-testid=password-input]').type('senha123');
    cy.get('[data-testid=login-button]').click();
    cy.get('[data-testid=login-message]').should('contain', 'Mensagem 5');
  });
  it('exibe mensagem correta para o email teste6@email.com', () => {
    cy.get('[data-testid=email-input]').type('teste11@email.com');
    cy.get('[data-testid=password-input]').type('senha123');
    cy.get('[data-testid=login-button]').click();
    cy.get('[data-testid=login-message]').should('contain', 'Mensagem 5');
  });
});
