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

    it('should highlight the continent button that has been clicked', () => {
        cy.findByText(/oceania/i).click();
        cy.findByText(/oceania/i).should('have.css', 'color', 'rgb(227, 18, 126)');
    });
});