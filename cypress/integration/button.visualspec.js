describe('Test <Button /> component', function() {
  const pageUrl = 'UI Components/Button';

  it('default button renders properly', function() {
    cy.visit(pageUrl);

    cy.get(`[data-testid="example-clickable-button"] button`).contains('Click Me').matchImageSnapshot();
  });
})
