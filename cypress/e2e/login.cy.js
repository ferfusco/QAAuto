import { locators } from "../support/locators_ClearSource";
import { login } from "../support/commands.js";


describe("Login's test", () => {


    it("login administrator", () => {

        login(

            locators.LOGIN_DATA.USER_ADM,
            locators.LOGIN_DATA.PASSWORD_ADM
            
        )

    })

    it("login contractor", () => {

        login(
            
            locators.LOGIN_DATA.USER_CONT,
            locators.LOGIN_DATA.PASSWORD_CONT
            
        )

    })

    it("login distribuitor", () => {

        login(
            
            locators.LOGIN_DATA.USER_DIST,
            locators.LOGIN_DATA.PASSWORD_DIST
            
        )

    })

    
})