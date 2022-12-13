
describe('Тестирование habr.com', function () {

    it('Проверка, что при переходе во вкладку урл будет верный', function () {
        cy.visit('https://habr.com/ru/all/');
        cy.contains('Разработка').click();
        cy.url().should('eq', 'https://habr.com/ru/flows/develop/')
    })
})
