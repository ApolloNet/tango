describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/dist')
    cy.contains('h1', 'Tango')
    cy.get('#input-wikipedia').type('https://en.wikipedia.org/wiki/Astor_Piazzolla')
    cy.get('#form-wikipedia').submit()
    cy.wait(1000)
    cy.get('#main-content').children('section')
    cy.get('#input-words').type('libertango')
    cy.get('mark.stabilo').first().contains('Libertango')
  })
})
