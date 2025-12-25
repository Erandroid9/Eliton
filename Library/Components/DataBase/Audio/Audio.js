export const AUDIO=(HOLDER,SRC,callBack)=>{

    ELEMENTED(HOLDER,"audio",(ELEMENT)=>{

        SOURCED(ELEMENT,SRC);
        CONTROLS(ELEMENT);

        POSITIONRELATIVE(ELEMENT);
        WIDTH(ELEMENT,"");
        HEIGHT(ELEMENT,"50px");
        MARGIN(ELEMENT,"");
        DISPLAYBLOCK(ELEMENT);
        BACKGROUND(ELEMENT,WHITE);

        callBack(ELEMENT);

    });

};