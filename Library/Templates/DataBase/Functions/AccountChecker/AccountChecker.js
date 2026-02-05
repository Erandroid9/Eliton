export const ACCOUNTEMAILCHECKER=(CALLBACK,CALLBACKTWO,CALLBACKTHREE)=>{

    CONDITION(localStorage.getItem("UserCode"),()=>{

        CALLBACK();

    },()=>{

        CONDITION(localStorage.getItem("User"),()=>{

            CALLBACKTWO();

        },()=>{

            CALLBACKTHREE();

        });

    });

};