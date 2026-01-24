const ERANDES=()=>{

    ROUTE("",HOMEPAGE,"HOMEPAGE");

    DOWNLOADSAVEINDEX(QELDATABASELINK,"Catergory",(Data)=>{

        DOWNLOADSAVEINDEX(QELDATABASELINK,"Products",(Data)=>{

        },()=>{

        });

    },()=>{

        DOWNLOADSAVEINDEX(QELDATABASELINK,"Products",(Data)=>{

        },()=>{

            ROUTE("",HOMEPAGE,"HOMEPAGE");
            
        });

    });

};

const HOMEPAGE=()=>{

    FOOTERVIEW((ELEMENT)=>{

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

                                            ROUTE(" ",DETAILSPAGE,"HOMEPAGE");

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

        ICONVIEW(ELEMENT,WHITEGRIDICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE(" ",CARTERGORYPAGE,"HOMEPAGE");

            }); 

        });

        ICONVIEW(ELEMENT,WHITESHOPPINGCART,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE(" ",SHOPPINGACCOUNTPAGE,"HOMEPAGE");

            });

        });

        ICONVIEW(ELEMENT,WHITEUSERPROFILEICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE(" ",USERACCOUNTPAGE,"HOMEPAGE");

            });

        });

    });

};

const DETAILSPAGE=()=>{

    DEJSONDATA("","Items",(Data)=>{

        HEADERVIEW((ELEMENT)=>{

            LEFTICONVIEW(ELEMENT,WHITEBACKICON,(ELEMENTS)=>{

                CLICK(ELEMENTS,()=>{

                    ROUTE("",HOMEPAGE,"HOMEPAGE");

                });

            });

            RIGHTTEXTVIEW(ELEMENT,Data.ProductName,(ELEMENTS)=>{

            });

        },(ELEMENT)=>{

            FOOTER(ELEMENT,(ELEMENTS)=>{

                BUTTON(ELEMENTS,"Cart",TEAL,WHITE,(ELEMENTSS)=>{

                    WIDTH(ELEMENTSS,"40%");
                    HEIGHT(ELEMENTSS,"40px");

                });

                BUTTON(ELEMENTS,"Buy",FORESTGREEN,WHITE,(ELEMENTSS)=>{

                    WIDTH(ELEMENTSS,"40%");
                    HEIGHT(ELEMENTSS,"40px");

                });

            });

        });

    });

};

const USERACCOUNTPAGE=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE("",HOMEPAGE,"HOMEPAGE");

            });

        });

        RIGHTTEXTVIEW(ELEMENT,"Profile",(ELEMENTS)=>{

        });

    },(ELEMENT)=>{

        DIVVIEW(ELEMENT,"95%","300px",ORANGE,(ELEMENTS)=>{

            MARGIN(ELEMENTS,"2%");
            RADIUS(ELEMENTS,"10px");
            OVERFLOW(ELEMENTS);

        });

        BUTTON(ELEMENT,"Settings",FORESTGREEN,"",(ELEMENTS)=>{

            WIDTH(ELEMENTS,"95%");
            MARGIN(ELEMENTS,"2%");

        });

        BUTTON(ELEMENT,"Policies",FORESTGREEN,"",(ELEMENTS)=>{

            WIDTH(ELEMENTS,"95%");
            MARGIN(ELEMENTS,"2%");

        });

        BUTTON(ELEMENT,"Updates",FORESTGREEN,"",(ELEMENTS)=>{

            WIDTH(ELEMENTS,"95%");
            MARGIN(ELEMENTS,"2%");

        });

    });

};

const SHOPPINGACCOUNTPAGE=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE("",HOMEPAGE,"HOMEPAGE");

            });

        });

        RIGHTTEXTVIEW(ELEMENT,"My Cart",(ELEMENTS)=>{

        });

    },(ELEMENT)=>{

    });

};

const CARTERGORYPAGE=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTICONVIEW(ELEMENT,WHITEBACKICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                ROUTE("",HOMEPAGE,"HOMEPAGE");

            });

        });

        RIGHTTEXTVIEW(ELEMENT,"Catergroy",(ELEMENTS)=>{

        });

    },(ELEMENT)=>{

    });

};