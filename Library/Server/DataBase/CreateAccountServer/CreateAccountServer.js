export const CREATEACCOUNTSERVER=(LINK,NAME,HEADERS,DATA,CALLBACK)=>{

    GETDATA(LINK,NAME,(Data)=>{

        TOASTVIEW("Please Wait,Fetching User Data?");

        FINDER(Data,"UserEmail",localStorage.getItem("UserEmail"),(User)=>{

            CONDITION(User.UserEmail === localStorage.getItem("UserEmail"),()=>{

                TOASTVIEW("User With Account Found!");

            },()=>{

                INSERTDATA(LINK,NAME,HEADERS,DATA,(MeData)=>{
                    
                    DATASTORE(" ","User",MeData.ID);
                    
                    CALLBACK();

                });

            });

        });

    });

};