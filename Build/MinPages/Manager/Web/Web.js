const ERANDES=()=>{

    SWITCHER("800px",()=>{DESKTOPVIEW()},()=>{MOBILEVIEW();})

};

const MOBILEVIEW=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTTEXTVIEW(ELEMENT,"Manager",()=>{

        });

        RIGHTTEXTVIEW(ELEMENT,"Log Out",()=>{

        });

    },(ELEMENT)=>{

        BREAK(ELEMENT);

        INPUT(ELEMENT,"","Project Name",(ELEMENTS)=>{

            INPUTTED(ELEMENTS,()=>{

                DATASTORE("","Name",ELEMENTS.value);

            });

        });

        BREAK(ELEMENT);

        TEXT(ELEMENT,"","Android Section","",()=>{

        });

        BREAK(ELEMENT);

        INPUT(ELEMENT,"","Project Path",(ELEMENTS)=>{

            INPUTTED(ELEMENTS,()=>{

                PATHREVERSE(ELEMENTS.value,(Data)=>{

                    DATASTORE("","Android",Data);

                });
             
            });

        });

        BREAK(ELEMENT);

        TEXT(ELEMENT,"","Desktop Section","",()=>{

        });

        BREAK(ELEMENT);

        INPUT(ELEMENT,"","Project Path",(ELEMENTS)=>{

            INPUTTED(ELEMENTS,()=>{

                PATHREVERSE(ELEMENTS.value,(Data)=>{

                    DATASTORE("","Desktop",Data);

                });
             
            });

        });

        BREAK(ELEMENT);

        TEXT(ELEMENT,"","Web Section","",()=>{

        });

        BREAK(ELEMENT);

        INPUT(ELEMENT,"","Project Path",(ELEMENTS)=>{

            INPUTTED(ELEMENTS,()=>{

                PATHREVERSE(ELEMENTS.value,(Data)=>{

                    DATASTORE("","Web",Data);

                });
             
            });

        });

        BREAK(ELEMENT);

        BUTTON(ELEMENT,"Create Project",TEAL,"",(ELEMENTS)=>{

            WIDTH(ELEMENTS,"95%");

            CLICK(ELEMENTS,()=>{

                ERANDIXNEWPROJECT();

            });

        });

    });

};

const DESKTOPVIEW=()=>{

    HEADERFOOTERVIEW((ELEMENT)=>{

        LEFTTEXTVIEW(ELEMENT,"Erandix Manager",()=>{

        });

        ROUNDINPUTVIEW(ELEMENT,"search","Search Your Project",(ELEMENTS)=>{

            WIDTH(ELEMENTS,"50%");

        });

        RIGHTICONVIEW(ELEMENT,WHITELOGOUTICON,()=>{

        });

    },(ELEMENT)=>{

    },(ELEMENT)=>{

        TEXT(ELEMENT,"h1","Version 1","",()=>{

        });

        TEXT(ELEMENT,"h1","Policies","",()=>{

        });

        TEXT(ELEMENT,"h1","Andriod App ","",()=>{

        });

        TEXT(ELEMENT,"h1","Contact Us ","",()=>{

        });

    });
    
};