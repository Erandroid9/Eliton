export const ROUNDINPUTVIEW=(HOLDER,TYPE,MESSAGE,callBack)=>{

    INPUT(HOLDER,TYPE,MESSAGE,(ELEMENT)=>{

        RADIUS(ELEMENT,"10px");
        BORDER(ELEMENT,WHITE);
    
        callBack(ELEMENT);

    });

};