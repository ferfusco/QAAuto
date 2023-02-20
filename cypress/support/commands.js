import { locators } from "../support/locators_ClearSource";

export const urlBase = 'https://portal.qa.clearsource.app.lc.dev/'

export function login(user,password) {

    if (user == locators.LOGIN_DATA.USER_ADM){
        var check = locators.LOGIN_DATA.ADM_CHECK
    }

    if (user == locators.LOGIN_DATA.USER_CONT){
        var check = locators.LOGIN_DATA.CONT_CHECK
    }

    if (user == locators.LOGIN_DATA.USER_DIST){
        var check = locators.LOGIN_DATA.DIST_CHECK
    }

    cy.visit(urlBase)

    cy.xpath(locators.LOGIN.LOGIN_BUTON_HOME)
        .should('be.visible')
        .click()

    cy.xpath(locators.LOGIN.LOGIN_USER_FIELD)
        .should('be.visible')
        .click()

    cy.xpath(locators.LOGIN.LOGIN_USER_FIELD)
        .should('be.visible')
        .type(user)

    cy.xpath(locators.LOGIN.LOGIN_PASSWORD_FIELD)
        .should('be.visible')
        .click()
    
    cy.xpath(locators.LOGIN.LOGIN_PASSWORD_FIELD)
        .should('be.visible')
        .type(password)

    cy.xpath(locators.LOGIN.LOGIN_BUTON)
        .should('be.visible')
        .click()   

    cy.xpath(locators.LOGIN.LOGIN_CHECK)
        .should('exist')
        .contains(check)  

}

export function cart(state) {

    if(state == open){

        cy.visit(urlBase)

    cy.xpath(locators.CART.ICON_HOME)
        .should('be.visible')
        .click({ force: true })
    
    cy.xpath(locators.CART.CART_DIV)
        .should('be.visible')
    
    cy.get(locators.CART.CART_ELEMENT_CHECK)
    
    }

    if(state == close){
         
    cy.xpath(locators.CART.EXIT_BUTTOM)
        .should('be.visible')
        .click({ force: true })

    }

}

export function allCategories() {

    cy.visit(urlBase)

    cy.xpath(locators.ALL_CATEGORIES.ALL_CATEGORIES_BUTTON_HOME)
    .should('be.visible')
    .contains('View All Categories')
    .click({ force: true })

    const urlProducts = urlBase + 'products'
    cy.url()
    .should('be.equal', urlProducts)

    cy.xpath(locators.ALL_CATEGORIES.PRODUCTS_CHECK)
    .should('be.visible')
    .contains('Products')

    cy.xpath(locators.ALL_CATEGORIES.BROWSE_BY_CATEGORIES)
    .should('be.visible')
    .contains('Browse by categories')

    return null

}

export function explorerCategory(category_locator) {
 
    var category =    category_locator.CATEGORY_NAME
    var subCategory = category_locator.SUB_CATEGORY_NAME
    var xpathGroup =  category_locator.CATEGORY_BOX
    var xpathSub =    category_locator.SUB_CATEGORY_BUTTON
    var url =         category_locator.SUB_CATEGORY_LINK


    cy.visit(urlBase)

    cy.xpath(xpathGroup)
    .should('be.visible')

    cy.xpath(xpathSub)
    .contains(subCategory)
    .should('be.visible')
    .click({ force: true })

    var urltarget = urlBase + url
    cy.url()
    .should('be.equal', urltarget)

    cy.xpath('/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[3]/div[1]/div[1]/a')
    .should('be.visible')
    .click({ force: true })

    if (subCategory != 'Show more'){

        cy.xpath('/html/body/div[1]/div/div[1]/div[2]/div/div[2]/div[1]/div[2]/div[1]/div[1]/a')
        .contains(subCategory)
        .should('be.visible')
        
    }

    cy.xpath('/html/body/div[1]/div/div[1]/div[2]/div/div[2]/div[1]/div[2]/div[1]/div[2]/a')
    .contains(category)
    .should('be.visible')

    return null

}