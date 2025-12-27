export const RIGHTICONVIEW=(HOLDER,SOURCE,callBack)=>{

    IMAGE(HOLDER,"20px","20px",SOURCE,"",(ELEMENTS)=>{

        MARGINRIGHT(ELEMENTS,"1%");

        callBack(ELEMENTS);

    });

};