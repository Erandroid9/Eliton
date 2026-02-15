const ERANDES=()=>{

    VIEWCONTROLLER();

    APPMODE();

    SWITCHER("800px",()=>{DESKTOPVIEW()},()=>{MOBILEVIEW();})

};

const MOBILEVIEW=()=>{

    HEADERVIEW((ELEMENT)=>{

        TEXT(ELEMENT,"h1","Image Convertor",()=>{

        });

    },(ELEMENT)=>{

        BREAK(ELEMENT);

        IMAGE(ELEMENT,"95%","50%",ERANDIXLOGO,TRANSPARENT,(ELEMENTERS)=>{

            INLINEVIEW(ELEMENT,"95%","100px","","5% 0%",(ELEMENTS)=>{

                TEXTAREA(ELEMENT,"",(ELEMS)=>{

                    HEIGHT(ELEMS,"30%");

                    BUTTON(ELEMENTS,"Change",TEAL,(ELEMSA)=>{

                        WIDTH(ELEMSA,"20%");

                        FILEPICKER(ELEMSA,(Data)=>{

                            SOURCED(ELEMENTERS,Data.data);

                            BASE64CONVERTOR(Data.data, (Datata)=>{

                                BUTTON(ELEMENTS,"Copy",ORANGE,"",(ELEMSA)=>{

                                    WIDTH(ELEMSA,"20%");

                                    CLICK(ELEMSA,()=>{

                                        COPY(Datata);

                                    });

                                });

                                TEXTCHANGER(ELEMS,Datata);

                            });

                        });

                    });

                    BUTTON(ELEMENTS,"Delete",RED,(ELEMSA)=>{

                        WIDTH(ELEMSA,"20%");

                        CLICK(ELEMSA,()=>{

                            RELOAD();

                        });

                    });

                });

            });

        });

    });

};

const DESKTOPVIEW=()=>{
    
    HEADERVIEW((ELEMENT)=>{

        TEXT(ELEMENT,"h1","Image Convertor",()=>{

        });

    },(ELEMENT)=>{

        BREAK(ELEMENT);

        IMAGE(ELEMENT,"95%","50%",ERANDIXLOGO,TRANSPARENT,(ELEMENTERS)=>{

            INLINEVIEW(ELEMENT,"95%","100px","","5% 0%",(ELEMENTS)=>{

                TEXTAREA(ELEMENT,"",(ELEMS)=>{

                    HEIGHT(ELEMS,"30%");

                    BUTTON(ELEMENTS,"Change",TEAL,(ELEMSA)=>{

                        WIDTH(ELEMSA,"20%");

                        FILEPICKER(ELEMSA,(Data)=>{

                            SOURCED(ELEMENTERS,Data.data);

                            BASE64CONVERTOR(Data.data, (Datata)=>{

                                BUTTON(ELEMENTS,"Copy",ORANGE,"",(ELEMSA)=>{

                                    WIDTH(ELEMSA,"20%");

                                    CLICK(ELEMSA,()=>{

                                        COPY(Datata);

                                    });

                                });

                                TEXTCHANGER(ELEMS,Datata);

                            });

                        });

                    });

                    BUTTON(ELEMENTS,"Delete",RED,(ELEMSA)=>{

                        WIDTH(ELEMSA,"20%");

                        CLICK(ELEMSA,()=>{

                            RELOAD();

                        });

                    });

                });

            });

        });

    });

};