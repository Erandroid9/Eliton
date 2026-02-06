const ERANDES=()=>{

    VIEWCONTROLLER();

};

const VIEWCONTROLLER=()=>{

    SWITCHER("800px",()=>{DESKTOPVIEW()},()=>{MOBILEVIEW();});

};

const MOBILEVIEW=()=>{

    ACCOUNTEMAILCHECKER("","Erandix Manager",ERANDIXMANAGERLINK,()=>{

        MOBILEHOMEPAGE();

    });

};

const MOBILEHOMEPAGE=()=>{

    HEADERVIEW(()=>{

    },()=>{

    });

};

const DESKTOPVIEW=()=>{

    ACCOUNTEMAILCHECKER("","Erandix Manager",ERANDIXMANAGERLINK,()=>{

        DESKTOPHOMEPAGE();

    });

};

const DESKTOPHOMEPAGE=()=>{

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