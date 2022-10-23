describe('투두리스트 추가', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('투두리스트 추가', () => {
    cy.get('button[data-cy="add-todo"]').click()
    cy.get('input[data-cy="todo-input"]').type('투두리스트')
    cy.get('button[data-cy="todo-submit"]').click()
    cy.get('li[data-cy="todo-row-no-complete"]').contains('투두리스트')
  })
})
