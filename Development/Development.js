const ERANDES=()=>{

    ROUTE("",HOMEPAGE,"HOMEPAGE");
   
};

const HOMEPAGE=()=>{

    FOOTERVIEW((ELEMENT)=>{

        GETDATA(QELDATABASELINK,"Catergory",(data)=>{

            REDUX(data,(Data)=>{

                DIVVIEW(ELEMENT,"95%","300px",TRANSPARENT,(ELEMENTS0)=>{

                    MARGIN(ELEMENTS0,"2%");

                    OVERFLOW(ELEMENTS0);

                    HEADER(ELEMENTS0,(ELES)=>{

                        LEFTTEXTVIEW(ELES,Data.ProductName,(ELEMENTSA)=>{

                        });

                    });

                });

                console.log(Data);

            });

        });

    },(ELEMENT)=>{

        ICONVIEW(ELEMENT,WHITEGRIDICON,(ELEMENTS)=>{

        });

        ICONVIEW(ELEMENT,WHITESHOPPINGCART,(ELEMENTS)=>{

        });

        ICONVIEW(ELEMENT,WHITEUSERPROFILEICON,(ELEMENTS)=>{

        });

    });

};