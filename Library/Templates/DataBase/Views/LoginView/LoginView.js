export const LOGINVIEW=(WORD)=>{

    DELETEDATASTORE("","UserEmail");
    
    DELETEDATASTORE("","UserPassword");

    SWITCHER("800px",()=>{

        BREAK();

        BREAK();

        DIVVIEW("","80%","80%",TRANSPARENT,(ELEMENT)=>{

            TEXT(ELEMENT,"h1",WORD,"",(ELEMENT)=>{

                FONTSIZE(ELEMENT,"30px");

            });

            BREAK(ELEMENT);

            INPUT(ELEMENT,"email","Enter Your Email","UserEmail",()=>{

            });

            BREAK(ELEMENT);

            INPUT(ELEMENT,"password","Enter Your Password","UserPassword",()=>{

            });

            BREAK(ELEMENT);

            BUTTON(ELEMENT,"Sign In",FORESTGREEN,WHITE,(ELEMENT)=>{

                CLICK(ELEMENT,()=>{

                    CONDITION(sessionStorage.getItem("UserEmail"),()=>{

                        CONDITION(sessionStorage.getItem("UserPassword"),()=>{

                            TOASTVIEW("Please Wait...");

                        },()=>{

                            TOASTVIEW("Enter Your Password");

                        });

                    },()=>{

                        TOASTVIEW("Enter Your Email");

                    });

                });

                WIDTH(ELEMENT,"95%");
                RADIUS(ELEMENT,"10px");

            });

        });

    },()=>{

        CLEAR("");

        BREAK();

        TEXT("","h1",WORD,"",(ELEMENT)=>{

            FONTSIZE(ELEMENT,"30px");

        });

        BREAK();

        INPUT("","email","Enter Your Email","UserEmail",()=>{

        });

        BREAK();

        INPUT("","password","Enter Your Password","UserPassword",()=>{

        });

        BREAK();

        BUTTON("","Sign In",FORESTGREEN,WHITE,(ELEMENT)=>{

            CLICK(ELEMENT,()=>{

                CONDITION(sessionStorage.getItem("UserEmail"),()=>{

                    CONDITION(sessionStorage.getItem("UserPassword"),()=>{

                        TOASTVIEW("Please Wait...");

                    },()=>{

                        TOASTVIEW("Enter Your Password");

                    });

                },()=>{

                    TOASTVIEW("Enter Your Email");

                });

            });

            WIDTH(ELEMENT,"95%");
            RADIUS(ELEMENT,"10px");

        });

    });

};