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

    });

};