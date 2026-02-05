export const CREATEACCOUNTSERVER=(LINK,NAME,HEADERS,DATA,CALLBACK)=>{

    GETDATA(LINK,NAME,(Data)=>{

        TOASTVIEW("Please Wait,Fetching User Data?");

        FINDER(Data,"UserEmail",localStorage.getItem("UserEmail"),(User)=>{

            CONDITION(User.UserEmail === localStorage.getItem("UserEmail"),()=>{

                TOASTVIEW("User With Account Found!");

            },()=>{

                const MESSAGE=`Dear ${sessionStorage.getItem("UserName")};\n Please Complete Your Account Creation With The Code Below\n ===>${localStorage.getItem("UserCode")}.\n If Your The One Who Created The Account Please Open Respective Point and Add That Code,\n\n If your Not the one Who Requested for Account to be Opened,Please Ignore This Mail.\n Thank You.`
    
                EMAILSERVER(sessionStorage.getItem("UserEmail"),"Account Creation",MESSAGE,()=>{

                    INSERTDATA(LINK,NAME,HEADERS,DATA,(MeData)=>{
                            
                        DATASTORE(" ","User",MeData.ID);
                            
                        CALLBACK();
        
                    });

                });

            });

        });

    });

};