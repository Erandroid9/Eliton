const ERANDES=()=>{

    SWITCHER("800px",()=>{DESKTOPVIEW()},()=>{MOBILEVIEW();})

};

const DESKTOPVIEW=()=>{

    HEADERVIEW((ELEMENT)=>{

    },(ELEMENT)=>{

    });
    
};

const MOBILEVIEW=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTTEXTVIEW(ELEMENT,"Doctor Mjomba Ali",()=>{

        });

        RIGHTICONVIEW(ELEMENT,WHITEWHATSAPPICON,(ELEMENT)=>{

            CLICK(ELEMENT,()=>{

                WHATSAPP("+254748352113");

            })

        });

    },(ELEMENT)=>{

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{

            TEXTVIEW(ELEMENTS,"Family",()=>{

            });

            TEXTVIEW(ELEMENTS,"Business",()=>{

            });

            TEXTVIEW(ELEMENTS,"Health",()=>{

            });

            TEXTVIEW(ELEMENTS,"Jobs",()=>{

            });

        });

        DIVVIEW(ELEMENT,"95%","300px",RED,(ELEMENTS)=>{

        });

    });

};