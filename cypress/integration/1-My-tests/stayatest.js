describe('Тестирование формы авторизации staya', function () {
    
    it('Позитивный сценарий, верные логин и пароль', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('victoriakima@gmail.com');
        cy.get('.auth-form__submit').should('be.disabled', {timeout: 5000});
        cy.get('.auth-form > form > [type="password"]').type('Staya22test');
        cy.get('.auth-form__submit').should('not.be.disabled', {timeout: 5000});
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы');

    })


    it('Негативный сценарий, верный логин, неверный пароль', function () {

        cy.get('button.profile__nav-link').click();
        cy.contains('Выйти из аккаунта');
        cy.get('.box__button_ok').click();
        cy.get('.header-bottom__right--link').click({ multiple: true });
        cy.get('.auth-form > form > [type="email"]').type('victoriakima@gmail.com');
        cy.get('.auth-form__submit').should('be.disabled', {timeout: 5000});
        cy.get('.auth-form > form > [type="password"]').type('Staya222test');
        cy.get('.auth-form__submit').should('not.be.disabled', {timeout: 5000});
        cy.get('.auth-form__submit').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');

    })
})
