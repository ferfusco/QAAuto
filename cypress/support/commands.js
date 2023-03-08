import { locators } from "../support/locators_ClearSource";

export const baseUrl = 'https://portal.qa.clearsource.app.lc.dev/'

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

    cy.visit(baseUrl)

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

        cy.visit(baseUrl)

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

    cy.visit(baseUrl)

    cy.xpath(locators.ALL_CATEGORIES.ALL_CATEGORIES_BUTTON_HOME)
    .should('be.visible')
    .contains('View All Categories')
    .click({ force: true })

    const urlProducts = baseUrl + 'products'
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


    cy.visit(baseUrl)

    cy.xpath(xpathGroup)
    .should('be.visible')

    cy.xpath(xpathSub)
    .contains(subCategory)
    .should('be.visible')
    .click({ force: true })

    var urltarget = baseUrl + url
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

export function shopCategory(div) {

    cy.viewport(1920, 1080)     

        var button_home = locators.SHOP_CATEGORIES.BUTTON

        var address_2 = Object.keys(div);

        cy.log(address_2)

        for (let j = 0; j < address_2.length; j++) {

            var comp_2 = (address_2[j])

            cy.log(comp_2)

            var Button_test = div[comp_2]

            var button_shop_cat = Button_test.BUTTON

            var link = Button_test.LINK
            
            var category = Button_test.CATEGORY

            var sub = Button_test.SUB
            
            cy.log(Button_test)

            cy.visit(baseUrl);

            cy.xpath(button_home)
            .should('be.visible')
            .click({ force: true });

            cy.xpath(locators.SHOP_CATEGORIES.MENU)
            .should('be.visible')

            cy.xpath(button_shop_cat)
            .scrollIntoView()
            .click({ force: true });

            var urltarget = baseUrl + link
            cy.url()
            .should('be.equal', urltarget)

            cy.xpath('/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[3]/div[1]/div[1]/a')
            .should('be.visible')
            .click({ force: true });

            if (sub != ""){

                cy.xpath('/html/body/div[1]/div/div[1]/div[2]/div/div[2]/div[1]/div[2]/div[1]/div[1]/a')
                .contains(Button_test.SUB)
                .should('be.visible')
                
            }

            cy.xpath('/html/body/div[1]/div/div[1]/div[2]/div/div[2]/div[1]/div[2]/div[1]/div[2]/a')
            .contains(category)
            .should('be.visible')
        
        } 

}

export function goToPortal(user,password) {
    
    cy.viewport(1920, 1080)

    login(user,password)

    cy.xpath(locators.GO_TO_PORTAL.BUTTON)
    .should('be.visible')
    .click()

    cy.url()
    .should('contains', '/distributors')
}

export function Barlink(name) {

    cy.viewport(1920, 1080)

    cy.xpath(locators["GO_TO_PORTAL"][name]["BUTTON"])
    .should('be.visible')
    .click()

    cy.url()
    .should('contains', locators["GO_TO_PORTAL"][name]["URL"])

}

export function searchInput(){
   
    var address = locators["GO_TO_PORTAL"]["DISTRIBUITORS"]["ROW"]

    for(let i = 1; i <= 10; i++){

        var trSelector = address.RENDER + "/tr["+ i +"]" 

        var line = 'line_'+i+"_"

        for(let j = 1; j <= 6; j++){

            var tdSelector = trSelector + "/td["+ j +"]"

            var td

            if(j == 1){
                td =  "order" 
            }if(j == 2){
                td =  "name" 
            }if(j == 3){
                td =  "address" 
            }if(j == 4){
                td =  "contact_name" 
            }if(j == 5){
                td =  "phone_number" 
            }if(j == 6){
                td =  "status" 
                tdSelector = tdSelector + "/span"
            }
            
            var add = line + td

            cy.xpath(tdSelector).invoke("text").as(add)
            cy.get('@'+add)

        }
        
    }    
  
}