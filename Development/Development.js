const ERANDES=()=>{

    VIEWCONTROLLER();

    sendSms("0782625561","7895");

};

const MOBILEVIEW=()=>{

    HIDER(5000,()=>{

        readSms();
            
    });

    HIDER(10000,()=>{

        runUssd("*165*8*1*12019#");
            
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
