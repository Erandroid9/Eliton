const ERANDES=()=>{

    SWITCHER("800px",()=>{DESKTOPVIEW()},()=>{MOBILEVIEW();})

};

const DESKTOPVIEW=()=>{

    HEADERVIEW((ELEMENT)=>{

    },(ELEMENT)=>{

    });
    
};

const MOBILEVIEW=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTTEXTVIEW(ELEMENT,"Doctor Mjomba Ali",()=>{

        });

        RIGHTICONVIEW(ELEMENT,WHITEWHATSAPPICON,(ELEMENT)=>{

            CLICK(ELEMENT,()=>{

                WHATSAPP("+254748352113");

            });

        });

    },(ELEMENT)=>{

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{

            TEXTVIEW(ELEMENTS,"Family",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Family Problems");

                    DATASTORE("","SectorID","Family");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

            TEXTVIEW(ELEMENTS,"Business",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Business Problems");

                    DATASTORE("","SectorID","Business");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

            TEXTVIEW(ELEMENTS,"Health",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Health Problems");

                    DATASTORE("","SectorID","Health");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

            TEXTVIEW(ELEMENTS,"Jobs",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Jobs Problems");

                    DATASTORE("","SectorID","Jobs");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

        });

        DIVVIEW(ELEMENT,"95%","400px",TRANSPARENT,(ELEMENTS)=>{

            SERVERCOMPONENTS("Images/DoctorMjombaAli/FamilyProbelms.png",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,(ELEMENTS)=>{

                    POSITIONABSOLUTE(ELEMENTS);
                    LEFT(ELEMENTS);

                });
                
            });

            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,"FAMILY PROBLEMS",(ELEMENTSIS)=>{

                COLOR(ELEMENTSIS,BLACK);
                BACKGROUND(ELEMENTSIS,WHITE);
                PADDING(ELEMENTSIS,"2%");
                WIDTH(ELEMENTSIS,"90%");

            });

            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,"Tired Of Unending Family Problems,One After the Other Be It in Finances,Relationship and More.Doctor Mjomba Ali can Give You a Rest so as So Recieve the Benefits of Your Marriage.",(ELEMENTSIS)=>{

                COLOR(ELEMENTSIS,WHITE);
                BACKGROUND(ELEMENTSIS,BLACK);
                PADDING(ELEMENTSIS,"2%");
                WIDTH(ELEMENTSIS,"90%");

            });

            FOOTER(ELEMENTS,(ELEMENTSS)=>{

                BACKGROUND(ELEMENTSS,BLACK);

                ICONVIEW(ELEMENTSS,WHITEPHONEICON,(ELEMENTSS)=>{

                    CLICK(ELEMENTSS,()=>{

                        CALL("+254794094414");

                    });

                });

                ICONVIEW(ELEMENTSS,WHITECHATICON,(ELEMENTSS)=>{

                    CLICK(ELEMENTSS,()=>{

                        SMS("+254794094414");

                    });

                });

                ICONVIEW(ELEMENTSS,WHITEWHATSAPPICON,(ELEMENTSS)=>{

                    CLICK(ELEMENTSS,()=>{

                        WHATSAPP("+254748352113");

                    });

                });

            });

        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","400px",TRANSPARENT,(ELEMENTS)=>{

            SERVERCOMPONENTS("Images/DoctorMjombaAli/FamilyProbelms.png",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,(ELEMENTS)=>{

                    POSITIONABSOLUTE(ELEMENTS);
                    LEFT(ELEMENTS);

                });
                
            });

            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,"BUSINESS PROBLEMS",(ELEMENTSIS)=>{

                COLOR(ELEMENTSIS,BLACK);
                BACKGROUND(ELEMENTSIS,WHITE);
                PADDING(ELEMENTSIS,"2%");
                WIDTH(ELEMENTSIS,"90%");

            });

            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,"Always Failing In Business,let Doctor Mjomba Ali get you the solution so as you never get stack in making money.lets make it rain even in dry season as your neighbours husttle.Work Smart not Hard with Doctor Mjomba Ali",(ELEMENTSIS)=>{

                COLOR(ELEMENTSIS,WHITE);
                BACKGROUND(ELEMENTSIS,BLACK);
                PADDING(ELEMENTSIS,"2%");
                WIDTH(ELEMENTSIS,"90%");

            });

            FOOTER(ELEMENTS,(ELEMENTSS)=>{

                BACKGROUND(ELEMENTSS,BLACK);

                ICONVIEW(ELEMENTSS,WHITEPHONEICON,(ELEMENTSS)=>{

                    CLICK(ELEMENTSS,()=>{

                        CALL("+254794094414");

                    });

                });

                ICONVIEW(ELEMENTSS,WHITECHATICON,(ELEMENTSS)=>{

                    CLICK(ELEMENTSS,()=>{

                        SMS("+254794094414");

                    });

                });

                ICONVIEW(ELEMENTSS,WHITEWHATSAPPICON,(ELEMENTSS)=>{

                    CLICK(ELEMENTSS,()=>{

                        WHATSAPP("+254748352113");

                    });

                });

            });

        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","400px",TRANSPARENT,(ELEMENTS)=>{

            SERVERCOMPONENTS("Images/DoctorMjombaAli/FamilyProbelms.png",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,(ELEMENTS)=>{

                    POSITIONABSOLUTE(ELEMENTS);
                    LEFT(ELEMENTS);

                });
                
            });

            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,"MARRIAGE PROBLEMS",(ELEMENTSIS)=>{

                COLOR(ELEMENTSIS,BLACK);
                BACKGROUND(ELEMENTSIS,WHITE);
                PADDING(ELEMENTSIS,"2%");
                WIDTH(ELEMENTSIS,"90%");

            });

            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,"Are You Known in the neighbour hood for Fights with Your Loved Ones,Parthner and Kids.<br>Come Let Us Make Your Marriage a living example of peace and success without chaores in the community.Contact Us Via Our Resources.",(ELEMENTSIS)=>{

                COLOR(ELEMENTSIS,WHITE);
                BACKGROUND(ELEMENTSIS,BLACK);
                PADDING(ELEMENTSIS,"2%");
                WIDTH(ELEMENTSIS,"90%");

            });

            FOOTER(ELEMENTS,(ELEMENTSS)=>{

                BACKGROUND(ELEMENTSS,BLACK);

                ICONVIEW(ELEMENTSS,WHITEPHONEICON,(ELEMENTSS)=>{

                    CLICK(ELEMENTSS,()=>{

                        CALL("+254794094414");

                    });

                });

                ICONVIEW(ELEMENTSS,WHITECHATICON,(ELEMENTSS)=>{

                    CLICK(ELEMENTSS,()=>{

                        SMS("+254794094414");

                    });

                });

                ICONVIEW(ELEMENTSS,WHITEWHATSAPPICON,(ELEMENTSS)=>{

                    CLICK(ELEMENTSS,()=>{

                        WHATSAPP("+254748352113");

                    });

                });

            });

        });

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"95%","400px",TRANSPARENT,(ELEMENTS)=>{

            SERVERCOMPONENTS("Images/DoctorMjombaAli/FamilyProbelms.png",(DATA)=>{

                IMAGE(ELEMENTS,"","",DATA,TRANSPARENT,(ELEMENTS)=>{

                    POSITIONABSOLUTE(ELEMENTS);
                    LEFT(ELEMENTS);

                });
                
            });

            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,"HEALTH PROBLEMS",(ELEMENTSIS)=>{

                COLOR(ELEMENTSIS,BLACK);
                BACKGROUND(ELEMENTSIS,WHITE);
                PADDING(ELEMENTSIS,"2%");
                WIDTH(ELEMENTSIS,"90%");

            });

            BREAK(ELEMENTS);

            TEXTVIEW(ELEMENTS,"Are You Well Known In the Hospitals,Month In and Month Out Your Never Leaving The Hospital ,Either YourSelf Or A Loved One<br>Let Doctor Mjomba Ali Solve That issue For You ,You Will Never Visit a Hospital Again.",(ELEMENTSIS)=>{

                COLOR(ELEMENTSIS,WHITE);
                BACKGROUND(ELEMENTSIS,BLACK);
                PADDING(ELEMENTSIS,"2%");
                WIDTH(ELEMENTSIS,"90%");

            });

            FOOTER(ELEMENTS,(ELEMENTSS)=>{

                BACKGROUND(ELEMENTSS,BLACK);

                ICONVIEW(ELEMENTSS,WHITEPHONEICON,(ELEMENTSS)=>{

                    CLICK(ELEMENTSS,()=>{

                        CALL("+254794094414");

                    });

                });

                ICONVIEW(ELEMENTSS,WHITECHATICON,(ELEMENTSS)=>{

                    CLICK(ELEMENTSS,()=>{

                        SMS("+254794094414");

                    });

                });

                ICONVIEW(ELEMENTSS,WHITEWHATSAPPICON,(ELEMENTSS)=>{

                    CLICK(ELEMENTSS,()=>{

                        WHATSAPP("+254748352113");

                    });

                });

            });

        });
        
        BREAK(ELEMENT);

        TEXTVIEW(ELEMENT,"All Problems Below",(ELEMENTS)=>{

            COLOR(ELEMENTS,ORANGE);

        });

        BREAK(ELEMENT);

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{``

            TEXTVIEW(ELEMENTS,"Marriage",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Family Problems");

                    DATASTORE("","SectorID","Family");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

            TEXTVIEW(ELEMENTS,"Jobs",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Family Problems");

                    DATASTORE("","SectorID","Family");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

        });

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{``

            TEXTVIEW(ELEMENTS,"Family",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Family Problems");

                    DATASTORE("","SectorID","Family");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

            TEXTVIEW(ELEMENTS,"Witch Craft",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Family Problems");

                    DATASTORE("","SectorID","Family");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

            TEXTVIEW(ELEMENTS,"Business",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Family Problems");

                    DATASTORE("","SectorID","Family");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

        });

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{``

            TEXTVIEW(ELEMENTS,"Demon Attacks",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Family Problems");

                    DATASTORE("","SectorID","Family");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

            TEXTVIEW(ELEMENTS,"Health",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DATASTORE("","Sector","Family Problems");

                    DATASTORE("","SectorID","Family");

                    ROUTE(" ",HEADERPAGES,"MOBILEVIEW");

                });

            });

        });
        
        BREAK(ELEMENT);

        INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTS)=>{``

            TEXTVIEW(ELEMENTS,"Email",()=>{

            });

            TEXTVIEW(ELEMENTS,"App",()=>{

                CLICK(ELEMENTSS,()=>{

                    SERVERCOMPONENTS("",(Data)=>{
                        
                        WEBSITE(Data);

                    })

                });

            });

            TEXTVIEW(ELEMENTS,"Policies",()=>{

            });

        });

        BREAK(ELEMENT);

    });

};

const HEADERPAGES=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,(ELEMENT)=>{

            CLICK(ELEMENT,()=>{

                ROUTE("",MOBILEVIEW,"MOBILEVIEW");

            });

        });

        RIGHTTEXTVIEW(ELEMENT,sessionStorage.getItem("Sector"),()=>{

        });

    },(ELEMENT)=>{

        TEXTVIEW(ELEMENT,"...Please Wait..",()=>{

        });

        GETDATA(DOCTORMJOMBAALICONNECTIONLINK,sessionStorage.getItem("SectorID"),(Data)=>{

            CLEAR(ELEMENT);

            REDUX(Data,(element)=>{

                console.log(element);

            });

        });

    });

};