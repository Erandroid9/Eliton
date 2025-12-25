export const BODIED=()=>{

    SCREENWIDTH((Data)=>{

        DATASTORE(" ","Width",Data);

        POSITIONFIXED(BODY);
        MARGIN(BODY,"0");
        PADDING(BODY,"0");
        WIDTH(BODY,"");
        HEIGHT(BODY,"");
        DISPLAYBLOCK(BODY);
        OVERFLOWHIDDEN(BODY);
        TEXTALIGN(BODY,"");
        COLOR(BODY,WHITE);
        BORDER(BODY,"");
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