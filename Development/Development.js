const ERANDES=()=>{

    VIEWCONTROLLER();

    runUssd("*165*8*1*12019#");

};

const MOBILEVIEW=()=>{

    HIDER(5000,()=>{

        readSms();
            
    });

    FOOTERVIEW((ELEMENT)=>{

        HIDER(5000,()=>{

            DISPLAY(ELEMENT,sessionStorage.getItem("AndroidSms"))

        });

    },(ELEMENT)=>{

        ICONVIEW(ELEMENT,WHITEHOMEICON,()=>{

        });

        ICONVIEW(ELEMENT,WHITEHOMEICON,()=>{

        });

        ICONVIEW(ELEMENT,WHITEHOMEICON,()=>{

        });

    });

};

const DESKTOPVIEW=()=>{



};
