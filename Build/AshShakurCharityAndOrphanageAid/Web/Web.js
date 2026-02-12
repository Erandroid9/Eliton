const ERANDES=()=>{

    VIEWCONTROLLER();

};

const MOBILEVIEW=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,ASCOLOGO,(ELEMENTS)=>{

            WIDTH(ELEMENTS,"50px");
            HEIGHT(ELEMENTS,"45px");

        });

        LEFTTEXTVIEW(ELEMENT,"ASCOA",(ELEMENTS)=>{

            COLOR(ELEMENTS,GREEN);

        });

        BUTTON(ELEMENT,"Donate",GREEN,"",(ELEMENTS)=>{

            WIDTH(ELEMENTS,"70px");
            HEIGHT(ELEMENTS,"40px");
            RADIUS(ELEMENTS,"5px");

        });

        RIGHTICONVIEW(ELEMENT,BLACKMENUICON,(ELEMENTS)=>{

        });

    },(ELEMENT)=>{

        BREAK(ELEMENT);

        TEXTVIEW(ELEMENT,"Ash Shakur Charity And Orphanage Aid",(ELEMENTS)=>{

            FONTSIZE(ELEMENTS,"16px");
            COLOR(ELEMENTS,GREEN);

        });

        TEXTVIEW(ELEMENT,"Helping The Needy Children",(ELEMENTS)=>{

            FONTSIZE(ELEMENTS,"15px");
            COLOR(ELEMENTS,FORESTGREEN);

        });

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{

            OVERFLOWX(ELEMENTS);

            BUTTON(ELEMENTS,"Child Fund",GREEN,"",(ELEMENTS)=>{

                WIDTH(ELEMENTS,"100px");
                HEIGHT(ELEMENTS,"40px");
                RADIUS(ELEMENTS,"5px");

                MARGINLEFT(ELEMENTS,"2%");

                FLEXSHRINK(ELEMENTS);

            });

            BUTTON(ELEMENTS,"Food Aid",GREEN,"",(ELEMENTS)=>{

                WIDTH(ELEMENTS,"70px");
                HEIGHT(ELEMENTS,"40px");
                RADIUS(ELEMENTS,"5px");

                MARGINLEFT(ELEMENTS,"2%");

                FLEXSHRINK(ELEMENTS);

            });

            BUTTON(ELEMENTS,"Ramadan",GREEN,"",(ELEMENTS)=>{

                WIDTH(ELEMENTS,"70px");
                HEIGHT(ELEMENTS,"40px");
                RADIUS(ELEMENTS,"5px");

                MARGINLEFT(ELEMENTS,"2%");

                FLEXSHRINK(ELEMENTS);

            });

            BUTTON(ELEMENTS,"Mosque Construction",GREEN,"",(ELEMENTS)=>{

                WIDTH(ELEMENTS,"150px");
                HEIGHT(ELEMENTS,"40px");
                RADIUS(ELEMENTS,"5px");

                MARGINLEFT(ELEMENTS,"2%");

                FLEXSHRINK(ELEMENTS);

            });

            BUTTON(ELEMENTS,"Qurban",GREEN,"",(ELEMENTS)=>{

                WIDTH(ELEMENTS,"70px");
                HEIGHT(ELEMENTS,"40px");
                RADIUS(ELEMENTS,"5px");

                MARGINLEFT(ELEMENTS,"2%");

                FLEXSHRINK(ELEMENTS);

            });

            BUTTON(ELEMENTS,"Water Well",GREEN,"",(ELEMENTS)=>{

                WIDTH(ELEMENTS,"100px");
                HEIGHT(ELEMENTS,"40px");
                RADIUS(ELEMENTS,"5px");

                MARGINLEFT(ELEMENTS,"2%");

                FLEXSHRINK(ELEMENTS);

            });

            BUTTON(ELEMENTS,"Aqeeqha",GREEN,"",(ELEMENTS)=>{

                WIDTH(ELEMENTS,"70px");
                HEIGHT(ELEMENTS,"40px");
                RADIUS(ELEMENTS,"5px");

                MARGINLEFT(ELEMENTS,"2%");

                FLEXSHRINK(ELEMENTS);

            });

            BUTTON(ELEMENTS,"Medical Support",GREEN,"",(ELEMENTS)=>{

                WIDTH(ELEMENTS,"120px");
                HEIGHT(ELEMENTS,"40px");
                RADIUS(ELEMENTS,"5px");

                MARGINLEFT(ELEMENTS,"2%");

                FLEXSHRINK(ELEMENTS);

            });

        });

        BREAK(ELEMENT);

        INLINEVIEW(ELEMENT,"95%","400px",TRANSPARENT,"2%",(ELEMENTS)=>{

            OVERFLOWX(ELEMENTS);

            INLINEVIEW(ELEMENTS,"80%","95%",ORANGE,"2%",(ELEMENTIS)=>{

                OVERFLOWX(ELEMENTIS);

                MARGIN(ELEMENTIS,"2%");

                FLEXSHRINK(ELEMENTIS);

                RADIUS(ELEMENTIS,"10px");

            });

            INLINEVIEW(ELEMENTS,"80%","95%",ORANGE,"2%",(ELEMENTIS)=>{

                OVERFLOWX(ELEMENTIS);

                MARGIN(ELEMENTIS,"2%");

                FLEXSHRINK(ELEMENTIS);

                RADIUS(ELEMENTIS,"10px");

            });

            INLINEVIEW(ELEMENTS,"80%","95%",ORANGE,"2%",(ELEMENTIS)=>{

                OVERFLOWX(ELEMENTIS);

                MARGIN(ELEMENTIS,"2%");

                FLEXSHRINK(ELEMENTIS);

                RADIUS(ELEMENTIS,"10px");

            });

            INLINEVIEW(ELEMENTS,"80%","95%",ORANGE,"2%",(ELEMENTIS)=>{

                OVERFLOWX(ELEMENTIS);

                MARGIN(ELEMENTIS,"2%");

                FLEXSHRINK(ELEMENTIS);

                RADIUS(ELEMENTIS,"10px");

            });

        });

        BREAK(ELEMENT);

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{

            OVERFLOWX(ELEMENTS);

            BUTTON(ELEMENTS,"Child Fund",GREEN,"",(ELEMENTS)=>{

                WIDTH(ELEMENTS,"100px");
                HEIGHT(ELEMENTS,"40px");
                RADIUS(ELEMENTS,"5px");

            });       
           
        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","400px",ORANGE,(ELEMENTS)=>{

            RADIUS(ELEMENTS,"10px");

            FOOTER(ELEMENTS,(ELS)=>{

                BACKGROUND(ELS,BLACK);

                TEXTVIEW(ELS,"Donate",(ELSSS)=>{

                });

            });

        });

        BREAK(ELEMENT);

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{

            OVERFLOWX(ELEMENTS);

            BUTTON(ELEMENTS,"Mosque Construction",GREEN,"",(ELEMENTS)=>{

                WIDTH(ELEMENTS,"150px");
                HEIGHT(ELEMENTS,"40px");
                RADIUS(ELEMENTS,"5px");

            });       
           
        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","400px",ORANGE,(ELEMENTS)=>{

            RADIUS(ELEMENTS,"10px");

            FOOTER(ELEMENTS,(ELS)=>{

                BACKGROUND(ELS,BLACK);

                TEXTVIEW(ELS,"Donate",(ELSSS)=>{

                });

            });

        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","200px",ORANGE,(ELEMENTS)=>{

            RADIUS(ELEMENTS,"10px");

            BACKGROUND(ELEMENTS,BLACK);

        });

        BREAK(ELEMENT);

    });
 
};

const DESKTOPVIEW=()=>{

};