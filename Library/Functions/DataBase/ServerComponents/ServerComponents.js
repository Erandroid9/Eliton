export const SERVERCOMPONENTS=(PATH,CALLBACK)=>{

    CONDITION(localStorage.getItem("Env") === "Dev",()=>{

        CALLBACK("../Library/Assets/DataBase/Raw/"+PATH);

    },()=>{

        CALLBACK("https://erandroid9.github.io/Eliton/Library/Assets/DataBase/Raw/"+PATH);

    });

};