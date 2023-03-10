import { locators } from "../support/locators_ClearSource";
import { rowColect, searchInput ,goToPortal, Barlink } from "../support/commands.js";


describe("go to admin portal test", () => {


    it("go to admin portal", () => {

        var adress = locators.LOGIN_DATA

        goToPortal(adress.USER_ADM,adress.PASSWORD_ADM)

        Barlink("PRODUCTS_IMPORTS")

        Barlink("CONTRACTORS")

        Barlink("DISTRIBUITORS")

        rowColect()
        
        searchInput()

    })
    
})