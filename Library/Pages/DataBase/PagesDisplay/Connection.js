import { DEVSTAGE } from "./Dev/StageFour/Loader.js";

export const SPLASHSCREENCONFIG=(AMOUNT,DisplayImage)=>{

    if(localStorage.getItem("Config") === "Dev"){

        DEVSTAGE(AMOUNT,DisplayImage);

    }else{


    };

};