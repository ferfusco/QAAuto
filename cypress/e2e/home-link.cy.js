import { locators } from "../support/locators_ClearSource";
import { cart, login ,urlBase ,allCategories ,explorerCategory } from "../support/commands.js";

describe("Cart", () => {


    it("cart link test", () => {

        cart(open)

        cart(close)

    })

})

describe("View All Categories", () => {

    it("View All Categories test", () => {

        allCategories()    

    })
    
})

describe("FeaturedCategories", () => {


    it("Tooling test", () => {

        var address = locators.FEATURED_CATEGORIES.TOOLING

        explorerCategory(address.TWIST_DRILLING)

        explorerCategory(address.COUNTERSINKING)

        explorerCategory(address.DEBURRING)

        explorerCategory(address.CORE_CUTTING)

        explorerCategory(address.SHOW_MORE)

    })
        
    it("Abrasive test", () => {

        var address = locators.FEATURED_CATEGORIES.ABRASSIVE

        explorerCategory(address.TWIST_FINISHING)

        explorerCategory(address.SANDING)
 
        explorerCategory(address.ACESSORIES)
 
        explorerCategory(address.BLENDING)
 
        explorerCategory(address.SHOW_MORE)

    })

    it("Power Tools test", () => {

        var address = locators.FEATURED_CATEGORIES.POWER_TOOLS

        explorerCategory(address.GRINDING)

        explorerCategory(address.FINISHING)
 
        explorerCategory(address.ACESSORIES)
 
        explorerCategory(address.HAND_DRILLS)
 
        explorerCategory(address.SHOW_MORE)

    })

    it("Spare Parts test", () => {

        var address = locators.FEATURED_CATEGORIES.SPARE_PARTS

        explorerCategory(address.WALTER)
 
        explorerCategory(address.SHOW_MORE)

    })

    it("MRO test", () => {

        var address = locators.FEATURED_CATEGORIES.MRO

        explorerCategory(address.CUTTING_FLUIDS)
        
        explorerCategory(address.ACESSORIES)
        
        explorerCategory(address.CLEANERS_DEGREASERS)
 
        explorerCategory(address.SHOW_MORE)

    })

    it("Welding test", () => {

        var address = locators.FEATURED_CATEGORIES.WELDING

        explorerCategory(address.ANTI_SPATTER)
        
        explorerCategory(address.CLEANERS_DEGREASERS)
        
        explorerCategory(address.ACESSORIES)
        
        explorerCategory(address.SURFOX_LIQUIDS)

        explorerCategory(address.SHOW_MORE)

    })

    it("Industrial Cleaning test", () => {

        var address = locators.FEATURED_CATEGORIES.INDUSTRIAL_CLEANING

        explorerCategory(address.CLEANERS_DEGREASERS)
        
        explorerCategory(address.SANITIZERS_DISINFECTANTS)
        
        explorerCategory(address.PARTS_WASHING)
        
        explorerCategory(address.ANTI_CORROSIVE)

        explorerCategory(address.SHOW_MORE)

    })

    it("Cutting Tools test", () => {

        var address = locators.FEATURED_CATEGORIES.CUTTING_TOOLS

        explorerCategory(address.TCT_HOLE_CUTTERS)
        
        explorerCategory(address.REAMERS)
        
        explorerCategory(address.DRILLS)
        
        explorerCategory(address.TAPS)

        explorerCategory(address.SHOW_MORE)

    })

    it("Cutting Equipment test", () => {

        var address = locators.FEATURED_CATEGORIES.CUTTING_EQUIPAMENT

        explorerCategory(address.OXY_FUEL_WELDING_ACCESSORIES)

        explorerCategory(address.CUTTING_TIP)

     // explorerCategory(address.WELDING_E_CUTTING_TORCHES)

        explorerCategory(address.OXY_FUEL_TORCH)

        explorerCategory(address.SHOW_MORE)

    })

    it("Hand Tools test", () => {

        var address = locators.FEATURED_CATEGORIES.HAND_TOOLS

        explorerCategory(address.BRUSHES)

        explorerCategory(address.CLAMPS)

        explorerCategory(address.PLIERS)
        
        explorerCategory(address.FILES)
        
        explorerCategory(address.SHOW_MORE)

    })

    it("Safety test", () => {

        var address = locators.FEATURED_CATEGORIES.SAFETY

        explorerCategory(address.EYE_PROTECTION)

        explorerCategory(address.LENSES_AND_COVER_PLATES)

        explorerCategory(address.WELDING_GLOVES)
        
        explorerCategory(address.GLOVES)
        
        explorerCategory(address.SHOW_MORE)

    })

})