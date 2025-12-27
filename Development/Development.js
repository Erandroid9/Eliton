const ERANDES=()=>{

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

        LEFTTEXTVIEW(ELEMENT,"Manager",(ELEMENTS)=>{

        });

        RIGHTTEXTVIEW(ELEMENT,"Create",(ELEMENTS)=>{

            
        });

    },(ELEMENT)=>{

    });


};

const DESKTOPVIEW=()=>{

};