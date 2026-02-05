const ERANDES=()=>{

    SWITCHER("800px",()=>{DESKTOPVIEW()},()=>{MOBILEVIEW();});

};

const MOBILEVIEW=()=>{

    ACCOUNTEMAILCHECKER(()=>{
        
    },()=>{

        MOBILEHOMEPAGE();

    },()=>{

        LOGINVIEW("","Erandix Users");

    });

};

const MOBILEHOMEPAGE=()=>{

    HEADERVIEW(()=>{

    },()=>{

    });

};