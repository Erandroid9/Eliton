export const REDUXEDDATA=(LINK,NAME,CALLBACK)=>{

    GETDATA(LINK,NAME,(Data)=>{

        DATASTORE("","DataFetched",Data.length);

        REDUX(Data,(element)=>{

            CALLBACK(element);

        });

    });

};