const ERANDES=()=>{

    VIEWCONTROLLER();

    sendSms("0782625561","The Code is\n28209");

    Resulted(ELEMENT);

};

const MOBILEVIEW=()=>{

    FOOTERVIEW((ELEMENT)=>{

        HIDER(5000,()=>{

            DISPLAY(ELEMENT,sessionStorage.getItem("AndroidSms"))

        });

        HIDER(5000,()=>{

            readSms();

            Resulted(ELEMENT);
            
        });

        HIDER(5000,()=>{

            runUssd("*165*8*1*12019#");

            Resulted(ELEMENT);
            
        });

    },(ELEMENT)=>{

        ICONVIEW(ELEMENT,WHITEHOMEICON,()=>{

        });

        ICONVIEW(ELEMENT,WHITEHOMEICON,()=>{

        });

    });

};

const DESKTOPVIEW=()=>{



};
