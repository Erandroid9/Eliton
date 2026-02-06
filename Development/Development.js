const ERANDES=()=>{

    ACCOUNTEMAILCHECKER("","Erandix Manager",ERANDIXMANAGERLINK,()=>{

        VIEWCONTROLLER();

    });

};

const MOBILEVIEW=()=>{

    HEADERVIEW(()=>{

    },()=>{

    });

};

const DESKTOPVIEW=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTTEXTVIEW(ELEMENT,"Erandix Manager",()=>{

        });

        ROUNDINPUTVIEW(ELEMENT,"search","Find Your Project","ProjectName",(ELEMENTS)=>{

            WIDTH(ELEMENTS,"30%");

        });

        ICONVIEW(ELEMENT,WHITEHOMEICON,()=>{

        });

        ICONVIEW(ELEMENT,WHITEADDICON,()=>{

        });

        ICONVIEW(ELEMENT,WHITEUSERICON,()=>{

        });

    },(ELEMENT)=>{

    });

};
