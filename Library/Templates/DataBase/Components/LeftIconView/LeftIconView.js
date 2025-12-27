export const LEFTICONVIEW=(HOLDER,SOURCE,callBack)=>{

    IMAGE(HOLDER,"20px","20px",SOURCE,"",(ELEMENTS)=>{

        MARGINLEFT(ELEMENTS,"1%");

        callBack(ELEMENTS);

    });

};