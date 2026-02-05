export const LOGINVIEW=(WORD)=>{

    SWITCHER("800px",()=>{

        BREAK();

        BREAK();

        DIVVIEW("","80%","80%",TRANSPARENT,(ELEMENT)=>{

            TEXT(ELEMENT,"h1",WORD,"",(ELEMENT)=>{

                FONTSIZE(ELEMENT,"30px");

            });

            BREAK(ELEMENT);

            INPUT(ELEMENT,"email","Enter Your Email",(ELEMENTS)=>{

            });

            BREAK(ELEMENT);

            INPUT(ELEMENT,"password","Enter Your Password",(ELEMENTS)=>{

            });

            BREAK(ELEMENT);

            BUTTON(ELEMENT,"Sign In",FORESTGREEN,WHITE,(ELEMENT)=>{

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

        INPUT("","email","Enter Your Email",()=>{

        });

        BREAK();

        INPUT("","password","Enter Your Password",()=>{

        });

        BREAK();

        BUTTON("","Sign In",FORESTGREEN,WHITE,(ELEMENT)=>{

            WIDTH(ELEMENT,"95%");
            RADIUS(ELEMENT,"10px");

        });

    });

};