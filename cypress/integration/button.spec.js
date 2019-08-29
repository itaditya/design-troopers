describe('Test <Button /> component', function() {
  it('default button renders properly', function() {
    cy.visit('http://localhost:6060/#/UI%20Components/Button');
    cy.get('#example-clickable-button').contains('Click Me').click().screenshot('clickable-button-example-screenshot');
  });
})
