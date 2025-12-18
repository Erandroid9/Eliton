export const TEXT=(HOLDER,TYPE,WORD,callBack)=>{

    ELEMENTED(HOLDER,TYPE||"p",(Data)=>{

        DISPLAY(Data,WORD||"Your Text");

        STYLED(Data,"position","related");
        STYLED(Data,"margin","auto");

        callBack(Data);

    });

};