export const HEADER=(HOLDER,callBack)=>{

    ELEMENTED(HOLDER,"header",(ELEMENT)=>{

        POSITIONABSOLUTE(ELEMENT);
        WIDTH(ELEMENT,"100%");
        HEIGHT(ELEMENT,"50px");
        DISPLAYFLEX(ELEMENT);
        TOP(ELEMENT,"0");
        LEFT(ELEMENT,"0");
        BACKGROUND(ELEMENT,"transparent");
        BORDERBOTTOM(ELEMENT,"1px solid #cdcdcd50");

        callBack(ELEMENT);

    });

};