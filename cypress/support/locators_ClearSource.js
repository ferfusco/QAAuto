export const locators = {

    LOGIN_DATA: {

        USER_ADM: "admin@lc.dev",
        PASSWORD_ADM: 'Test123!',
        ADM_CHECK: 'AD',

        USER_CONT: 'ariadnersb@gmail.com',
        PASSWORD_CONT: 'Ary@060580',
        CONT_CHECK: 'AR',

        
        USER_DIST: 'ariadner@lc.dev',
        PASSWORD_DIST: 'Test123!',
        DIST_CHECK: 'DS',

    },

    LOGIN: {

        LOGIN_BUTON_HOME: "/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[2]/div[1]/button",
        LOGIN_USER_FIELD:  '/html/body/div[3]/div[4]/div/section/div/div/div/form/div[1]/div/input',
        LOGIN_PASSWORD_FIELD: '/html/body/div[3]/div[4]/div/section/div/div/div/form/div[2]/div/input',
        LOGIN_BUTON: '/html/body/div[3]/div[4]/div/section/div/div/div/form/button',
        LOGIN_CHECK: '/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[2]/button/span',

    },

    CART: {

        ICON_HOME: '/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[2]/div[2]/button/div/div',
        CART_DIV: '/html/body/div[3]/div[2]/div[3]/div',
        CART_ELEMENT_CHECK: '[style="position: fixed; right: 0px; top: 0px; bottom: 0px; width: 100%; transform: translateX(0%) translateY(0px) translateZ(0px);"]',
        EXIT_BUTTOM:'/html/body/div[3]/div[2]/div[3]/div/div/div/div[1]/div/button',
    
    },

    ALL_CATEGORIES: {

        ALL_CATEGORIES_BUTTON_HOME: '/html/body/div[1]/div/div[1]/div[3]/div/div[1]/button[1]',
        PRODUCTS_CHECK: '/html/body/div[1]/div/div[1]/div[2]/div/p',
        BROWSE_BY_CATEGORIES: '/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[1]/p',

    },

    FEATURED_CATEGORIES: {

        TOOLING: {

            TWIST_DRILLING:{

                CATEGORY_NAME: 'Tooling',
                SUB_CATEGORY_NAME:'Twist Drilling',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[1]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[1]/div/ul/button[1]",
                SUB_CATEGORY_LINK:'products/?category=2-Twist%20Drilling',

            },

            COUNTERSINKING:{

                CATEGORY_NAME: 'Tooling', 
                SUB_CATEGORY_NAME: 'Countersinking',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[1]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[1]/div/ul/button[2]",
                SUB_CATEGORY_LINK: 'products/?category=3-Countersinking',

            },

            DEBURRING:{

                CATEGORY_NAME: 'Tooling', 
                SUB_CATEGORY_NAME: 'Deburring',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[1]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[1]/div/ul/button[3]",
                SUB_CATEGORY_LINK: 'products/?category=4-Deburring',

            },

            CORE_CUTTING:{

                CATEGORY_NAME: 'Tooling', 
                SUB_CATEGORY_NAME: 'Core Cutting',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[1]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[1]/div/ul/button[4]",
                SUB_CATEGORY_LINK: 'products/?category=5-Core%20Cutting',

            },

            SHOW_MORE:{

                CATEGORY_NAME: 'Tooling', 
                SUB_CATEGORY_NAME: 'Show more',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[1]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[1]/button",
                SUB_CATEGORY_LINK: 'products/?category=1-Tooling',

            },
        },

        ABRASSIVE: {

            TWIST_FINISHING:{

                CATEGORY_NAME: 'Abrasive', 
                SUB_CATEGORY_NAME: 'Twist Finishing',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[2]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[2]/div/ul/button[1]",
                SUB_CATEGORY_LINK: 'products/?category=10-Twist%20Finishing',

            },

            SANDING:{

                CATEGORY_NAME: 'Abrasive', 
                SUB_CATEGORY_NAME: 'Sanding',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[2]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[2]/div/ul/button[2]",
                SUB_CATEGORY_LINK: 'products/?category=11-Sanding',

            },

            ACESSORIES:{

                CATEGORY_NAME: 'Abrasive', 
                SUB_CATEGORY_NAME: 'Accessories',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[2]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[2]/div/ul/button[3]",
                SUB_CATEGORY_LINK: 'products/?category=12-Accessories',

            },

            BLENDING:{

                CATEGORY_NAME: 'Abrasive', 
                SUB_CATEGORY_NAME: 'Blending',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[2]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[2]/div/ul/button[4]",
                SUB_CATEGORY_LINK: 'products/?category=13-Blending',

            },

            SHOW_MORE:{

                CATEGORY_NAME: 'Abrasive', 
                SUB_CATEGORY_NAME: 'Show more',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[2]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[2]/button",
                SUB_CATEGORY_LINK: 'products/?category=9-Abrasive',

            },
        
        },

        POWER_TOOLS:{

            GRINDING:{

                CATEGORY_NAME: 'Power Tools', 
                SUB_CATEGORY_NAME: 'Grinding',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[3]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[3]/div/ul/button[1]",
                SUB_CATEGORY_LINK: 'products/?category=23-Grinding',

            },

            FINISHING:{

                CATEGORY_NAME: 'Power Tools', 
                SUB_CATEGORY_NAME: 'Finishing',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[3]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[3]/div/ul/button[2]",
                SUB_CATEGORY_LINK: 'products/?category=24-Finishing',

            },

            ACESSORIES:{

                CATEGORY_NAME: 'Power Tools', 
                SUB_CATEGORY_NAME: 'Accessories',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[3]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[3]/div/ul/button[3]",
                SUB_CATEGORY_LINK: 'products/?category=25-Accessories',

            },

            HAND_DRILLS:{

                CATEGORY_NAME: 'Power Tools', 
                SUB_CATEGORY_NAME: 'Hand Drills',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[3]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[3]/div/ul/button[4]",
                SUB_CATEGORY_LINK: 'products/?category=26-Hand%20Drills',

            },

            SHOW_MORE:{

                CATEGORY_NAME: 'Power Tools', 
                SUB_CATEGORY_NAME: 'Show more',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[3]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[3]/button",
                SUB_CATEGORY_LINK: 'products/?category=22-Power%20Tools',

            },

        },

        SPARE_PARTS:{

            WALTER:{

                CATEGORY_NAME: 'Spare Parts', 
                SUB_CATEGORY_NAME: 'Walter',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[4]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[4]/div/ul/button",
                SUB_CATEGORY_LINK: 'products/?category=64-Walter',

            },

            SHOW_MORE:{

                CATEGORY_NAME: 'Spare Parts', 
                SUB_CATEGORY_NAME: 'Show more',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[4]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[4]/button",
                SUB_CATEGORY_LINK: 'products/?category=28-Spare%20Parts',

            },
            
        },

        MRO:{

            CUTTING_FLUIDS:{

                CATEGORY_NAME: 'MRO', 
                SUB_CATEGORY_NAME: 'Cutting Fluids',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[5]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[5]/div/ul/button[1]",
                SUB_CATEGORY_LINK: 'products/?category=31-Cutting%20Fluids',

            },

            ACESSORIES:{

                CATEGORY_NAME: 'MRO', 
                SUB_CATEGORY_NAME: 'Accessories',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[5]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[5]/div/ul/button[2]",
                SUB_CATEGORY_LINK: 'products/?category=32-Accessories',

            },

            CLEANERS_DEGREASERS:{

                CATEGORY_NAME: 'MRO', 
                SUB_CATEGORY_NAME: 'Cleaners/Degreasers',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[5]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[5]/div/ul/button[3]",
                SUB_CATEGORY_LINK: 'products/?category=33-Cleaners%2FDegreasers',

            },
           
            SHOW_MORE:{

                CATEGORY_NAME: 'MRO', 
                SUB_CATEGORY_NAME: 'Show more',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[5]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[5]/button",
                SUB_CATEGORY_LINK: 'products/?category=30-MRO',

            },

        },

        WELDING:{

            ANTI_SPATTER:{

                CATEGORY_NAME: 'Welding', 
                SUB_CATEGORY_NAME: 'Anti-spatter',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[6]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[6]/div/ul/button[1]",
                SUB_CATEGORY_LINK: 'products/?category=36-Anti-spatter',

            },

            CLEANERS_DEGREASERS:{

                CATEGORY_NAME: 'Welding', 
                SUB_CATEGORY_NAME: 'Cleaners/Degreasers',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[6]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[6]/div/ul/button[2]",
                SUB_CATEGORY_LINK: 'products/?category=43-Cleaners%2FDegreasers',

            },

            ACESSORIES:{

                CATEGORY_NAME: 'Welding', 
                SUB_CATEGORY_NAME: 'Accessories',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[6]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[6]/div/ul/button[3]",
                SUB_CATEGORY_LINK: 'products/?category=45-Accessories',

            },

            SURFOX_LIQUIDS:{

                CATEGORY_NAME: 'Welding', 
                SUB_CATEGORY_NAME: 'Surfox Liquids',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[6]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[6]/div/ul/button[4]",
                SUB_CATEGORY_LINK: 'products/?category=49-Surfox%20Liquids',

            },

            SHOW_MORE:{

                CATEGORY_NAME: 'Welding', 
                SUB_CATEGORY_NAME: 'Show more',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[6]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[6]/button",
                SUB_CATEGORY_LINK: 'products/?category=35-Welding',

            },

        },
        
        INDUSTRIAL_CLEANING:{

            CLEANERS_DEGREASERS:{

                CATEGORY_NAME: 'Industrial Cleaning', 
                SUB_CATEGORY_NAME: 'Cleaners/Degreasers',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[7]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[7]/div/ul/button[1]",
                SUB_CATEGORY_LINK: 'products/?category=39-Cleaners%2FDegreasers',

            },

            SANITIZERS_DISINFECTANTS:{

                CATEGORY_NAME: 'Industrial Cleaning', 
                SUB_CATEGORY_NAME: 'Sanitizers & Disinfectants',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[7]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[7]/div/ul/button[2]",
                SUB_CATEGORY_LINK: 'products/?category=40-Sanitizers%20%26%20Disinfectants',

            },

            PARTS_WASHING:{

                CATEGORY_NAME: 'Industrial Cleaning', 
                SUB_CATEGORY_NAME: 'Parts Washing',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[7]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[7]/div/ul/button[3]",
                SUB_CATEGORY_LINK: 'products/?category=41-Parts%20Washing',

            },

            ANTI_CORROSIVE:{

                CATEGORY_NAME: 'Industrial Cleaning', 
                SUB_CATEGORY_NAME: 'Anti-Corrosive',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[7]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[7]/div/ul/button[4]",
                SUB_CATEGORY_LINK: 'products/?category=42-Anti-Corrosive',

            },

            SHOW_MORE:{

                CATEGORY_NAME: 'Industrial Cleaning', 
                SUB_CATEGORY_NAME: 'Show more',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[7]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[7]/button",
                SUB_CATEGORY_LINK: 'products/?category=38-Industrial%20Cleaning',

            },

        },

        CUTTING_TOOLS:{

            TCT_HOLE_CUTTERS:{

                CATEGORY_NAME: 'Cutting Tools', 
                SUB_CATEGORY_NAME: 'TCT Hole Cutters',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[8]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[8]/div/ul/button[1]",
                SUB_CATEGORY_LINK: 'products/?category=55-TCT%20Hole%20Cutters',

            },

            REAMERS:{

                CATEGORY_NAME: 'Cutting Tools', 
                SUB_CATEGORY_NAME: 'Reamers',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[8]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[8]/div/ul/button[2]",
                SUB_CATEGORY_LINK: 'products/?category=56-Reamers',

            },

            DRILLS:{

                CATEGORY_NAME: 'Cutting Tools', 
                SUB_CATEGORY_NAME: 'Drills',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[8]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[8]/div/ul/button[3]",
                SUB_CATEGORY_LINK: 'products/?category=57-Drills',

            },

            TAPS:{

                CATEGORY_NAME: 'Cutting Tools', 
                SUB_CATEGORY_NAME: 'Taps',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[8]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[8]/div/ul/button[4]",
                SUB_CATEGORY_LINK: 'products/?category=58-Taps',

            },

            SHOW_MORE:{

                CATEGORY_NAME: 'Cutting Tools', 
                SUB_CATEGORY_NAME: 'Show more',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[8]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[8]/button",
                SUB_CATEGORY_LINK: 'products/?category=54-Cutting%20Tools',

            },
        
        },

        CUTTING_EQUIPAMENT:{

            OXY_FUEL_WELDING_ACCESSORIES:{

                CATEGORY_NAME: 'Cutting Equipment', 
                SUB_CATEGORY_NAME: 'Oxy-Fuel Welding Accessories',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[9]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[9]/div/ul/button[1]",
                SUB_CATEGORY_LINK: 'products/?category=82-Oxy-Fuel%20Welding%20Accessories',

            },

            CUTTING_TIP:{

                CATEGORY_NAME: 'Cutting Equipment', 
                SUB_CATEGORY_NAME: 'Cutting Tip',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[9]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[9]/div/ul/button[2]",
                SUB_CATEGORY_LINK: 'products/?category=89-Cutting%20Tip',

            },

            WELDING_E_CUTTING_TORCHES:{

                CATEGORY_NAME: 'Cutting Equipment', 
                SUB_CATEGORY_NAME: 'Welding & Cutting Torches',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[9]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[9]/div/ul/button[3]",
                SUB_CATEGORY_LINK: 'products/?category=96-Welding%20%26%20Cutting%20Torches',

            },

            OXY_FUEL_TORCH:{

                CATEGORY_NAME: 'Cutting Equipment', 
                SUB_CATEGORY_NAME: 'Oxy-Fuel Torch',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[9]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[9]/div/ul/button[4]",
                SUB_CATEGORY_LINK: 'products/?category=118-Oxy-Fuel%20Torch',

            },

            SHOW_MORE:{

                CATEGORY_NAME: 'Cutting Equipment', 
                SUB_CATEGORY_NAME: 'Show more',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[9]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[9]/button",
                SUB_CATEGORY_LINK: 'products/?category=81-Cutting%20Equipment',

            },

        },

        HAND_TOOLS:{

            BRUSHES:{

                CATEGORY_NAME: 'Hand Tools', 
                SUB_CATEGORY_NAME: 'Brushes',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[10]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[10]/div/ul/button[1]",
                SUB_CATEGORY_LINK: 'products/?category=87-Brushes',

            },

            CLAMPS:{

                CATEGORY_NAME: 'Hand Tools', 
                SUB_CATEGORY_NAME: 'Clamps',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[10]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[10]/div/ul/button[2]",
                SUB_CATEGORY_LINK: 'products/?category=115-Clamps',

            },

            PLIERS:{

                CATEGORY_NAME: 'Hand Tools', 
                SUB_CATEGORY_NAME: 'Pliers',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[10]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[10]/div/ul/button[3]",
                SUB_CATEGORY_LINK: 'products/?category=123-Pliers',

            },

            FILES:{

                CATEGORY_NAME: 'Hand Tools', 
                SUB_CATEGORY_NAME: 'Files',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[10]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[10]/div/ul/button[4]",
                SUB_CATEGORY_LINK: 'products/?category=133-Files',

            },

            SHOW_MORE:{

                CATEGORY_NAME: 'Hand Tools', 
                SUB_CATEGORY_NAME: 'Show more',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[10]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[10]/button",
                SUB_CATEGORY_LINK: 'products/?category=86-Hand%20Tools',

            },

        },

        SAFETY:{

            EYE_PROTECTION:{

                CATEGORY_NAME: 'Safety', 
                SUB_CATEGORY_NAME: 'Eye Protection',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[11]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[11]/div/ul/button[1]",
                SUB_CATEGORY_LINK: 'products/?category=99-Eye%20Protection',

            },

            LENSES_AND_COVER_PLATES:{

                CATEGORY_NAME: 'Safety', 
                SUB_CATEGORY_NAME: 'Lenses and Cover Plates',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[11]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[11]/div/ul/button[2]",
                SUB_CATEGORY_LINK: 'products/?category=117-Lenses%20and%20Cover%20Plates',

            },

            WELDING_GLOVES:{

                CATEGORY_NAME: 'Safety', 
                SUB_CATEGORY_NAME: 'Welding Gloves',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[11]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[11]/div/ul/button[3]",
                SUB_CATEGORY_LINK: 'products/?category=122-Welding%20Gloves',

            },

            GLOVES:{

                CATEGORY_NAME: 'Safety', 
                SUB_CATEGORY_NAME: 'Gloves',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[11]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[11]/div/ul/button[4]",
                SUB_CATEGORY_LINK: 'products/?category=124-Gloves',

            },

            SHOW_MORE:{

                CATEGORY_NAME: 'Safety', 
                SUB_CATEGORY_NAME: 'Show more',
                CATEGORY_BOX: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[11]",
                SUB_CATEGORY_BUTTON: "/html/body/div[1]/div/div[1]/div[3]/div/div[2]/div[11]/button",
                SUB_CATEGORY_LINK: 'products/?category=98-Safety',

            },
            
        },

    },

}