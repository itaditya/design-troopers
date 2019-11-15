describe('Test <Button /> components', function() {
  const pageUrl = 'UI%20Components/Button';

  before(() => {
    cy.visit(pageUrl);
  });

  it('all buttons renders properly', function() {
    cy.percySnapshot();
  });

  it('favorite icon button gets filled on click', function() {
    cy.get(`[data-testid="example-icon-buttons"]`).within(() => {
      cy.get(`[title="Add to Favorites"]`).click();
      cy.get(`[title="Added to Favorites"]`).percySnapshot();
    });
  });
})
