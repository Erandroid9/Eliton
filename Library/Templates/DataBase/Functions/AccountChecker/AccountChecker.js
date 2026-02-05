export const ACCOUNTEMAILCHECKER=(ELEMENTS,WORD,CALLBACK,LINK)=>{

    CONDITION(localStorage.getItem("UserCode"),()=>{

        EMAILVERIFICATIONVIEW(NAME);

    },()=>{

        CONDITION(localStorage.getItem("User"),()=>{

            CALLBACK();

        },()=>{

            LOGINVIEW(ELEMENTS,WORD,LINK,CALLBACK);

        });

    });

};