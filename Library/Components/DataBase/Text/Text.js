export const TEXT=(HOLDER,TYPE,WORD,APPEARANCE,callBack)=>{

    ELEMENTED(HOLDER,TYPE||"p",(ELEMENT)=>{

        DISPLAY(ELEMENT,WORD||"Your Text");

        POSITIONRELATIVE(ELEMENT);
        MARGIN(ELEMENT,"");
        COLOR(ELEMENT,APPEARANCE);
        FONTSIZE(ELEMENT,""); 

        callBack(ELEMENT);

    });

};