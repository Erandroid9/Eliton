export const FOOTER=(HOLDER,callBack)=>{

    ELEMENTED(HOLDER,"footer",(ELEMENT)=>{

        POSITIONABSOLUTE(ELEMENT);
        WIDTH(ELEMENT,"100%");
        HEIGHT(ELEMENT,"50px");
        DISPLAYFLEX(ELEMENT);
        BOTTOM(ELEMENT,"0");
        LEFT(ELEMENT,"0");
        BACKGROUND(ELEMENT,"transparent");
        BORDERTOP(ELEMENT,"1px solid #cdcdcd50");

        callBack(ELEMENT);

    });

};