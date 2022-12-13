describe('Тестирование Lamoda', function () {
    it('Дохожу до корзины в Lamoda', function () {
        cy.visit('https://www.lamoda.ru/women-home/');
        cy.get('._input_xf7ng_19').type('chloe');
        cy.get('._root_xf7ng_2 > .x-button').click();
        cy.contains('See by Chloe');
        cy.get(':nth-child(1) > .x-product-card__card > .x-product-card__link > ._root_jcagj_2 > :nth-child(1) > ._content_18sru_3 > ._root_552z7_2 > ._area_552z7_8').click();
        cy.get('.recaptcha > .x-button').click();
        cy.contains('Товар добавлен в корзину');
        cy.get('.d-modal__bottom > .x-button_primaryFilledWeb7184').click();
        cy.contains('Оформление заказа');
       
    })
})
