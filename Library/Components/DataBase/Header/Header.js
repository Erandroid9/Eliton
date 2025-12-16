export const HEADER=(HOLDER,callBack)=>{

    ELEMENTED(HOLDER,"header",(Data)=>{

        POSITIONFIXED(Data);
        STYLED(Data,"background","#cdcdcd50");
        STYLED(Data,"left","0");
        STYLED(Data,"width","100%");
        STYLED(Data,"height","50px");
        STYLED(Data,"display","inline-flex");
        STYLED(Data,"top","0px");

        callBack(Data);

    });

};