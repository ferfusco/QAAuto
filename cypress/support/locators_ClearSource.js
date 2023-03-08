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

    
    GO_TO_PORTAL:{

        BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[2]/a",

        HOME_BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/a/img",

        PRODUCTS_IMPORTS:{

            BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/a[1]",
            URL:"admin/products/import",
            FILE_INPUT:"/html/body/div[1]/div/div[1]/div[2]/div/div/label",

        },

        DISTRIBUITORS:{
            
            BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/a[2]",
            NAME:"/html/body/div[1]/div/div[1]/div[2]/div[1]/p",
            URL:"admin/distributors",
            SEARCH_INPUT:"/html/body/div[1]/div/div[1]/div[2]/div[2]/div[1]/div/input",

            STATUS:{

                SELECT:"/html/body/div[1]/div/div[1]/div[2]/div[2]/div[2]/div/select",

                OPTION_1:"/html/body/div[1]/div/div[1]/div[2]/div[2]/div[2]/div/select/option[1]",
                NAME_1:"Status",

                OPTION_2:"/html/body/div[1]/div/div[1]/div[2]/div[2]/div[2]/div/select/option[2]",
                NAME_2:"Active",

                OPTION_3:"/html/body/div[1]/div/div[1]/div[2]/div[2]/div[2]/div/select/option[3]",
                NAME_3:"Inactive",
            },

            NEW_DISTRIBUITOR:{

                BUTTON:"/html/body/div[1]/div/div[1]/div[2]/div[2]/div[2]/a/button",
                URL:"admin/distributors/new",
                ORDER:"/html/body/div[1]/div/div[1]/div[2]/table/tbody/tr[1]/td[1]",

            },

            ROW:{
                RENDER:"/html/body/div[1]/div/div[1]/div[2]/table/tbody",
                TR:                                                    "/tr[N]",
                ORDER:                                                        "/td[1]",
                NAME:                                                         "/td[2]",
                ADDRESS:                                                      "/td[3]",
                CONTACT_NAME:                                                 "/td[4]",
                PHONE_NUMBER:                                                 "/td[5]",
                STATUS:                                                       "/td[6]/span",
                ROW_EXPECTED:"/html/body/div[1]/div/div[1]/div[2]/table/tbody/tr",
                
            },

            KEBAB_1:{
                
                BUTTON:"/html/body/div[1]/div/div[1]/div[2]/table/tbody/tr[1]/td[7]/button",

                DUPLICATE:{

                    BUTTON:"/html/body/div[3]/div/div/button[1]",
                    LINK:"admin/distributors/duplicate/1"

                },

                STATUS:{

                    BUTTON:"/html/body/div[3]/div/div/button[2]",
                    ALERT:"/html/body/div[2]/ul[5]/li/div/div/div/div",
                    NAME_1:"Activate",
                    NAME_2:"Deactivate",

                },
               
            },
            
        },

        CONTRACTORS:{

            BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/a[3]",
            URL:"admin/contractors",
            NAME:"/html/body/div[1]/div/div[1]/div[2]/div[1]/p",

        },

    },

    SHOP_CATEGORIES: {

        BUTTON: "/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/button",

        MENU: "/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div",        

        DIV_1: {

            TOOLING:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[1]/button[1]",
                LINK:"products/?category=1-Tooling",
                CATEGORY:"Tooling",
                SUB:"",
            },
            TWIST_DRILLING:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[1]/button[2]",
                LINK:"products/?category=2-Twist%20Drilling",
                CATEGORY:"Tooling",
                SUB:"Twist Drilling",
            },
            COUNTERSINKING:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[1]/button[3]",
                LINK:"products/?category=3-Countersinking",
                CATEGORY:"Tooling",
                SUB:"Countersinking",
            },
            DEBURRING:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[1]/button[4]",
                LINK:"products/?category=4-Deburring",
                CATEGORY:"Tooling",
                SUB:"Deburring",
            },
            CORE_CUTTING:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[1]/button[5]",
                LINK:"products/?category=5-Core%20Cutting",
                CATEGORY:"Tooling",
                SUB:"Core Cutting",
            },
            CARBIDE_BURRS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[1]/button[6]",
                LINK:"products/?category=6-Carbide%20Burrs",
                CATEGORY:"Tooling",
                SUB:"Carbide Burrs",
            },
            TAPPING:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[1]/button[7]",
                LINK:"products/?category=7-Tapping",
                CATEGORY:"Tooling",
                SUB:"Tapping",
            },
            ACESSORIES:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[1]/button[8]",
                LINK:"products/?category=8-Accessories",
                CATEGORY:"Tooling",
                SUB:"Accessories",
            },
            CHAINSAWS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[1]/button[9]",
                LINK:"products/?category=142-Chainsaws",
                CATEGORY:"Tooling",
                SUB:"Chainsaws",
            },

        },
       
        DIV_2: {

            ABRASSIVE:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[2]/button[1]",
                LINK:"products/?category=9-Abrasive",
                CATEGORY:"Abrasive",
                SUB:"",
            },
            TWIST_FINISHING:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[2]/button[2]",
                LINK:"products/?category=10-Twist%20Finishing",
                CATEGORY:"Abrasive",
                SUB:"Twist Finishing",
            },
            SANDING:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[2]/button[3]",
                LINK:"products/?category=11-Sanding",
                CATEGORY:"Abrasive",
                SUB:"Sanding",
            },
            ACESSORIES:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[2]/button[4]",
                LINK:"products/?category=12-Accessories",
                CATEGORY:"Abrasive",
                SUB:"Accessories",
            }, 
            BLENDING:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[2]/button[5]",
                LINK:"products/?category=13-Blending",
                CATEGORY:"Abrasive",
                SUB:"Blending",
            },
            FINISHING:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[2]/button[6]",
                LINK:"products/?category=14-Finishing",
                CATEGORY:"Abrasive",
                SUB:"Finishing",
            },
            GRINDING:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[2]/button[7]",
                LINK:"products/?category=15-Grinding",
                CATEGORY:"Abrasive",
                SUB:"Grinding",
            },
            WIRE_BRUSH:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[2]/button[8]",
                LINK:"products/?category=16-Wire%20Brush",
                CATEGORY:"Abrasive",
                SUB:"Wire Brush",
            },
            CUTTING:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[2]/button[9]",
                LINK:"products/?category=17-Cutting",
                CATEGORY:"Abrasive",
                SUB:"Cutting",
            },
            WIRE_WHEEL_BRUSHES:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[2]/button[10]",
                LINK:"products/?category=18-Wire%20Wheel%20brushes",
                CATEGORY:"Abrasive",
                SUB:"Wire Wheel brushes",
            },
            MONTED_WIRE_BRUSHES:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[2]/button[11]",
                LINK:"products/?category=19-Mounted%20Wire%20Brushes",
                CATEGORY:"Abrasive",
                SUB:"Mounted Wire Brushes",
            },
            WIRE_CUP_BRUSHES:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[2]/button[12]",
                LINK:"products/?category=20-Wire%20Cup%20Brushes",
                CATEGORY:"Abrasive",
                SUB:"Wire Cup Brushes",
            },
            SAUCER_CUP_BRUSHES:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[2]/button[13]",
                LINK:"products/?category=21-SAUCER-CUP%20Brushes",
                CATEGORY:"Abrasive",
                SUB:"SAUCER-CUP Brushes",
            },
                        
        },
       
        DIV_3: {

            POWER_TOOLS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[3]/button[1]",
                LINK:"products/?category=22-Power%20Tools",
                CATEGORY:"Power Tools",
                SUB:"",
            },
            GRINDING:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[3]/button[2]",
                LINK:"products/?category=23-Grinding",
                CATEGORY:"Power Tools",
                SUB:"Grinding",
            },
            FINISHING:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[3]/button[3]",
                LINK:"products/?category=24-Finishing",
                CATEGORY:"Power Tools",
                SUB:"Finishing",
            },
            ACESSORIES:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[3]/button[4]",
                LINK:"products/?category=25-Accessories",
                CATEGORY:"Power Tools",
                SUB:"Accessories",
            },
            HAND_DRILLS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[3]/button[5]",
                LINK:"products/?category=26-Hand%20Drills",
                CATEGORY:"Power Tools",
                SUB:"Hand Drills",
            },
            MAGNETIC_DRILLING_UNITS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[3]/button[6]",
                LINK:"products/?category=27-Magnetic%20Drilling%20Units",
                CATEGORY:"Power Tools",
                SUB:"Magnetic Drilling Units",
            },
            
        },

        DIV_4: {

            SPARE_PARTS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[4]/button[1]",
                LINK:"products/?category=28-Spare%20Parts",
                CATEGORY:"Spare Parts",
                SUB:"",
            },
            WALTER:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[4]/button[2]",
                LINK:"products/?category=64-Walter",
                CATEGORY:"Spare Parts",
                SUB:"Walter",
            },

        },

        DIV_5: {

            MRO:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[5]/button[1]",
                LINK:"products/?category=30-MRO",
                CATEGORY:"MRO",
                SUB:"",
            },
            CUTTING_FLUIDS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[5]/button[2]",
                LINK:"products/?category=31-Cutting%20Fluids",
                CATEGORY:"MRO",
                SUB:"Cutting Fluids",
            },
            ACESSORIES:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[5]/button[3]",
                LINK:"products/?category=32-Accessories",
                CATEGORY:"MRO",
                SUB:"Accessories",
            },
            CLEANERS_DEGREASERS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[5]/button[4]",
                LINK:"products/?category=33-Cleaners%2FDegreasers",
                CATEGORY:"MRO",
                SUB:"Cleaners/Degreasers",
            },
            LUBRIFICANTS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[5]/button[5]",
                LINK:"products/?category=34-Lubricants",
                CATEGORY:"MRO",
                SUB:"Lubricants",
            },
            ADDITIVES:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[5]/button[6]",
                LINK:"products/?category=37-Additives",
                CATEGORY:"MRO",
                SUB:"Additives",
            },
                        
        },

        DIV_6: {
            
            WELDING:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[1]",
                LINK:"products/?category=35-Welding",
                CATEGORY:"Welding",
                SUB:"",
            },
            ANTI_SPATTER:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[2]",
                LINK:"products/?category=36-Anti-spatter",
                CATEGORY:"Welding",
                SUB:"Anti-spatter",
            },
            CLEANERS_DEGREASERS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[3]",
                LINK:"products/?category=43-Cleaners%2FDegreasers",
                CATEGORY:"Welding",
                SUB:"Cleaners/Degreasers",
            },
            ACESSORIES:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[4]",
                LINK:"products/?category=45-Accessories",
                CATEGORY:"Welding",
                SUB:"Accessories",
            },
            SURFOX_LIQUIDS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[5]",
                LINK:"products/?category=49-Surfox%20Liquids",
                CATEGORY:"Welding",
                SUB:"Surfox Liquids",
            },
            SURFOX_MARKING_E_TESTING:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[6]",
                LINK:"products/?category=50-Surfox%20Marking%20%26%20Testing",
                CATEGORY:"Welding",
                SUB:"Surfox Marking & Testing",
            },
            SURFOX:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[7]",
                LINK:"products/?category=51-Surfox",
                CATEGORY:"Welding",
                SUB:"Surfox",
            },
            WELD_CLEANING:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[8]",
                LINK:"products/?category=65-Weld%20Cleaning",
                CATEGORY:"Welding",
                SUB:"Weld Cleaning",
            },
            TIG_WELDING_ACCESSORIES:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[9]",
                LINK:"products/?category=67-TIG%20Welding%20Accessories",
                CATEGORY:"Welding",
                SUB:"TIG Welding Accessories",
            },
            TIG_WELDING_COLLET_BODY:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[10]",
                LINK:"products/?category=68-TIG%20Welding%20Collet%20Body",
                CATEGORY:"Welding",
                SUB:"TIG Welding Collet Body",
            },
            TIG_WELDING_COLLET:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[11]",
                LINK:"products/?category=69-TIG%20Welding%20Collet",
                CATEGORY:"Welding",
                SUB:"TIG Welding Collet",
            },
            TIG_WELDING_NOZZLE:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[12]",
                LINK:"products/?category=70-TIG%20Welding%20Nozzle",
                CATEGORY:"Welding",
                SUB:"TIG Welding Nozzle",
            },
            MIG_WELDING_TIP:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[13]",
                LINK:"products/?category=71-MIG%20Welding%20Tip",
                CATEGORY:"Welding",
                SUB:"MIG Welding Tip",
            },
            MIG_WELDING_NOZZLE:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[14]",
                LINK:"products/?category=72-MIG%20Welding%20Nozzle",
                CATEGORY:"Welding",
                SUB:"MIG Welding Nozzle",
            },
            MIG_GUN_ACCESSORIES:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[15]",
                LINK:"products/?category=73-MIG%20Gun%20Accessories",
                CATEGORY:"Welding",
                SUB:"MIG Gun Accessories",
            },
            MIG_GUN_LINER:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[16]",
                LINK:"products/?category=74-MIG%20Gun%20Liner",
                CATEGORY:"Welding",
                SUB:"MIG Gun Liner",
            },
            MIG_WELDING_GUN:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[17]",
                LINK:"products/?category=75-MIG%20Welding%20Gun",
                CATEGORY:"Welding",
                SUB:"MIG Welding Gun",
            },
            MIG_NOZZLE_INSULATOR:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[18]",
                LINK:"products/?category=76-MIG%20Nozzle%20Insulator",
                CATEGORY:"Welding",
                SUB:"MIG Nozzle Insulator",
            },
            MIG_WELDING_DIFFUSER:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[19]",
                LINK:"products/?category=77-MIG%20Welding%20Diffuser",
                CATEGORY:"Welding",
                SUB:"MIG Welding Diffuser",
            },
            TIG_ACCESSORIES_KITS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[20]",
                LINK:"products/?category=78-TIG%20Accessory%20Kits",
                CATEGORY:"Welding",
                SUB:"TIG Accessory Kits",
            },
            TIG_TORCH_BODIES:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[21]",
                LINK:"products/?category=79-TIG%20Torch%20Bodies",
                CATEGORY:"Welding",
                SUB:"TIG Torch Bodies",
            },
            TIG_WELDING_TORCH:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[22]",
                LINK:"products/?category=80-TIG%20Welding%20Torch",
                CATEGORY:"Welding",
                SUB:"TIG Welding Torch",
            },
            CLAMPS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[23]",
                LINK:"products/?category=83-Clamps",
                CATEGORY:"Welding",
                SUB:"Clamps",
            },
            FLUX:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[24]",
                LINK:"products/?category=84-Flux",
                CATEGORY:"Welding",
                SUB:"Flux",
            },
            WELDING_ELECTRODES:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[25]",
                LINK:"products/?category=85-Welding%20Electrodes",
                CATEGORY:"Welding",
                SUB:"Welding Electrodes",
            },
            MIG_WIRE:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[26]",
                LINK:"products/?category=88-MIG%20Wire",
                CATEGORY:"Welding",
                SUB:"MIG Wire",
            },
            WELDING_BRAZING_TIP:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[27]",
                LINK:"products/?category=90-Welding%2FBrazing%20Tip",
                CATEGORY:"Welding",
                SUB:"Welding/Brazing Tip",
            },
            FLOWMETER:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[28]",
                LINK:"products/?category=91-Flowmeter",
                CATEGORY:"Welding",
                SUB:"Flowmeter",
            },
            HEATING_TIP:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[29]",
                LINK:"products/?category=92-Heating%20Tip",
                CATEGORY:"Welding",
                SUB:"Heating Tip",
            },
            WELDING_HOSE:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[30]",
                LINK:"products/?category=93-Welding%20Hose",
                CATEGORY:"Welding",
                SUB:"Welding Hose",
            },
            PIPE_WRAPS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[31]",
                LINK:"products/?category=94-Pipe%20Wraps",
                CATEGORY:"Welding",
                SUB:"Pipe Wraps",
            },
            CABLE_CONNECTORS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[32]",
                LINK:"products/?category=95-Cable%20Connectors",
                CATEGORY:"Welding",
                SUB:"Cable Connectors",
            },
            TUNGTEN_ELECTRODES:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[33]",
                LINK:"products/?category=97-Tungsten%20Electrodes",
                CATEGORY:"Welding",
                SUB:"Tungsten Electrodes",
            },
            GAS_APPARATUS_REPLACEMENT_PARTS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[34]",
                LINK:"products/?category=100-Gas%20Apparatus%20Replacement%20Parts",
                CATEGORY:"Welding",
                SUB:"Gas Apparatus Replacement Parts",
            },
            REGULATOR:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[35]",
                LINK:"products/?category=101-Regulator",
                CATEGORY:"Welding",
                SUB:"Regulator",
            },
            ELETRODE_HOLDERS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[36]",
                LINK:"products/?category=102-Electrode%20Holders",
                CATEGORY:"Welding",
                SUB:"Electrode Holders",
            },
            GOUGING_TORCH:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[37]",
                LINK:"products/?category=103-Gouging%20Torch",
                CATEGORY:"Welding",
                SUB:"Gouging Torch",
            },
            GROUND_CLAMPS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[38]",
                LINK:"products/?category=104-Ground%20Clamps",
                CATEGORY:"Welding",
                SUB:"Ground Clamps",
            },
            HOSE_REELS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[39]",
                LINK:"products/?category=105-Hose%20Reels",
                CATEGORY:"Welding",
                SUB:"Hose Reels",
            },
            WELDING_ACCESSORIES:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[40]",
                LINK:"products/?category=106-Welding%20Accessories",
                CATEGORY:"Welding",
                SUB:"Welding Accessories",
            },
            BRAZING_ROD:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[41]",
                LINK:"products/?category=107-Brazing%20Rod",
                CATEGORY:"Welding",
                SUB:"Brazing Rod",
            },
            BATTERY_CLAMPS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[42]",
                LINK:"products/?category=108-Battery%20Clamps",
                CATEGORY:"Welding",
                SUB:"Battery Clamps",
            },
            EQUIPAMENT:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[43]",
                LINK:"products/?category=109-Equipment",
                CATEGORY:"Welding",
                SUB:"Equipment",
            },
            CYLINDER_CARTS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[44]",
                LINK:"products/?category=110-Cylinder%20Carts",
                CATEGORY:"Welding",
                SUB:"Cylinder Carts",
            },
            WELDING_CHERMICALS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[45]",
                LINK:"products/?category=111-Welding%20Chemicals",
                CATEGORY:"Welding",
                SUB:"Welding Chemicals",
            },
            GOUGING_CARBONS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[46]",
                LINK:"products/?category=112-Gouging%20Carbons",
                CATEGORY:"Welding",
                SUB:"Gouging Carbons",
            },
            TIG_FILLER_ROD:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[47]",
                LINK:"products/?category=113-TIG%20Filler%20Rod",
                CATEGORY:"Welding",
                SUB:"TIG Filler Rod",
            },
            EXTENSION_CORDS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[48]",
                LINK:"products/?category=114-Extension%20Cords",
                CATEGORY:"Welding",
                SUB:"Extension Cords",
            },
            BALLOON_FILLERS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[49]",
                LINK:"products/?category=116-Balloon%20Fillers",
                CATEGORY:"Welding",
                SUB:"Balloon Fillers",
            },
            POWER_CABLES:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[50]",
                LINK:"products/?category=121-Power%20Cables",
                CATEGORY:"Welding",
                SUB:"Power Cables",
            },
            WELDING_BLANKETS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[51]",
                LINK:"products/?category=125-Welding%20Blankets",
                CATEGORY:"Welding",
                SUB:"Welding Blankets",
            },
            PIPE_STANDS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[52]",
                LINK:"products/?category=126-Pipe%20Stands",
                CATEGORY:"Welding",
                SUB:"Pipe Stands",
            },
            AIR_HOSE:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[53]",
                LINK:"products/?category=127-Air%20Hose",
                CATEGORY:"Welding",
                SUB:"Air Hose",
            },
            PROPANE_EQUIPAMENT:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[54]",
                LINK:"products/?category=129-Propane%20Equipment",
                CATEGORY:"Welding",
                SUB:"Propane Equipment",
            },
            WELDING_SAFETY:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[55]",
                LINK:"products/?category=131-Welding%20Safety",
                CATEGORY:"Welding",
                SUB:"Welding Safety",
            },
            WELDING_CABLE_LUGS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[56]",
                LINK:"products/?category=134-Welding%20Cable%20Lugs",
                CATEGORY:"Welding",
                SUB:"Welding Cable Lugs",
            },
            INSULATORS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[57]",
                LINK:"products/?category=136-Insulators",
                CATEGORY:"Welding",
                SUB:"Insulators",
            },
            STICK_ELECTRODES:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[58]",
                LINK:"products/?category=139-Stick%20Electrodes",
                CATEGORY:"Welding",
                SUB:"Stick Electrodes",
            },
            HARDFACING:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[59]",
                LINK:"products/?category=140-Hardfacing",
                CATEGORY:"Welding",
                SUB:"Hardfacing",
            },
            SUBMERGED_ARC:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[6]/button[60]",
                LINK:"products/?category=141-Submerged%20Arc",
                CATEGORY:"Welding",
                SUB:"Submerged Arc",
            },

        },
        
        DIV_7: {
            
            INDUSTRIAL_CLEANING:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[7]/button[1]",
                LINK:"products/?category=38-Industrial%20Cleaning",
                CATEGORY:"Industrial Cleaning",
                SUB:"",
            },
            CLEANERS_DEGREASERS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[7]/button[2]",
                LINK:"products/?category=39-Cleaners%2FDegreasers",
                CATEGORY:"Industrial Cleaning",
                SUB:"Cleaners/Degreasers",
            },
            SANITIZERS_DISINFECTANTS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[7]/button[3]",
                LINK:"products/?category=40-Sanitizers%20%26%20Disinfectants",
                CATEGORY:"Industrial Cleaning",
                SUB:"Sanitizers & Disinfectants",
            },
            PARTS_WASHING:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[7]/button[4]",
                LINK:"products/?category=41-Parts%20Washing",
                CATEGORY:"Industrial Cleaning",
                SUB:"Parts Washing",
            },
            ANTI_CORROSIVE:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[7]/button[5]",
                LINK:"products/?category=42-Anti-Corrosive",
                CATEGORY:"Industrial Cleaning",
                SUB:"Anti-Corrosive",
            },
            CORROSION_PROTECTION:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[7]/button[6]",
                LINK:"products/?category=44-Corrosion%20protection",
                CATEGORY:"Industrial Cleaning",
                SUB:"Corrosion protection",
            },
            ACESSORIES:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[7]/button[7]",
                LINK:"products/?category=46-Accessories",
                CATEGORY:"Industrial Cleaning",
                SUB:"Accessories",
            },
            AEROSOL_REFILING_SYSTEM:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[7]/button[8]",
                LINK:"products/?category=47-Aerosol%20Refilling%20System",
                CATEGORY:"Industrial Cleaning",
                SUB:"Aerosol Refilling System",
            },
            CLEANERS_E_LUBRIFICATION:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[7]/button[9]",
                LINK:"products/?category=48-Cleaner%20%26%20Lubrication",
                CATEGORY:"Industrial Cleaning",
                SUB:"Cleaner & Lubrication",
            },
            ANTI_SPARTER:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[7]/button[10]",
                LINK:"products/?category=52-Anti-spatter",
                CATEGORY:"Industrial Cleaning",
                SUB:"Anti-spatter",
            },
            WELD_CLEANING:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[7]/button[11]",
                LINK:"products/?category=53-Weld%20Cleaning",
                CATEGORY:"Industrial Cleaning",
                SUB:"Weld Cleaning",
            },
            ADDITIVES:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[7]/button[12]",
                LINK:"products/?category=66-Additives",
                CATEGORY:"Industrial Cleaning", 
                SUB:"Additives",
            },

        },

        DIV_8: {

            CUTTING_TOOLS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[8]/button[1]",
                LINK:"products/?category=54-Cutting%20Tools",
                CATEGORY:"Cutting Tools", 
                SUB:"",
            },
            TCT_HOLE_CUTTERS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[8]/button[2]",
                LINK:"products/?category=55-TCT%20Hole%20Cutters",
                CATEGORY:"Cutting Tools", 
                SUB:"TCT Hole Cutters",
            },
            REAMERS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[8]/button[3]",
                LINK:"products/?category=56-Reamers",
                CATEGORY:"Cutting Tools", 
                SUB:"Reamers",
            },
            DRILLS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[8]/button[4]",
                LINK:"products/?category=57-Drills",
                CATEGORY:"Cutting Tools", 
                SUB:"Drills",
            },
            TAPS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[8]/button[5]",
                LINK:"products/?category=58-Taps",
                CATEGORY:"Cutting Tools", 
                SUB:"Taps",
            },
            DIES:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[8]/button[6]",
                LINK:"products/?category=59-Dies",
                CATEGORY:"Cutting Tools", 
                SUB:"Dies",
            },
            BURS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[8]/button[7]",
                LINK:"products/?category=60-Burs",
                CATEGORY:"Cutting Tools", 
                SUB:"Burs",
            },
            ANNULAR_CUTTERS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[8]/button[8]",
                LINK:"products/?category=61-Annular%20Cutters",
                CATEGORY:"Cutting Tools", 
                SUB:"Annular Cutters",
            },
            END_MILLS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[8]/button[9]",
                LINK:"products/?category=62-End%20Mills",
                CATEGORY:"Cutting Tools", 
                SUB:"End Mills",
            },
            COUNTERSINKS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[8]/button[10]",
                LINK:"products/?category=63-Countersinks",
                CATEGORY:"Cutting Tools", 
                SUB:"Countersinks",
            },
        },

        DIV_9: {
                                         
            CUTTING_EQUIPAMENT:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[9]/button[1]",
                LINK:"products/?category=81-Cutting%20Equipment",
                CATEGORY:"Cutting Equipment", 
                SUB:"",
            },
            OXY_FUEL_WELDING_ACCESSORIES:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[9]/button[2]",
                LINK:"products/?category=82-Oxy-Fuel%20Welding%20Accessories",
                CATEGORY:"Cutting Equipment", 
                SUB:"Oxy-Fuel Welding Accessories",
            },
            CUTTING_TIP:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[9]/button[3]",
                LINK:"products/?category=89-Cutting%20Tip",
                CATEGORY:"Cutting Equipment", 
                SUB:"Cutting Tip",
            },
            WELDING_E_CUTTING_TORCHES:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[9]/button[4]",
                LINK:"products/?category=96-Welding%20%26%20Cutting%20Torches",
                CATEGORY:"Cutting Equipment", 
                SUB:"Welding & Cutting Torches",
            },
            OXY_FUEL_TORCH:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[9]/button[5]",
                LINK:"products/?category=118-Oxy-Fuel%20Torch",
                CATEGORY:"Cutting Equipment", 
                SUB:"Oxy-Fuel Torch",
            },
            PLASMA_CUTTING_EQUIPAMENT:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[9]/button[6]",
                LINK:"products/?category=119-Plasma%20Cutting%20Equipment",
                CATEGORY:"Cutting Equipment", 
                SUB:"Plasma Cutting Equipment",
            },
            OXY_ACETYLENE_TORCH_KIT:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[9]/button[7]",
                LINK:"products/?category=120-Oxy-Acetylene%20Torch%20Kit",
                CATEGORY:"Cutting Equipment", 
                SUB:"Oxy-Acetylene Torch Kit",
            },
                                          
        },

        DIV_10: {

            HAND_TOOLS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[10]/button[1]",
                LINK:"products/?category=86-Hand%20Tools",
                CATEGORY:"Hand Tools", 
                SUB:"",
            },
            BRUSHES:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[10]/button[2]",
                LINK:"products/?category=87-Brushes",
                CATEGORY:"Hand Tools", 
                SUB:"Brushes",
            },
            CLAMPS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[10]/button[3]",
                LINK:"products/?category=115-Clamps",
                CATEGORY:"Hand Tools", 
                SUB:"Clamps",
            },
            PLIERS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[10]/button[4]",
                LINK:"products/?category=123-Pliers",
                CATEGORY:"Hand Tools", 
                SUB:"Pliers",
            },
            FILES:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[10]/button[5]",
                LINK:"products/?category=133-Files",
                CATEGORY:"Hand Tools", 
                SUB:"Files",
            },
            CHIPPING_HAMMERS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[10]/button[6]",
                LINK:"products/?category=135-Chipping%20Hammers",
                CATEGORY:"Hand Tools", 
                SUB:"Chipping Hammers",
            },

        },

        DIV_11: {

            SAFETY:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[11]/button[1]",
                LINK:"products/?category=98-Safety",
                CATEGORY:"Safety", 
                SUB:"",
            },
            EYE_PROTECTION:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[11]/button[2]",
                LINK:"products/?category=99-Eye%20Protection",
                CATEGORY:"Safety", 
                SUB:"Eye Protection",
            },
            LENSES_AND_COVER_PLATES:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[11]/button[3]",
                LINK:"products/?category=117-Lenses%20and%20Cover%20Plates",
                CATEGORY:"Safety", 
                SUB:"Lenses and Cover Plates",
            },
            WELDING_GLOVES:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[11]/button[4]",
                LINK:"products/?category=122-Welding%20Gloves",
                CATEGORY:"Safety", 
                SUB:"Welding Gloves",
            },
            GLOVES:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[11]/button[5]",
                LINK:"products/?category=124-Gloves",
                CATEGORY:"Safety", 
                SUB:"Gloves",
            },
            WELDING_SAFETY:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[11]/button[6]",
                LINK:"products/?category=128-Welding%20Safety",
                CATEGORY:"Safety", 
                SUB:"Welding Safety",
            },
            WELDING_JACKETS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[11]/button[7]",
                LINK:"products/?category=130-Welding%20Jackets",
                CATEGORY:"Safety", 
                SUB:"Welding Jackets",
            },
            WELDING_HELMETS:{      
                BUTTON:"/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[1]/div/div/div/div[11]/button[8]",
                LINK:"products/?category=132-Welding%20Helmets",
                CATEGORY:"Safety", 
                SUB:"Welding Helmets",
            },

        }
  
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