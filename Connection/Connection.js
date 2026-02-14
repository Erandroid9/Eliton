import { ASSETSCONNECTION } from "../Library/Assets/Connection/Connection.js";
import { DATALOADER } from "../Library/Pages/DataBase/DataLoader/DataLoader.js";
import { DISPLAYLOADER } from "../Library/Pages/DataBase/DisplayLoader/DisplayLoader.js";
import { DOCTORMJOMBALICONNECTION } from "../Library/Pages/DataBase/SubProjectLoaders/Mjombaali/Connection.js";

export const CONNECTIONS=()=>{

    ASSETSCONNECTION();

    DATALOADER();

    const Def=localStorage.getItem("Config");

    switch (Def) {

        case "588b80c4-d0fc-4022-9cbf-19a4c9b7c13e":DOCTORMJOMBALICONNECTION();
            
            break;
    
        default:DISPLAYLOADER("75%");

            break;
    };

};