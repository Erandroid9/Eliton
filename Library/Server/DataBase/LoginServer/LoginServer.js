export const LOGINSERVER=(LINK)=>{

    GETDATA(LINK,"Users",(Data)=>{

        TOASTVIEW("Please Wait,Fetching User Data?");

        FINDER(Data,"UserEmail",sessionStorage.getItem("UserEmail"),(User)=>{

            CONDITION(User.UserEmail === sessionStorage.getItem("UserEmail"),()=>{

                CONDITION(User.UserPassword === sessionStorage.getItem("UserPassword"),()=>{

                    DATASTORE(" ","User",User.ID);

                    RELOAD();

                },()=>{

                    TOASTVIEW("Incorrect Password");

                });

            },()=>{

                TOASTVIEW("No User Account Found!");

            });

        });

    });

};