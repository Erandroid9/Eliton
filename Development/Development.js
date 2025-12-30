const ERANDES=()=>{

    SWITCHER("800px",()=>{DESKTOPVIEW()},()=>{MOBILEVIEW();})

};

const MOBILEVIEW=()=>{

    GETMUSICAPI((Data)=>{

        REDUX(Data,(Elements)=>{

            TABLEVIEW("","40%","200px",TEAL,"2%",(ELEMENTS)=>{

                CLICK(ELEMENTS,()=>{

                    CLEAR();

                    const SRC=`${MUSICSERVERLINK}/${Elements.Location}/${Elements.Name}`;

                    console.log(SRC)

                    AUDIO("",SRC,()=>{

                    })

                });

            });

        });

    });

};