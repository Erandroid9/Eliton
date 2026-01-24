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

            console.log(Data);

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