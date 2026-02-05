export const LOGINSERVER=(LINK,NAME,CALLBACK)=>{

    GETDATA(LINK,NAME,(Data)=>{

        TOASTVIEW("Please Wait,Fetching User Data?");

        FINDER(Data,"UserEmail",localStorage.getItem("UserEmail"),(User)=>{

            CONDITION(User.UserEmail === localStorage.getItem("UserEmail"),()=>{

                CONDITION(User.UserPassword === localStorage.getItem("UserEmail"),()=>{

                    DATASTORE(" ","User",User.ID);

                    CALLBACK();

                },()=>{

                    TOASTVIEW("Incorrect Password");

                });

            },()=>{

                TOASTVIEW("No User Account Found!");

            });

        });

    });

};