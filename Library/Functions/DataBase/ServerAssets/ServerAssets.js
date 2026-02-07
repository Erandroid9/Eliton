export const SERVERASSETS=(PATH,CALLBACK)=>{

    if(localStorage.getItem("Env") === "Dev"){

        CALLBACK("../Library/Assets/DataBase/Raw/"+PATH);

    }else{

        CALLBACK("https://erandroid9.github.io/Eliton/Library/Assets/DataBase/Raw/"+PATH);

    };

};