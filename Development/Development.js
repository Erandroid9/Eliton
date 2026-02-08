const ERANDES=()=>{

    ACCOUNTEMAILCHECKER("","Erandix Manager",ERANDIXMANAGERLINK,()=>{

        VIEWCONTROLLER();

    });

};

const MOBILEVIEW=()=>{

    HEADERVIEW(()=>{

    },()=>{

    });

};

const DESKTOPVIEW=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTTEXTVIEW(ELEMENT,"Erandix Manager",()=>{

        });

        ROUNDINPUTVIEW(ELEMENT,"search","Find Your Project","ProjectName",(ELEMENTS)=>{

            WIDTH(ELEMENTS,"30%");

        });

        ICONVIEW(ELEMENT,WHITEHOMEICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                RELOAD();

            });

        });

        ICONVIEW(ELEMENT,WHITEADDICON,()=>{

        });

        ICONVIEW(ELEMENT,WHITEUSERICON,()=>{

        });

    },(ELEMENT)=>{

        LEFTDIVVIEW(ELEMENT,"",(ELEMENTS)=>{

            WIDTH(ELEMENTS,"40%");

            BREAK(ELEMENTS);

            BUTTON(ELEMENTS,"Deleted Project",FORESTGREEN,"",()=>{

            });

            BREAK(ELEMENTS);

            BUTTON(ELEMENTS," Project",FORESTGREEN,"",()=>{

            });

            BREAK(ELEMENTS);

            BUTTON(ELEMENTS,"Policies",FORESTGREEN,"",()=>{

            });

            BREAK(ELEMENTS);

            BUTTON(ELEMENTS,"Log Out",BROWN,"",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DELETEDATASTORE(" ","User");

                    RELOAD();

                });

            });

            BREAK(ELEMENTS);

            BUTTON(ELEMENTS,"Deleted My Account",RED,"",()=>{

            });

        });

        RIGHTDIVVIEW(ELEMENT,"",(ELEMENTS)=>{

            WIDTH(ELEMENTS,"60%");

            REDUXEDDATA(ERANDIXMANAGERLINK,"Production",(Data)=>{

                CHECKER(Data.Approved,()=>{

                    INLINEVIEW(ELEMENTS,"45%","300px",TRANSPARENT,"1%",(ELEMENTSS)=>{
                        
                        IMAGE(ELEMENTSS,"","",Data.ProjectImage||ERANDIXLOGO,TRANSPARENT,()=>{
    
                        });
    
                        FOOTER(ELEMENTSS,(ELES)=>{
    
                            ICONVIEW(ELES,WHITEADDICON,()=>{
    
                            });
    
                            ICONVIEW(ELES,WHITEINFOICON,()=>{
    
                            });
    
                            ICONVIEW(ELES,WHITEDELETEICON,(ELEMENTSI)=>{
    
                                CLICK(ELEMENTSI,()=>{
    
                                    const INFO=[Data.Name,Data.Android,Data.Desktop,Data.Web,Data.Date,Data.AdminEmail,"",Data.ProjectImage,Data.ProjectExpiry,Data.Domain];
    
                                    ERANDIXUPDATEPROJECT(ERANDIXMANAGERLINK,"Production",Data.ID,INFO,()=>{
    
                                        DESKTOPVIEW();
    
                                    });
    
                                });
    
                            });
    
                        });
    
                    });

                });

            });

        });

    });

};
