import { DATALOADER } from "../Library/Pages/DataBase/DataLoader/DataLoader.js";
import { DISPLAYLOADER } from "../Library/Pages/DataBase/DisplayLoader/DisplayLoader.js";

export const CONNECTIONS=()=>{

    DISPLAYLOADER("10%");

    DATALOADER();

};