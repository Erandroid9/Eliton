export const POWEREDBY=(ELEMENT,COLOR)=>{

    const NAMES=document.createElement("p");

    DISPLAY(NAMES,COMPANYNAME);

    STYLED(NAMES,"text-align","center");
    STYLED(NAMES,"color",COLOR||"#FFFFFF");

    CLICK(NAMES,()=>{

        WEBSITE(COMPANYLINK);

    });

    ADD(ELEMENT,NAMES);

};