const ERANDES=()=>{

    SWITCHER("800px",()=>{DESKTOPVIEW()},()=>{MOBILEVIEW();})

};

const MOBILEVIEW=()=>{

    CLEAR("");

    HEADER("",(ELEMENT)=>{

        TEXT(ELEMENT,"h1","Erandix",WHITE,(ELEMENTS)=>{

           FONTSIZE(ELEMENTS,""); 
           MARGINLEFT(ELEMENTS,"1%");

        });

        IMAGE(ELEMENT,"20px","20px",WHITEDOWNLOADICON,"",(ELEMENTS)=>{

            MARGINRIGHT(ELEMENTS,"2%");

        });

    });

    DIV("","100%","auto",TRANSPARENT,(ELEMENT)=>{

        POSITIONABSOLUTE(ELEMENT);
        TOP(ELEMENT,"50px");
        BOTTOM(ELEMENT,"");

        FOOTER(ELEMENT,(ELEMENTS)=>{

            TEXT(ELEMENTS,"h1","Apps",WHITE,(ELEMENTS)=>{

                FONTSIZE(ELEMENTS,""); 

                CLICK(ELEMENTS,()=>{

                    ROUTE(" ",MOBILEVIEWAPPS,"MOBILEVIEW");

                });

            });

            TEXT(ELEMENTS,"h1","Policies",WHITE,(ELEMENTS)=>{

                FONTSIZE(ELEMENTS,""); 

                CLICK(ELEMENTS,()=>{

                    ROUTE(" ",MOBILEVIEWPOLICIES,"MOBILEVIEW");

                });
             
            });

            TEXT(ELEMENTS,"h1","Contact Us",WHITE,(ELEMENTS)=>{

                FONTSIZE(ELEMENTS,""); 

                CLICK(ELEMENTS,()=>{

                    ROUTE(" ",MOBILEVIEWCONTACT,"MOBILEVIEW");

                });

            });

        });

    });

};

const MOBILEVIEWCONTACT=()=>{

    CLEAR("");

    HEADER("",(ELEMENT)=>{

        IMAGE(ELEMENT,"20px","20px",WHITEBACKICON,"",(ELEMENTS)=>{

            MARGINLEFT(ELEMENTS,"1%");

            CLICK(ELEMENTS,()=>{

                ROUTE("",MOBILEVIEW,"MOBILEVIEW");

            });

        });

        TEXT(ELEMENT,"h1","Erandix",WHITE,(ELEMENTS)=>{

           FONTSIZE(ELEMENTS,""); 
           MARGINRIGHT(ELEMENTS,"1%");

        });

    });

    DIV("","100%","auto",TRANSPARENT,(ELEMENT)=>{

    });

};

const MOBILEVIEWPOLICIES=()=>{

    CLEAR("");

    HEADER("",(ELEMENT)=>{

        IMAGE(ELEMENT,"20px","20px",WHITEBACKICON,"",(ELEMENTS)=>{

            MARGINLEFT(ELEMENTS,"1%");

            CLICK(ELEMENTS,()=>{

                ROUTE("",MOBILEVIEW,"MOBILEVIEW");

            });

        });

        TEXT(ELEMENT,"h1","Erandix",WHITE,(ELEMENTS)=>{

           FONTSIZE(ELEMENTS,""); 
           MARGINRIGHT(ELEMENTS,"1%");

        });

    });

    DIV("","100%","auto",TRANSPARENT,(ELEMENT)=>{
        
    });

};

const MOBILEVIEWAPPS=()=>{

    CLEAR("");

    HEADER("",(ELEMENT)=>{

        IMAGE(ELEMENT,"20px","20px",WHITEBACKICON,"",(ELEMENTS)=>{

            MARGINLEFT(ELEMENTS,"1%");

            CLICK(ELEMENTS,()=>{

                ROUTE("",MOBILEVIEW,"MOBILEVIEW");

            });

        });

        TEXT(ELEMENT,"h1","Erandix",WHITE,(ELEMENTS)=>{

           FONTSIZE(ELEMENTS,""); 
           MARGINRIGHT(ELEMENTS,"1%");

        });

    });

    DIV("","100%","auto",TRANSPARENT,(ELEMENT)=>{
        
    });

};

const DESKTOPVIEW=()=>{

    CLEAR("");

    HEADER("",(ELEMENT)=>{

        TEXT(ELEMENT,"h1","Erandix",WHITE,(ELEMENTS)=>{

           FONTSIZE(ELEMENTS,""); 
           MARGINLEFT(ELEMENTS,"1%");

        });

        TEXT(ELEMENT,"h1","Download Desktop Version",WHITE,(ELEMENTS)=>{

           FONTSIZE(ELEMENTS,""); 
           MARGINRIGHT(ELEMENTS,"1%");

        });

    });

};