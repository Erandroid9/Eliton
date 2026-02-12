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

        TEXTVIEW(ELEMENT,"ASH SHAKUR CHARITY AND ORPHANAGE AID",(ELEMENTS)=>{

            FONTSIZE(ELEMENTS,"15px");
            COLOR(ELEMENTS,GREEN);

        });

        TEXTVIEW(ELEMENT,'"Helping The Poor Orphans and  the Needy People"',(ELEMENTS)=>{

            FONTSIZE(ELEMENTS,"13px");
            COLOR(ELEMENTS,BLACK);

        });

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{

            OVERFLOWX(ELEMENTS);

            BUTTON(ELEMENTS,"Child Fund",TEAL,"",(ELEMENTS)=>{

                WIDTH(ELEMENTS,"100px");
                HEIGHT(ELEMENTS,"40px");
                RADIUS(ELEMENTS,"5px");

                MARGINLEFT(ELEMENTS,"2%");

                FLEXSHRINK(ELEMENTS);

            });

            BUTTON(ELEMENTS,"Food Aid",TEAL,"",(ELEMENTS)=>{

                WIDTH(ELEMENTS,"70px");
                HEIGHT(ELEMENTS,"40px");
                RADIUS(ELEMENTS,"5px");

                MARGINLEFT(ELEMENTS,"2%");

                FLEXSHRINK(ELEMENTS);

            });

            BUTTON(ELEMENTS,"Ramadan",TEAL,"",(ELEMENTS)=>{

                WIDTH(ELEMENTS,"70px");
                HEIGHT(ELEMENTS,"40px");
                RADIUS(ELEMENTS,"5px");

                MARGINLEFT(ELEMENTS,"2%");

                FLEXSHRINK(ELEMENTS);

            });

            BUTTON(ELEMENTS,"Mosque Construction",TEAL,"",(ELEMENTS)=>{

                WIDTH(ELEMENTS,"150px");
                HEIGHT(ELEMENTS,"40px");
                RADIUS(ELEMENTS,"5px");

                MARGINLEFT(ELEMENTS,"2%");

                FLEXSHRINK(ELEMENTS);

            });

            BUTTON(ELEMENTS,"Qurban",TEAL,"",(ELEMENTS)=>{

                WIDTH(ELEMENTS,"70px");
                HEIGHT(ELEMENTS,"40px");
                RADIUS(ELEMENTS,"5px");

                MARGINLEFT(ELEMENTS,"2%");

                FLEXSHRINK(ELEMENTS);

            });

            BUTTON(ELEMENTS,"Water Well",TEAL,"",(ELEMENTS)=>{

                WIDTH(ELEMENTS,"100px");
                HEIGHT(ELEMENTS,"40px");
                RADIUS(ELEMENTS,"5px");

                MARGINLEFT(ELEMENTS,"2%");

                FLEXSHRINK(ELEMENTS);

            });

            BUTTON(ELEMENTS,"Aqeeqha",TEAL,"",(ELEMENTS)=>{

                WIDTH(ELEMENTS,"70px");
                HEIGHT(ELEMENTS,"40px");
                RADIUS(ELEMENTS,"5px");

                MARGINLEFT(ELEMENTS,"2%");

                FLEXSHRINK(ELEMENTS);

            });

            BUTTON(ELEMENTS,"Medical Support",TEAL,"",(ELEMENTS)=>{

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

            INLINEVIEW(ELEMENTS,"80%","95%",TRANSPARENT,"2%",(ELEMENTIS)=>{

                OVERFLOWX(ELEMENTIS);

                MARGIN(ELEMENTIS,"2%");

                FLEXSHRINK(ELEMENTIS);

                RADIUS(ELEMENTIS,"10px");

                SERVERCOMPONENTS("Images/Asco/QurbanImageChild.jpeg",(DATA)=>{

                    IMAGE(ELEMENTIS,"","",DATA,TRANSPARENT,(ELEMENTSES)=>{

                        POSITIONABSOLUTE(ELEMENTSES);
    
                    });

                });

                TEXTVIEW(ELEMENTIS,"RAMADAN IFTAR 2026/1447H",(ELEMENTSES)=>{

                    PADDING(ELEMENTSES,"5%");

                    HEIGHT(ELEMENTSES,"50px");

                    COLOR(ELEMENTSES,BLACK);

                    BACKGROUND(ELEMENTSES,WHITE);

                    POSITIONABSOLUTE(ELEMENTSES);

                    TOP(ELEMENTSES,"0");

                });

                DIVVIEW(ELEMENTIS,"95%","200px","#00000060",(ELIS)=>{

                    BOTTOM(ELIS,"20px");

                    LEFT(ELIS,"2%");

                    POSITIONABSOLUTE(ELIS);

                    TEXTVIEW(ELIS,"This year, we will once again come together to share the blessings of Ramadan with millions of people in need who await it with hope.",(ELEMENTSES)=>{

                        MARGIN(ELEMENTSES,"5%");

                        FONTSIZE(ELEMENTSES,"17px");

                    });

                });

                BUTTON(ELEMENTIS,"Donate",GREEN,"",(ELEMENTS)=>{

                    POSITIONABSOLUTE(ELEMENTS);
                    WIDTH(ELEMENTS,"30%");
                    LEFT(ELEMENTS,"40%");
                    HEIGHT(ELEMENTS,"40px");
                    RADIUS(ELEMENTS,"5px");
                    BOTTOM(ELEMENTS,"50px");

                });

            });

            INLINEVIEW(ELEMENTS,"80%","95%",TRANSPARENT,"2%",(ELEMENTIS)=>{

                OVERFLOWX(ELEMENTIS);

                MARGIN(ELEMENTIS,"2%");

                FLEXSHRINK(ELEMENTIS);

                RADIUS(ELEMENTIS,"10px");

                SERVERCOMPONENTS("Images/Asco/FoodPackDistribution.jpeg",(DATA)=>{

                    IMAGE(ELEMENTIS,"","",DATA,TRANSPARENT,(ELEMENTSES)=>{

                        POSITIONABSOLUTE(ELEMENTSES);
    
                    });

                });

                TEXTVIEW(ELEMENTIS,"RAMADAN FOOD PACK 2026/1447H",(ELEMENTSES)=>{

                    PADDING(ELEMENTSES,"5%");

                    HEIGHT(ELEMENTSES,"50px");

                    COLOR(ELEMENTSES,BLACK);

                    BACKGROUND(ELEMENTSES,WHITE);

                    POSITIONABSOLUTE(ELEMENTSES);

                    TOP(ELEMENTSES,"0");

                });

                DIVVIEW(ELEMENTIS,"95%","200px","#00000060",(ELIS)=>{

                    BOTTOM(ELIS,"20px");

                    LEFT(ELIS,"2%");

                    POSITIONABSOLUTE(ELIS);

                    TEXTVIEW(ELIS,"We are preparing food packages to turn into cheerful Ramadan tables for the families in need during Ramadan.",(ELEMENTSES)=>{

                        MARGIN(ELEMENTSES,"5%");

                        FONTSIZE(ELEMENTSES,"17px");

                    });

                });

                BUTTON(ELEMENTIS,"Donate",GREEN,"",(ELEMENTS)=>{

                    POSITIONABSOLUTE(ELEMENTS);
                    WIDTH(ELEMENTS,"30%");
                    LEFT(ELEMENTS,"40%");
                    HEIGHT(ELEMENTS,"40px");
                    RADIUS(ELEMENTS,"5px");
                    BOTTOM(ELEMENTS,"50px");

                });

            });

            INLINEVIEW(ELEMENTS,"80%","95%",TRANSPARENT,"2%",(ELEMENTIS)=>{

                OVERFLOWX(ELEMENTIS);

                (ELEMENTIS,"2%");

                FLEXSHRINK(ELEMENTIS);

                RADIUS(ELEMENTIS,"10px");

                SERVERCOMPONENTS("Images/Asco/Zakat.jpeg",(DATA)=>{

                    IMAGE(ELEMENTIS,"","",DATA,TRANSPARENT,(ELEMENTSES)=>{

                        POSITIONABSOLUTE(ELEMENTSES);
    
                    });

                });

                TEXTVIEW(ELEMENTIS,"ZAKAT AL-FITIR 2026/1447H",(ELEMENTSES)=>{

                    PADDING(ELEMENTSES,"5%");

                    HEIGHT(ELEMENTSES,"50px");

                    COLOR(ELEMENTSES,BLACK);

                    BACKGROUND(ELEMENTSES,"#FFFFFF70");

                    POSITIONABSOLUTE(ELEMENTSES);

                    TOP(ELEMENTSES,"0");

                });

                DIVVIEW(ELEMENTIS,"95%","200px","#00000060",(ELIS)=>{

                    BOTTOM(ELIS,"20px");

                    LEFT(ELIS,"2%");

                    POSITIONABSOLUTE(ELIS);

                    TEXTVIEW(ELIS,"Zakat involves giving of 2.5% of our annual wealth to charity. It is one of the five pillars of Islam and compulsory for all eligible Muslims.",(ELEMENTSES)=>{

                        MARGIN(ELEMENTSES,"5%");

                        FONTSIZE(ELEMENTSES,"17px");

                    });

                });

                BUTTON(ELEMENTIS,"Donate",GREEN,"",(ELEMENTS)=>{

                    POSITIONABSOLUTE(ELEMENTS);
                    WIDTH(ELEMENTS,"30%");
                    LEFT(ELEMENTS,"40%");
                    HEIGHT(ELEMENTS,"40px");
                    RADIUS(ELEMENTS,"5px");
                    BOTTOM(ELEMENTS,"50px");

                });

            });

            INLINEVIEW(ELEMENTS,"80%","95%",TRANSPARENT,"2%",(ELEMENTIS)=>{

                OVERFLOWX(ELEMENTIS);

                MARGIN(ELEMENTIS,"2%");

                FLEXSHRINK(ELEMENTIS);

                RADIUS(ELEMENTIS,"10px");

                SERVERCOMPONENTS("Images/Asco/FoodPack.jpeg",(DATA)=>{

                    IMAGE(ELEMENTIS,"","",DATA,TRANSPARENT,(ELEMENTSES)=>{

                        POSITIONABSOLUTE(ELEMENTSES);
    
                    });

                });

                TEXTVIEW(ELEMENTIS,"SHARE HOPE 2026/1447H",(ELEMENTSES)=>{

                    PADDING(ELEMENTSES,"5%");

                    HEIGHT(ELEMENTSES,"50px");

                    COLOR(ELEMENTSES,BLACK);

                    BACKGROUND(ELEMENTSES,WHITE);

                    POSITIONABSOLUTE(ELEMENTSES);

                    TOP(ELEMENTSES,"0");

                });

                DIVVIEW(ELEMENTIS,"95%","200px","#00000060",(ELIS)=>{

                    BOTTOM(ELIS,"20px");

                    LEFT(ELIS,"2%");

                    POSITIONABSOLUTE(ELIS);

                    TEXTVIEW(ELIS,"Randam A month to share and repent your wrong doings to Allah.",(ELEMENTSES)=>{

                        MARGIN(ELEMENTSES,"5%");

                        FONTSIZE(ELEMENTSES,"17px");

                    });

                });

                BUTTON(ELEMENTIS,"Donate",GREEN,"",(ELEMENTS)=>{

                    POSITIONABSOLUTE(ELEMENTS);
                    WIDTH(ELEMENTS,"30%");
                    LEFT(ELEMENTS,"40%");
                    HEIGHT(ELEMENTS,"40px");
                    RADIUS(ELEMENTS,"5px");
                    BOTTOM(ELEMENTS,"50px");

                });

            });

        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","auto",TRANSPARENT,(ELEMENTS)=>{

            TEXTVIEW(ELEMENTS,"FEED THE FASTING THIS RAMADAN",(ELEMENTSES)=>{

                MARGIN(ELEMENTSES,"5%");

                FONTSIZE(ELEMENTSES,"17px");

                COLOR(ELEMENTSES,TEAL);

            });

            LEFTTEXTVIEW(ELEMENTS,"Whoever helps break the fast of a fasting person will have the same reward as the one [who fasted] without decreasing anything from the reward of the fasting person.",(ELEMENTSES)=>{

                FONTSIZE(ELEMENTSES,"17px");

                COLOR(ELEMENTSES,BLACK);

            });

        });
        
        BREAK(ELEMENT);

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{

            OVERFLOWX(ELEMENTS);

            BUTTON(ELEMENTS,"Water Well Construction",TEAL,"",(ELEMENTS)=>{

                WIDTH(ELEMENTS,"200px");
                HEIGHT(ELEMENTS,"40px");
                RADIUS(ELEMENTS,"5px");

            });       
           
        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","400px",TRANSPARENT,(ELEMENTS)=>{

            SERVERCOMPONENTS("Images/Asco/waterwell.jpeg",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,(ELEMENTSES)=>{

                    POSITIONABSOLUTE(ELEMENTSES);
                    LEFT(ELEMENTSES,"");
    
                });

            });

            RADIUS(ELEMENTS,"10px");

            FOOTER(ELEMENTS,(ELS)=>{

                BACKGROUND(ELS,BLACK);

                TEXTVIEW(ELS,"Donate",(ELSSS)=>{

                });

            });

        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","auto",TRANSPARENT,(ELEMENTS)=>{

            TEXTVIEW(ELEMENTS,"BLESSINGS OF PROVIDING WATER",(ELEMENTSES)=>{

                MARGIN(ELEMENTSES,"5%");

                FONTSIZE(ELEMENTSES,"17px");

                COLOR(ELEMENTSES,TEAL);

            });

            LEFTTEXTVIEW(ELEMENTS,"The Prophet Muhammad (peace be upon him) said, \"The best charity is providing water.\" (Ibn Majah) Your contribution will not only bring physical relief but also spiritual rewards",(ELEMENTSES)=>{

                FONTSIZE(ELEMENTSES,"17px");

                COLOR(ELEMENTSES,BLACK);

            });

        });

        BREAK(ELEMENT);

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{

            OVERFLOWX(ELEMENTS);

            BUTTON(ELEMENTS,"Qurban",TEAL,"",(ELEMENTS)=>{

                WIDTH(ELEMENTS,"150px");
                HEIGHT(ELEMENTS,"40px");
                RADIUS(ELEMENTS,"5px");

            });       
           
        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","400px",TRANSPARENT,(ELEMENTS)=>{

            SERVERCOMPONENTS("Images/Asco/qurban.jpeg",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,(ELEMENTSES)=>{

                    POSITIONABSOLUTE(ELEMENTSES);
                    LEFT(ELEMENTSES,"");
    
                });

            });

            RADIUS(ELEMENTS,"10px");

            FOOTER(ELEMENTS,(ELS)=>{

                BACKGROUND(ELS,BLACK);

                TEXTVIEW(ELS,"Donate",(ELSSS)=>{

                });

            });

        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","auto",TRANSPARENT,(ELEMENTS)=>{

            TEXTVIEW(ELEMENTS,"THE BLESSINGS OF PROVIDING WATER",(ELEMENTSES)=>{

                MARGIN(ELEMENTSES,"5%");

                FONTSIZE(ELEMENTSES,"17px");


                COLOR(ELEMENTSES,TEAL);

            });

            LEFTTEXTVIEW(ELEMENTS,"Whoever helps break the fast of a fasting person will have the same reward as the one [who fasted] without decreasing anything from the reward of the fasting person.",(ELEMENTSES)=>{

                FONTSIZE(ELEMENTSES,"17px");

                COLOR(ELEMENTSES,BLACK);

            });

        });

        BREAK(ELEMENT);

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{

            OVERFLOWX(ELEMENTS);

            BUTTON(ELEMENTS,"Mosque Construction",TEAL,"",(ELEMENTS)=>{

                WIDTH(ELEMENTS,"150px");
                HEIGHT(ELEMENTS,"40px");
                RADIUS(ELEMENTS,"5px");

            });       
           
        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","400px",TRANSPARENT,(ELEMENTS)=>{

            SERVERCOMPONENTS("Images/Asco/mosque.jpeg",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,(ELEMENTSES)=>{

                    POSITIONABSOLUTE(ELEMENTSES);
                    LEFT(ELEMENTSES,"");
    
                });

            });

            RADIUS(ELEMENTS,"10px");

            FOOTER(ELEMENTS,(ELS)=>{

                BACKGROUND(ELS,BLACK);

                TEXTVIEW(ELS,"Donate",(ELSSS)=>{

                });

            });

        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","auto",TRANSPARENT,(ELEMENTS)=>{

            TEXTVIEW(ELEMENTS,"FEED THE FASTING THIS RAMADAN",(ELEMENTSES)=>{

                MARGIN(ELEMENTSES,"5%");

                FONTSIZE(ELEMENTSES,"17px");

                COLOR(ELEMENTSES,TEAL);

            });

            LEFTTEXTVIEW(ELEMENTS,"Whoever helps break the fast of a fasting person will have the same reward as the one [who fasted] without decreasing anything from the reward of the fasting person.",(ELEMENTSES)=>{

                FONTSIZE(ELEMENTSES,"17px");

                COLOR(ELEMENTSES,BLACK);

            });

        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","300px",TRANSPARENT,(ELEMENTS)=>{

            RADIUS(ELEMENTS,"10px");

            TABLEVIEW(ELEMENTS,"50%","30px",TRANSPARENT,"2%",(ELEMENTIS)=>{

                RADIUS(ELEMENTIS,"5px");

                TEXTVIEW(ELEMENTIS,"Social Media",(ELEMENTSES)=>{

                    MARGIN(ELEMENTSES,"5%");

                    COLOR(ELEMENTSES,BLACK);

                });

            });

            BREAK(ELEMENT);

            INLINEVIEW(ELEMENTS,"95%","100px",TRANSPARENT,"2%",(ELEMENTS)=>{

                OVERFLOWX(ELEMENTS);

                ICONVIEW(ELEMENTS,COLOREDFACEBOOKICON,(ELEMENTS)=>{

                    WIDTH(ELEMENTS,"50px");

                    HEIGHT(ELEMENTS,"50px");

                });

                ICONVIEW(ELEMENTS,COLOREDINSTAGRAM,(ELEMENTS)=>{

                    WIDTH(ELEMENTS,"50px");

                    HEIGHT(ELEMENTS,"50px");

                });

                ICONVIEW(ELEMENTS,COLOREDTIKTOKICON,(ELEMENTS)=>{

                    WIDTH(ELEMENTS,"50px");

                    HEIGHT(ELEMENTS,"50px");

                });

                ICONVIEW(ELEMENTS,BLACKXICON,(ELEMENTS)=>{

                    WIDTH(ELEMENTS,"50px");

                    HEIGHT(ELEMENTS,"50px");

                });

            });

            BREAK(ELEMENT);

            TABLEVIEW(ELEMENTS,"30%","25px",TRANSPARENT,"2%",(ELEMENTIS)=>{

                RADIUS(ELEMENTIS,"5px");

                TEXTVIEW(ELEMENTIS,"Policies",(ELEMENTSES)=>{

                    MARGINTOP(ELEMENTSES,"2%");

                    FONTSIZE(ELEMENTSES,"15px");

                    COLOR(ELEMENTSES,BLACK);

                });

            });

            TABLEVIEW(ELEMENTS,"20%","25px",TRANSPARENT,"2%",(ELEMENTIS)=>{

                RADIUS(ELEMENTIS,"5px");

                TEXTVIEW(ELEMENTIS,"App",(ELEMENTSES)=>{

                    MARGINTOP(ELEMENTSES,"5%");

                    FONTSIZE(ELEMENTSES,"15px");

                    COLOR(ELEMENTSES,BLACK);

                });

            });

            TABLEVIEW(ELEMENTS,"30%","25px",TRANSPARENT,"2%",(ELEMENTIS)=>{

                RADIUS(ELEMENTIS,"5px");

                TEXTVIEW(ELEMENTIS,"Contact Us",(ELEMENTSES)=>{

                    MARGINTOP(ELEMENTSES,"5%");

                    FONTSIZE(ELEMENTSES,"15px");

                    COLOR(ELEMENTSES,BLACK);

                });

            });

            TABLEVIEW(ELEMENTS,"30%","25px",TRANSPARENT,"2%",(ELEMENTIS)=>{

                RADIUS(ELEMENTIS,"5px");

                TEXTVIEW(ELEMENTIS,"Policies",(ELEMENTSES)=>{

                    MARGINTOP(ELEMENTSES,"2%");

                    FONTSIZE(ELEMENTSES,"15px");

                    COLOR(ELEMENTSES,BLACK);

                });

            });

            TABLEVIEW(ELEMENTS,"20%","25px",TRANSPARENT,"2%",(ELEMENTIS)=>{

                RADIUS(ELEMENTIS,"5px");

                TEXTVIEW(ELEMENTIS,"App",(ELEMENTSES)=>{

                    MARGINTOP(ELEMENTSES,"5%");

                    FONTSIZE(ELEMENTSES,"15px");

                    COLOR(ELEMENTSES,BLACK);

                });

            });

            TABLEVIEW(ELEMENTS,"30%","25px",TRANSPARENT,"2%",(ELEMENTIS)=>{

                RADIUS(ELEMENTIS,"5px");

                TEXTVIEW(ELEMENTIS,"Contact Us",(ELEMENTSES)=>{

                    MARGINTOP(ELEMENTSES,"5%");

                    FONTSIZE(ELEMENTSES,"15px");

                    COLOR(ELEMENTSES,BLACK);

                });

            });

            TABLEVIEW(ELEMENTS,"30%","25px",TRANSPARENT,"2%",(ELEMENTIS)=>{

                RADIUS(ELEMENTIS,"5px");

                TEXTVIEW(ELEMENTIS,"Policies",(ELEMENTSES)=>{

                    MARGINTOP(ELEMENTSES,"2%");

                    FONTSIZE(ELEMENTSES,"15px");

                    COLOR(ELEMENTSES,BLACK);

                });

            });

            TABLEVIEW(ELEMENTS,"20%","25px",TRANSPARENT,"2%",(ELEMENTIS)=>{

                RADIUS(ELEMENTIS,"5px");

                TEXTVIEW(ELEMENTIS,"App",(ELEMENTSES)=>{

                    MARGINTOP(ELEMENTSES,"5%");

                    FONTSIZE(ELEMENTSES,"15px");

                    COLOR(ELEMENTSES,BLACK);

                });

            });

            TABLEVIEW(ELEMENTS,"30%","25px",TRANSPARENT,"2%",(ELEMENTIS)=>{

                RADIUS(ELEMENTIS,"5px");

                TEXTVIEW(ELEMENTIS,"Contact Us",(ELEMENTSES)=>{

                    MARGINTOP(ELEMENTSES,"5%");

                    FONTSIZE(ELEMENTSES,"15px");

                    COLOR(ELEMENTSES,BLACK);

                });

            });

            BREAK(ELEMENTS);

            BREAK(ELEMENTS);
            
            BREAK(ELEMENTS);

        });

    });

    BUTTON(""," ",FORESTGREEN,"",(ELEMENTS)=>{

        POSITIONFIXED(ELEMENTS);
        RIGHT(ELEMENTS,"2%");
        BOTTOM(ELEMENTS,"5px");
        
        WIDTH(ELEMENTS,"70px");
        HEIGHT(ELEMENTS,"70px");
        RADIUS(ELEMENTS,"100%");

        ICONVIEW(ELEMENTS,WHITEWHATSAPPICON,(ELEMENTS)=>{

            WIDTH(ELEMENTS,"30px");

            HEIGHT(ELEMENTS,"30px");

        });

    });   
 
};

const DESKTOPVIEW=()=>{

};