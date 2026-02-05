export const LOGINVIEW=(ELEMENTS,WORD,LINK)=>{

    CLEAR(ELEMENTS);

    DELETEDATASTORE("","UserEmail");

    DELETEDATASTORE("","UserPassword");

    SWITCHER("800px",()=>{

        BREAK(ELEMENTS);

        BREAK(ELEMENTS);

        DIVVIEW(ELEMENTS,"80%","80%",TRANSPARENT,(ELEMENT)=>{

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

                            LOGINSERVER(LINK,"Users",()=>{
                                
                                RELOAD();

                            });

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

            BUTTON(ELEMENT,"Create Account",FORESTGREEN,WHITE,(ELEMENT)=>{

                WIDTH(ELEMENT,"95%");

                RADIUS(ELEMENT,"10px");

                CLICK(ELEMENT,()=>{

                    CREATEACCOUNTVIEW(ELEMENTS,WORD);

                });

            });

        });

    },()=>{

        CLEAR(ELEMENTS);

        BREAK(ELEMENTS);

        TEXT(ELEMENTS,"h1",WORD,"",(ELEMENT)=>{

            FONTSIZE(ELEMENT,"30px");

        });

        BREAK(ELEMENTS);

        INPUT(ELEMENTS,"email","Enter Your Email","UserEmail",()=>{

        });

        BREAK(ELEMENTS);

        INPUT(ELEMENTS,"password","Enter Your Password","UserPassword",()=>{

        });

        BREAK(ELEMENTS);

        BUTTON(ELEMENTS,"Sign In",FORESTGREEN,WHITE,(ELEMENT)=>{

            CLICK(ELEMENT,()=>{

                CONDITION(sessionStorage.getItem("UserEmail"),()=>{

                    CONDITION(sessionStorage.getItem("UserPassword"),()=>{

                        TOASTVIEW("Please Wait...");

                            LOGINSERVER(LINK,"Users",()=>{
                                
                                RELOAD();

                            });

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

        BREAK(ELEMENTS);

        BUTTON(ELEMENTS,"Create Account",TEAL,WHITE,(ELEMENT)=>{

            WIDTH(ELEMENT,"95%");

            RADIUS(ELEMENT,"10px");

            CLICK(ELEMENT,()=>{

                CREATEACCOUNTVIEW(ELEMENTS,WORD);

            });

        });

    });

};