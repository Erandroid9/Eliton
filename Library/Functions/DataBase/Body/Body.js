export const BODIED=()=>{

    SCREENWIDTH((Data)=>{

        DATASTORE(" ","Width",Data);

        POSITIONFIXED(BODY);
        MARGIN(BODY,"0");
        PADDING(BODY,"0");
        WIDTH(BODY,"100%");
        HEIGHT(BODY,"100%");
        DISPLAYBLOCK(BODY);
        OVERFLOWHIDDEN(BODY);
        TEXTALIGN(BODY,"center");
        COLOR(BODY,"#FFFFFF");
        BORDER(BODY,"none");
        OUTLINE(BODY);
        TEXTDECORATION(BODY);
        FONTFAMILY(BODY,"");
        FONTSIZE(BODY,"");

        CLICK(BODY,()=>{

            CHECKER(Data != localStorage.getItem("Width"),()=>{

                DATASTORE(" ","Width",Data);

                RELOAD();

            });

        });

    });

};