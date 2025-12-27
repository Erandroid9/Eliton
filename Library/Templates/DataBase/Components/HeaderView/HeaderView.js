export const HEADERVIEW=(callBack,callBackOne)=>{

    HEADER("",(ELEMENT)=>{

        callBack(ELEMENT);

    });

    DIV("","100%","auto",TRANSPARENT,(ELEMENT)=>{

        POSITIONABSOLUTE(ELEMENT);
        TOP(ELEMENT,"50px");
        BOTTOM(ELEMENT,"");

        callBackOne(ELEMENT);

    });

};