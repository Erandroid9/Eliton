export const TOASTVIEW=(MESSAGE)=>{

    DIV("","95%","50px",BLACK,(ELEMENT)=>{

        POSITIONABSOLUTE(ELEMENT);
        BOTTOM(ELEMENT,"20px");
        LEFT(ELEMENT,"2%");
        DISPLAYFLEX(ELEMENT);
        RADIUS(ELEMENT,"10px");

        TEXT(ELEMENT,"",MESSAGE,"",(ELEMENTS)=>{

        });

        HIDER(2000,()=>{

            DISPLAYHIDDEN(ELEMENT);

        });

    });

};