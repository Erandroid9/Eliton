export const ERANDIXUPDATEPROJECT=(LINK,NAME,ID,INFO,CALLBACK)=>{

    GETDATA(LINK,NAME,(Data)=>{

        TOASTVIEW("Please Wait,Fetching Project Data");

        FINDER(Data,"ID",ID,(User)=>{

            CONDITION(User.ID ===ID,()=>{

                UPDATEDATA(LINK,NAME,ID,INFO,(data)=>{
    
                    CALLBACK(data);
    
                });

            },()=>{

                TOASTVIEW("Failed To Update Project");

            });

        });

    });

};