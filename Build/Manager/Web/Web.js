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

                        HEADER(ELEMENTSS,(ELSS)=>{

                            TEXTVIEW(ELSS,Data.Name,(ELS)=>{

                            });

                        });
    
                        FOOTER(ELEMENTSS,(ELES)=>{
    
                            ICONVIEW(ELES,WHITEADDICON,()=>{
    
                            });
    
                            ICONVIEW(ELES,WHITEINFOICON,(ELEMENTSI)=>{

                                CLICK(ELEMENTSI,()=>{

                                    DESKTOPPRODUCTINFO(ELEMENTS,Data);

                                });
    
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

const DESKTOPPRODUCTINFO=(ELEMENT,Data)=>{

    CLEAR(ELEMENT);

    BREAK(ELEMENT);

    DIVVIEW(ELEMENT,"45%","300px",TRANSPARENT,(ELEMENTSS)=>{

        OVERFLOWHIDDEN(ELEMENTSS);

        IMAGE(ELEMENTSS,"","",Data.ProjectImage||ERANDIXLOGO,TRANSPARENT,()=>{
    
        });

    });

    BREAK(ELEMENT);

    INLINEVIEW(ELEMENT,"95%","100px",TRANSPARENT,"1%",(ELEMENTSS)=>{

        BUTTON(ELEMENTSS,"Performance",FORESTGREEN,"",(ELES)=>{

            WIDTH(ELES,"30%");

            CLICK(ELES,()=>{

                DESKTOPSITEPERFORMANCE(ELEMENT,Data);

            });

        });

        BUTTON(ELEMENTSS,"Email Admin",TEAL,"",(ELES)=>{

            WIDTH(ELES,"30%");

        });

        BUTTON(ELEMENTSS,"Site",ORANGE,"",(ELES)=>{

            WIDTH(ELES,"30%");

            CLICK(ELES,()=>{

                TOASTCONDITION(Data.Domain,"No Site Link Added",()=>{

                    WEBSITE(Data.Domain);

                });

            });

        });

    });

    BREAK(ELEMENT);

    INLINEVIEW(ELEMENT,"95%","50px",FORESTGREEN,"1%",(ELEMENTSS)=>{

        LEFTTEXTVIEW(ELEMENTSS,"Project Name :",()=>{

        });

        RIGHTTEXTVIEW(ELEMENTSS,Data.Name,()=>{

        });

    });

    BREAK(ELEMENT);

    INLINEVIEW(ELEMENT,"95%","50px",FORESTGREEN,"1%",(ELEMENTSS)=>{

        LEFTTEXTVIEW(ELEMENTSS,"Android:",()=>{

        });

        RIGHTTEXTVIEW(ELEMENTSS,Data.Android||"No Data Added",()=>{

        });

    });

    BREAK(ELEMENT);

    INLINEVIEW(ELEMENT,"95%","50px",FORESTGREEN,"1%",(ELEMENTSS)=>{

        LEFTTEXTVIEW(ELEMENTSS,"Desktop:",()=>{

        });

        RIGHTTEXTVIEW(ELEMENTSS,Data.Desktop||"No Data Added",()=>{

        });

    });

    BREAK(ELEMENT);

    INLINEVIEW(ELEMENT,"95%","50px",FORESTGREEN,"1%",(ELEMENTSS)=>{

        LEFTTEXTVIEW(ELEMENTSS,"Web:",()=>{

        });

        RIGHTTEXTVIEW(ELEMENTSS,Data.Web||"No Data Added",()=>{

        });

    });

    BREAK(ELEMENT);

    INLINEVIEW(ELEMENT,"95%","50px",FORESTGREEN,"1%",(ELEMENTSS)=>{

        LEFTTEXTVIEW(ELEMENTSS,"AdminEmail:",()=>{

        });

        RIGHTTEXTVIEW(ELEMENTSS,Data.AdminEmail||"No Admin Mail Added",()=>{

        });

    });

    BREAK(ELEMENT);

    INLINEVIEW(ELEMENT,"95%","50px",FORESTGREEN,"1%",(ELEMENTSS)=>{

        LEFTTEXTVIEW(ELEMENTSS,"ProjectExpiry:",()=>{

        });

        RIGHTTEXTVIEW(ELEMENTSS,Data.ProjectExpiry||"No Expiry Date Added",()=>{

        });

    });

    BREAK(ELEMENT);

    INLINEVIEW(ELEMENT,"95%","50px",FORESTGREEN,"1%",(ELEMENTSS)=>{

        LEFTTEXTVIEW(ELEMENTSS,"Domain:",()=>{

        });

        RIGHTTEXTVIEW(ELEMENTSS,Data.Domain||"No Domain Link Added",()=>{

        });

    });

};

const DESKTOPSITEPERFORMANCE=(ELEMENT,Data)=>{

    CLEAR(ELEMENT);

    BREAK(ELEMENT);

    INLINEVIEW(ELEMENT,"95%","100px",TRANSPARENT,"1%",(ELEMENTSS)=>{

        BUTTON(ELEMENTSS,"Get Number",FORESTGREEN,"",(ELES)=>{

            WIDTH(ELES,"30%");

            CLICK(ELES,()=>{

                DISPLAY(ELES,"Visitors:"+sessionStorage.getItem("DataFetched"));

            });

        });

        BUTTON(ELEMENTSS,"Email Developer",TEAL,"",(ELES)=>{

            WIDTH(ELES,"30%");

        });

        BUTTON(ELEMENTSS,"Back",GREEN,"",(ELES)=>{

            WIDTH(ELES,"30%");

            CLICK(ELES,()=>{

                DESKTOPPRODUCTINFO(ELEMENT,Data)

            });

        });

    });

    REDUXEDDATA(ERANDIXSITEMANAGERLINK,Data.ID,(Datata)=>{

        INLINEVIEW(ELEMENT,"95%","50px",FORESTGREEN,"1%",(ELEMENTSS)=>{

            LEFTTEXTVIEW(ELEMENTSS,Datata.ID,()=>{

            });

            RIGHTTEXTVIEW(ELEMENTSS,Datata.VisitedTimes,()=>{

            });

        });

        console.log(Datata);

    });

};

const DESKTOPPRODUCTUPDATE=(ELEMENT,Data)=>{

};
