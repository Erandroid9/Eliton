export const RIGHTTEXTVIEW=(HOLDER,WORD,callBack)=>{

    TEXT(HOLDER,"h1",WORD,WHITE,(ELEMENTS)=>{

        FONTSIZE(ELEMENTS,""); 
        MARGINRIGHT(ELEMENTS,"1%");

        callBack(ELEMENTS);

    });

};