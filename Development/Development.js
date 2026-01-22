const ERANDES=()=>{

    ROUTE("",HOMEPAGE,"HOMEPAGE");
   
};

const HOMEPAGE=()=>{

    FOOTERVIEW((ELEMENT)=>{

        GETDATA(QELDATABASELINK,"Catergory",(data)=>{

            GETDATA(QELDATABASELINK,"products",(Datata)=>{

                REDUX(data,(Data)=>{

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
                                OVERFLOWX(ELEMENTA);
    
                                REDUX(Datata,(Datate)=>{
    
                                    CHECKER(Data.ID === Datate.ProductCatergory && Datate.Approved,()=>{
    
                                        INLINEVIEW(ELEMENTA,"150px","90%",TRANSPARENT,"2%",(ELEMENTA)=>{

                                            FLEXSHRINK(ELEMENTA);

                                            IMAGE(ELEMENTA,"","",Datate.ProductImage,TRANSPARENT,(ELEMENTSS)=>{

                                                COVEROBJECTFIT(ELEMENTSS);

                                            });

                                            FOOTER(ELEMENTA,(ELES)=>{
    
                                                LEFTTEXTVIEW(ELES,Datate.ProductName,(ELEMENTSA)=>{
                        
                                                });
                        
                                            });
    
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