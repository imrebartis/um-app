describe('the uch app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

    it('should display different countries depending on what continent button you click on', () => {
        cy.findByText(/asia/i).click();
        cy.findByText(/bhutan/i).should('be.visible');

        cy.findByText(/europe/i).click();
        cy.get('[data-testid="main"]').contains('Malta');
    });
});