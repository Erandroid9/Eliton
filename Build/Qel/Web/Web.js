const ERANDES=()=>{

    PAGESMANAGERS();

    DOWNLOADSAVEINDEX(QELDATABASELINK,"Catergory",(Data)=>{

        DOWNLOADSAVEINDEX(QELDATABASELINK,"Products",(Data)=>{

        },()=>{

        });

    },()=>{

        DOWNLOADSAVEINDEX(QELDATABASELINK,"Products",(Data)=>{

        },()=>{

            PAGESMANAGERS();
            
        });

    });

};


const PAGESMANAGERS=()=>{

    SWITCHER("800px",()=>{DESKTOPVIEW()},()=>{MOBILEVIEW();})

};

const DESKTOPVIEW=()=>{
    
    HEADERFOOTERVIEW((ELEMENT)=>{

        LEFTTEXTVIEW(ELEMENT,"Qel Medistore",()=>{

        });

    },(ELEMENT)=>{

    },(ELEMENT)=>{

        TEXTVIEW(ELEMENT,"Contact Us",()=>{
            
        });

        TEXTVIEW(ELEMENT,"App",()=>{
            
        });

        TEXTVIEW(ELEMENT,"Policies",()=>{
            
        });

    });

};

const MOBILEVIEW=()=>{

    HEADERFOOTERVIEW((ELEMENT)=>{

        LEFTTEXTVIEW(ELEMENT,"Qel Medistore",()=>{

        });

        RIGHTICONVIEW(ELEMENT,WHITEUSERICON,()=>{

        });

    },(ELEMENT)=>{

    },(ELEMENT)=>{

        TEXTVIEW(ELEMENT,"Contact Us",()=>{
            
        });

        TEXTVIEW(ELEMENT,"App",()=>{
            
        });

        TEXTVIEW(ELEMENT,"Policies",()=>{
            
        });

    });

};