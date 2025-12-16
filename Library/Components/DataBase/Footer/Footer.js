export const FOOTER=(HOLDER,callBack)=>{

    ELEMENTED(HOLDER,"footer",(Data)=>{

        STYLED(Data,"position","fixed");
        STYLED(Data,"background","#cdcdcd50");
        STYLED(Data,"left","0");
        STYLED(Data,"width","100%");
        STYLED(Data,"height","50px");
        STYLED(Data,"display","inline-flex");
        STYLED(Data,"bottom","0px");

        callBack(Data);

    });

};