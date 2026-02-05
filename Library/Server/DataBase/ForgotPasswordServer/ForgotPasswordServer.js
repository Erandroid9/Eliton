export const FORGOTPASSWORDSERVER=(LINK)=>{

    GETDATA(LINK,"Users",(Data)=>{

        TOASTVIEW("Please Wait,Fetching User Data?");

        FINDER(Data,"UserEmail",sessionStorage.getItem("UserEmail"),(User)=>{

            CONDITION(User.UserEmail === sessionStorage.getItem("UserEmail"),()=>{
                
                const MESSAGE=`Dear ${User.UserEmail};\n Your Account Password Is Below\n ===>${User.UserPasssword}.\n If Your The One Who Tried to Access Your Account Please Open Respective Point and Don't Share Your Password,\n\n If your Not the one Who Requested for Account to be Opened,Please Ignore This Mail.\n Thank You.`
    
                EMAILSERVER(sessionStorage.getItem("UserEmail"),"Account Creation",MESSAGE,()=>{

                    TOASTVIEW("Please Check Your Email For More Instructions");

                    HIDER(3000,()=>{

                        RELOAD();

                    });

                });
             
            },()=>{

                TOASTVIEW("Account Not Found!!!");

            });

        });

    });

};