export const TEXTAREA=(HOLDER,MESSAGE,STORAGE,callBack)=>{

    ELEMENTED(HOLDER,"textarea",(ELEMENT)=>{

        FUNCTIONED(ELEMENT,"input",()=>{

            CONDITION(ELEMENT.value,()=>{

                DATASTORE("",STORAGE,ELEMENT.value);

            },()=>{

                DELETEDATASTORE("",STORAGE,ELEMENT.value);

            });

        });

        PLACEHOLDER(ELEMENT,MESSAGE);

        POSITIONRELATIVE(ELEMENT);
        WIDTH(ELEMENT,"95%");
        HEIGHT(ELEMENT,"150px");
        MARGIN(ELEMENT,"");
        DISPLAYBLOCK(ELEMENT);
        BORDER(ELEMENT,WHITE);
        OUTLINE(ELEMENT);
        BACKGROUND(ELEMENT,TRANSPARENT);

        COLOR(ELEMENT,localStorage.getItem("APPCOLOR"));

        callBack(ELEMENT);

    });

};