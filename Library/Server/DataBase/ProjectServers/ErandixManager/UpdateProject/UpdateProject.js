export const ERANDIXUPDATEPROJECT=(LINK,NAME,ID,INFO,CALLBACK)=>{

    GETDATA(LINK,NAME,(Data)=>{

        TOASTVIEW("Please Wait,Fetching Project Data");

        FINDER(Data,"ID",ID,(User)=>{

            CONDITION(User.ID ===ID,()=>{

                CONDITION(User.Approved,()=>{

                    UPDATEDATA(LINK,NAME,ID,INFO,(data)=>{
    
                        CALLBACK(data);
    
                    });

                },()=>{

                    TOASTVIEW("Something Went Wrong,Try Again Later!");

                });

            },()=>{

                TOASTVIEW("Failed To Update Project");

            });

        });

    });

};