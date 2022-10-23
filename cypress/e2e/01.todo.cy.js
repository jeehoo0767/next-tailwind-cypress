describe('투두리스트 테스트케이스', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('투두리스트 추가', () => {
    cy.get('button[data-cy="add-todo"]').click()
    cy.get('input[data-cy="todo-input"]').type('투두리스트')
    cy.get('button[data-cy="todo-submit"]').click()
    cy.get('li[data-cy="todo-row-no-complete"]').contains('투두리스트')
  })

  it('투두리스트 완료처리', () => {
    cy.get('button[data-cy="add-todo"]').click()
    cy.get('input[data-cy="todo-input"]').type('투두리스트')
    cy.get('button[data-cy="todo-submit"]').click()
    cy.get('li[data-cy="todo-row-no-complete"]').click()
    cy.get('li[data-cy="todo-row-complete"]').should('have.class', 'line-through')
  })

  it('투두리스트 삭제처리', () => {
    cy.get('button[data-cy="add-todo"]').click()
    cy.get('input[data-cy="todo-input"]').type('투두리스트')
    cy.get('button[data-cy="todo-submit"]').click()
    cy.get('li[data-cy="todo-row-no-complete"]').click()
    cy.get('span[data-cy="todo-remove"]').click()
    cy.get('li').should('not.exist')
  })
})
