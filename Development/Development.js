const ERANDES=()=>{

    BODYCOLOR(WHITE,BLACK);

    VIEWCONTROLLER();

    DOWNLOADSAVEINDEX(QELDATABASELINK,"Catergory",(Data)=>{

        DOWNLOADSAVEINDEX(QELDATABASELINK,"Products",(Data)=>{

        },()=>{

        });

    },()=>{

        DOWNLOADSAVEINDEX(QELDATABASELINK,"Products",(Data)=>{

        },()=>{

            VIEWCONTROLLER();
            
        });

    });

};

const MOBILEVIEW=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTTEXTVIEW(ELEMENT,"Qel",()=>{

        });

    },(ELEMENT)=>{

    });

};

const DESKTOPVIEW=()=>{

};