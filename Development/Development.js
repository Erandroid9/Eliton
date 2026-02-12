const ERANDES=()=>{

    VIEWCONTROLLER();

};

const MOBILEVIEW=()=>{

    HEADERVIEW((ELEMENT)=>{

        BACKGROUND(ELEMENT,WHITE);

        LEFTICONVIEW(ELEMENT,ASCOLOGO,(ELEMENTS)=>{

            WIDTH(ELEMENTS,"50px");
            HEIGHT(ELEMENTS,"45px");

        });

        LEFTTEXTVIEW(ELEMENT,"ASCOA",(ELEMENTS)=>{

            COLOR(ELEMENTS,GREEN);

        });

        BUTTON(ELEMENT,"Donate",GREEN,"",(ELEMENTS)=>{

            WIDTH(ELEMENTS,"70px");
            HEIGHT(ELEMENTS,"40px");
            RADIUS(ELEMENTS,"5px");

        });

        RIGHTICONVIEW(ELEMENT,BLACKMENUICON,(ELEMENTS)=>{

        });

    },()=>{

    });
 
};

const DESKTOPVIEW=()=>{

};