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

                const HEADERS=["Name","Android","Desktop","Web","Date"];

                const INFO=[sessionStorage.getItem("Name"),sessionStorage.getItem("Android"),sessionStorage.getItem("Desktop"),sessionStorage.getItem("Web"),new Date()];
                    
                INSERTDATA(ERANDIXMANAGERLINK,"Production",HEADERS,INFO,(DataS)=>{
                    
                    TOASTVIEW("Data Posted To Server");
                    
                });

            });

        });

    });

};

const DESKTOPVIEW=()=>{


};