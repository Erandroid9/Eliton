const ERANDES=()=>{

    PAGESMANAGERS();

    DOWNLOADSAVEINDEX(QELDATABASELINK,"Catergory",(Data)=>{

        DOWNLOADSAVEINDEX(QELDATABASELINK,"Products",(Data)=>{

        },()=>{

        });

    },()=>{

        DOWNLOADSAVEINDEX(QELDATABASELINK,"Products",(Data)=>{

        },()=>{

            PAGESMANAGERS();
            
        });

    });

};


const PAGESMANAGERS=()=>{

    SWITCHER("800px",()=>{HOMEPAGE()},()=>{HOMEPAGE();})

};

const HOMEPAGE=()=>{

    HEADERFOOTERVIEW((ELEMENT)=>{

        LEFTTEXTVIEW(ELEMENT,"Qel Medistore",()=>{

        });

        RIGHTICONVIEW(ELEMENT,WHITEUSERICON,()=>{

        });

    },(ELEMENT)=>{

        GETSAVEDINDEX("Catergory",(Data)=>{

            CHECKER(Data.Approved,()=>{
                
                DIVVIEW(ELEMENT,"95%","300px",TRANSPARENT,(ELEMENTS0)=>{

                    MARGIN(ELEMENTS0,"2%");

                    OVERFLOW(ELEMENTS0);

                    HEADER(ELEMENTS0,(ELES)=>{

                        LEFTTEXTVIEW(ELES,Data.ProductName,(ELEMENTSA)=>{

                        });

                    });

                    INLINEVIEW(ELEMENTS0,"","auto",TRANSPARENT,"",(ELEMENTA)=>{

                        POSITIONABSOLUTE(ELEMENTA);
                        BOTTOM(ELEMENTA,"");
                        TOP(ELEMENTA,"50px");
                        LEFT(ELEMENTA,"");
                        OVERFLOWHIDDEN(ELEMENTA);
                        OVERFLOWX(ELEMENTA);

                        GETSAVEDINDEX("Products",(Datate)=>{

                            CHECKER(Data.ID === Datate.ProductCatergory && Datate.Approved,()=>{

                                INLINEVIEW(ELEMENTA,"150px","100%",TRANSPARENT,"2%",(ELEMENTA)=>{

                                    FLEXSHRINK(ELEMENTA);

                                    IMAGE(ELEMENTA,"","",Datate.ProductImage,TRANSPARENT,(ELEMENTSS)=>{

                                        COVEROBJECTFIT(ELEMENTSS);

                                    });

                                    HEADER(ELEMENTA,(ELES)=>{

                                        RIGHTTEXTVIEW(ELES,Datate.ProductNumber,(ELEMENTSA)=>{

                                            FONTSIZE(ELEMENTSA,"20px");

                                            PADDING(ELEMENTSA,"2%");

                                            BACKGROUND(ELEMENTSA,BLACK);

                                            COLOR(ELEMENTSA,FORESTGREEN);

                                        });

                                    });

                                    FOOTER(ELEMENTA,(ELES)=>{

                                        BACKGROUND(ELES,BLACK);

                                        LEFTTEXTVIEW(ELES,Datate.ProductName,(ELEMENTSA)=>{

                                            FONTSIZE(ELEMENTSA,"15px");

                                        });
                
                                    });

                                    CLICK(ELEMENTA,()=>{

                                        JSONIFICATION (Datate,(Dares)=>{

                                            DATASTORE("","Items",Dares);

                                        });

                                    });

                                });

                            });

                        });
 
                    });
   
                });
      
            });

        });

    },(ELEMENT)=>{

        TEXTVIEW(ELEMENT,"Contact Us",()=>{
            
        });

        TEXTVIEW(ELEMENT,"App",(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                WEBSITE("https://erandroid9.github.io/Eliton/Library/Assets/DataBase/Raw/Apps/Android/qel.apk");

            });
            
        });

        TEXTVIEW(ELEMENT,"Policies",()=>{

            WEBSITE("https://qelmedistore.site/PrivacyPolicy.html");
  
        });

    });

};