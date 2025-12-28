const ERANDES=()=>{

    GETUGANDANDISTRICTSAPI((Daa)=>{
        console.log(Daa)
    })

    SWITCHER("800px",()=>{DESKTOPVIEW()},()=>{MOBILEVIEW();})

};

const MOBILEVIEW=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTTEXTVIEW(ELEMENT,"Manager",(ELEMENTS)=>{

        });

        RIGHTTEXTVIEW(ELEMENT,"New",(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE(" ",MOBILECREATEPROJECTVIEW,"MOBILEVIEW");

            });

        });

    },(ELEMENT)=>{

    });

};

const MOBILECREATEPROJECTVIEW=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE("",MOBILEVIEW,"MOBILEVIEW");

            });

        });

        RIGHTTEXTVIEW(ELEMENT,"Create",(ELEMENTS)=>{

        });

    },(ELEMENT)=>{

        DIVVIEW(ELEMENT,"95%","300px",TRANSPARENT,(ELEMENTS)=>{

            MARGINTOP(ELEMENTS,"2%");
            RADIUS(ELEMENTS,"10px");
            BORDER(ELEMENTS,WHITE+"50");

            IMAGE(ELEMENTS,"95%","200px",WHITEHOMEICON,"",(ELEMENTISE)=>{

                MARGINTOP(ELEMENTISE,"2%");

                FOOTER(ELEMENTS,(ELEMENTA)=>{

                    ICONVIEW(ELEMENTA,WHITEADDICON,(ELEMENTIS)=>{

                    });

                    ICONVIEW(ELEMENTA,WHITEDELETEICON,(ELEMENTIS)=>{

                    });

                });

            });

        });

    });

};

const DESKTOPVIEW=()=>{

};