describe('Test <Button /> component', function() {
  const pageUrl = 'UI Components/Button';

  before(() => {
    cy.visit(pageUrl);
  });

  it('default buttons renders properly', function() {
    cy.get(`[data-testid="example-default-buttons"]`).matchImageSnapshot();
  });

  it('semantic buttons renders properly', function() {
    cy.get(`[data-testid="example-semantic-buttons"]`).matchImageSnapshot();
  });

  describe('Icon buttons work properly', () => {
    beforeEach(() => {
      cy.get(`[data-testid="example-icon-buttons"]`).as('iconBtns');
    });

    it('icon button works well on focus', function() {
      cy.get(`@iconBtns`).within(() => {
        cy.get(`button`).first().focus().matchImageSnapshot();
      });
    });

    it('favorite icon button gets filled on click', function() {
      cy.get(`@iconBtns`).within(() => {
        cy.get(`[title="Add to Favorites"]`).click();
        cy.get(`[title="Added to Favorites"]`).matchImageSnapshot();
      });
    });
  });

  describe('Ghost buttons work properly', () => {
    beforeEach(() => {
      cy.get(`[data-testid="example-ghost-buttons"]`).as('ghostBtns');
    });

    it('ghost button gets filled with semantic color on click', () => {
      cy.get(`@ghostBtns`).within(() => {
        cy.get(`button`).first().click().matchImageSnapshot();
      });
    });
  });

})
