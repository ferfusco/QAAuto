import { locators } from "../support/locators_ClearSource";
import { aliasRowConstruct, SearchNames, goToPortal, Barlink, buttonPage, kebab } from "../support/commands.js";


describe("go to admin portal test", () => {


    
    it("go to admin portal", () => {

        let adress = locators.LOGIN_DATA

        goToPortal(adress.USER_ADM,adress.PASSWORD_ADM)
    })

    it("redirect check", () => {

        let adress = locators.LOGIN_DATA

        goToPortal(adress.USER_ADM,adress.PASSWORD_ADM)

        Barlink("PRODUCTS_IMPORTS")

        Barlink("CONTRACTORS")

        Barlink("DISTRIBUITORS")

    })
    
    it("back & next, search, status", () => {

        let adress = locators.LOGIN_DATA

        goToPortal(adress.USER_ADM,adress.PASSWORD_ADM)

        Barlink("DISTRIBUITORS")
        
        buttonPage("next")

        buttonPage("back")

        aliasRowConstruct()

        SearchNames("Inactive")

        SearchNames("Active")

    })

    it("kebab", () => {

        let adress = locators.LOGIN_DATA

        goToPortal(adress.USER_ADM,adress.PASSWORD_ADM)

        Barlink("DISTRIBUITORS")
        
        kebab("Duplicate")

        kebab("State")

    })
    
})