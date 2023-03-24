import { locators } from "../support/locators_ClearSource";

export const baseUrl = 'https://portal.qa.clearsource.app.lc.dev/'

export let logLine = []

export function login(user, password) {

    if (user == locators.LOGIN_DATA.USER_ADM) {
        var check = locators.LOGIN_DATA.ADM_CHECK
    }

    if (user == locators.LOGIN_DATA.USER_CONT) {
        var check = locators.LOGIN_DATA.CONT_CHECK
    }

    if (user == locators.LOGIN_DATA.USER_DIST) {
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

    return null
}

export function cart(state) {

    if (state == open) {

        cy.visit(baseUrl)

        cy.xpath(locators.CART.ICON_HOME)
            .should('be.visible')
            .click({ force: true })

        cy.xpath(locators.CART.CART_DIV)
            .should('be.visible')

        cy.get(locators.CART.CART_ELEMENT_CHECK)

    }

    if (state == close) {

        cy.xpath(locators.CART.EXIT_BUTTOM)
            .should('be.visible')
            .click({ force: true })

    }

    return null
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

    var category = category_locator.CATEGORY_NAME
    var subCategory = category_locator.SUB_CATEGORY_NAME
    var xpathGroup = category_locator.CATEGORY_BOX
    var xpathSub = category_locator.SUB_CATEGORY_BUTTON
    var url = category_locator.SUB_CATEGORY_LINK


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

    if (subCategory != 'Show more') {

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

    let button_home = locators.SHOP_CATEGORIES.BUTTON

    let address_2 = Object.keys(div);

    cy.log(address_2)

    for (let j = 0; j < address_2.length; j++) {

        let comp_2 = (address_2[j])

        cy.log(comp_2)

        let Button_test = div[comp_2]

        let button_shop_cat = Button_test.BUTTON

        let link = Button_test.LINK

        let category = Button_test.CATEGORY

        let sub = Button_test.SUB

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

        if (sub != "") {

            cy.xpath('/html/body/div[1]/div/div[1]/div[2]/div/div[2]/div[1]/div[2]/div[1]/div[1]/a')
                .contains(Button_test.SUB)
                .should('be.visible')

        }

        cy.xpath('/html/body/div[1]/div/div[1]/div[2]/div/div[2]/div[1]/div[2]/div[1]/div[2]/a')
            .contains(category)
            .should('be.visible')

    }

    return null
}

export function goToPortal(user, password) {

    cy.viewport(1920, 1080)

    login(user, password)

    cy.xpath(locators.GO_TO_PORTAL.BUTTON)
        .should('be.visible')
        .click()

    cy.url()
        .should('contains', '/distributors')

    return null
}

export function Barlink(name) {

    cy.viewport(1920, 1080)

    cy.xpath(locators["GO_TO_PORTAL"][name]["BUTTON"])
        .should('be.visible')
        .click()

    cy.url()
        .should('contains', locators["GO_TO_PORTAL"][name]["URL"])

    cy.wait(300)
    
    return null

}

export function buttonPage(state) {

    const address = locators["GO_TO_PORTAL"]["DISTRIBUITORS"]["ROW"]

    if(state = "next") {

        cy.xpath(address.NEXT).then($btn => {

            if (!($btn.attr('disabled'))) {

                cy.xpath(address.NEXT).click()

                cy.wait(300)

            }

        })

    }if(state = "back") {

        cy.xpath(address.BACK).then($btn2 => {

            if (!($btn2.attr('disabled'))) {

                cy.xpath(address.BACK).click()

                cy.wait(300)

            }

        })

    }

}

export function aliasRowConstruct() {

    let logLine = []

    const address = locators["GO_TO_PORTAL"]["DISTRIBUITORS"]["ROW"]

    let h = logLine.length

    cy.xpath(address.NEXT).then($btn => {

        for (let p = 1; p <= 2; p++) {

            if (!($btn.attr('disabled'))) {

                if (p != 1) {

                    cy.xpath(address.NEXT).click({ force: true })

                    cy.wait(1)

                }

                cy.xpath(address.RENDER).xpath("./Tr").then(rowRender => {

                    if (p != 1) {
                        h = logLine.length / 6 - 10
                    }


                    cy.log(h)

                    for (let i = 1; i <= rowRender.length; i++) {

                        var trSelector = address.RENDER + "/tr[" + i + "]"

                        var k = i + h

                        var line = 'line_' + k + "_"

                        for (let j = 1; j <= 6; j++) {

                            var tdSelector = trSelector + "/td[" + j + "]"

                            var td

                            if (j == 1) {
                                td = "order"
                            } if (j == 2) {
                                td = "name"
                            } if (j == 3) {
                                td = "address"
                            } if (j == 4) {
                                td = "contact_name"
                            } if (j == 5) {
                                td = "phone_number"
                            } if (j == 6) {
                                td = "status"
                                tdSelector = tdSelector + "/span"
                            }

                            var add = line + td

                            cy.xpath(tdSelector).invoke("text").as(add)

                            logLine.push([i], add)

                            if ((p === 2) & (i === rowRender.length) & (j === 1)) {
                                cy.get(`@${add}`).as("lastLine").then(last => {
                                    cy.log(last)
                                })
                            }
                        }
                    }
                })
            }
        }

        buttonPage("back")

    })

    return logLine

}

export function SearchNames(param) {

    const address = locators["GO_TO_PORTAL"]["DISTRIBUITORS"]["ROW"]

    let aliasLine

    let lineTarget

    let aliasStatus

    cy.get('@lastLine').then(last => {
             
        cy.xpath(locators.GO_TO_PORTAL.DISTRIBUITORS.STATUS.SELECT).select(param)

        for (let i = 1; i <= last; i++) {

            aliasStatus = `@line_${i}_status`      

            cy.get(aliasStatus).then(stt =>{

                cy.log(`${stt} = ${param}`)

                if((stt == param) | (param == null)){

                    aliasLine = `@line_${i}_name`

                    cy.get(aliasLine).then(srtText_1 => {

                        cy.get('input[class="chakra-input css-s1lt0a"]').type(srtText_1, { delay: 250 })

                        cy.wait(100)

                        lineTarget = `${address['RENDER']}//tr/td[2][contains(.,'${srtText_1}')]`

                        cy.xpath(lineTarget).invoke("text").should('be.equal', srtText_1)

                        cy.get('input[class="chakra-input css-s1lt0a"]').clear()

                        cy.xpath(locators.GO_TO_PORTAL.DISTRIBUITORS.BUTTON).click()

                    })

                }
            
            })
       
        }

    })

}

export function kebab(options) {

    Barlink("DISTRIBUITORS")

    duplicate(options)

    state(options)

}

function duplicate(options){

    const address = locators["GO_TO_PORTAL"]["DISTRIBUITORS"]

    if ((options == "Duplicate") | (options == null)) {

        cy.xpath("/html/body/div[1]/div/div[1]/div[2]/table/tbody//tr").then(row => {

            cy.log(row.length)

            for (let j = 1; j <= row.length; j++) {

                cy.xpath(`${address.ROW.RENDER}/tr[${j}]/td[7]/button`)
                    .click({ force: true })

                cy.wait(250)

                cy.xpath(`/html/body/div[${j + 2}]/div/div/button[1]`)
                    .click({ force: true })

                cy.wait(250)

                cy.url().should('be.equal', `${baseUrl}${address.KEBAB.DUPLICATE.LINK}${j}`)

                cy.xpath(address.KEBAB.DUPLICATE.BACK)
                    .click({ force: true })

                cy.wait(250)

            }
        })

    }
}

function state(options){

    const address = locators["GO_TO_PORTAL"]["DISTRIBUITORS"]

    if ((options == "State") | (options == null)) {

        cy.xpath("/html/body/div[1]/div/div[1]/div[2]/table/tbody//tr").then(row => {

            for (let i = 1; i <= row.length; i++) {

                if ((i == 1)) {

                    cy.xpath(`${address.ROW.RENDER}/tr[${i}]/td[7]/button`)
                        .click({ force: true })

                    cy.wait(250)

                    cy.xpath(`/html/body/div[${i + 2}]/div/div/button[2]`).invoke("text").then(textStatus => {


                        cy.xpath(`/html/body/div[${i + 2}]/div/div/button[2]`)
                            .click({ force: true })

                        cy.wait(250)

                        cy.xpath(address.KEBAB.STATUS.ALERT).should('be.visible').invoke("text").then(textAlert => {

                            if ((textStatus == 'Activate') & (textAlert == "Distributor activated successfully!")) {

                                cy.xpath(address.KEBAB.STATUS.ALERT).invoke("text").should('be.equal', textAlert)

                            } if ((textStatus == 'Deactivate') & (textAlert == "Distributor deactivated successfully!")) {

                                cy.xpath(address.KEBAB.STATUS.ALERT).invoke("text").should('be.equal', textAlert)

                            }

                            cy.wait(5000)

                            cy.xpath(`${address.ROW.RENDER}/tr[${i}]/td[7]/button`)
                                .click({ force: true })

                            cy.wait(250)

                            cy.xpath(`/html/body/div[${i + 2}]/div/div/button[2]`)
                                .click({ force: true })

                            cy.wait(5000)

                        })
                    })

                } else {

                    cy.xpath(`${address.ROW.RENDER}/tr[${i}]/td[7]/button`)
                        .click({ force: true })

                    cy.wait(250)

                    cy.xpath(`/html/body/div[${i + 3}]/div/div/button[2]`).invoke("text").then(textStatus => {


                        cy.xpath(`/html/body/div[${i + 3}]/div/div/button[2]`)
                            .click({ force: true })

                        cy.wait(250)

                        cy.xpath(address.KEBAB.STATUS.ALERT).should('be.visible').invoke("text").then(textAlert => {

                            if ((textStatus == 'Activate') & (textAlert == "Distributor activated successfully!")) {

                                cy.xpath(address.KEBAB.STATUS.ALERT).invoke("text").should('be.equal', textAlert)

                            } if ((textStatus == 'Deactivate') & (textAlert == "Distributor deactivated successfully!")) {

                                cy.xpath(address.KEBAB.STATUS.ALERT).invoke("text").should('be.equal', textAlert)

                            }

                            cy.wait(5000)

                            cy.xpath(`${address.ROW.RENDER}/tr[${i}]/td[7]/button`)
                                .click({ force: true })

                            cy.wait(250)

                            cy.xpath(`/html/body/div[${i + 3}]/div/div/button[2]`)
                                .click({ force: true })


                        })
                    })
                }
            }
        })

    }
}