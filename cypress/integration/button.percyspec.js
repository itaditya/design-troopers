describe('Test <Button /> components', function() {
  const pageUrl = 'UI%20Components/Button';

  before(() => {
    cy.visit(pageUrl);
  });

  it('all buttons renders properly', function() {
    cy.percySnapshot();
  });
})
