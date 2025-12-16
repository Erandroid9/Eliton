import { ANDROIDENVIRONMENT } from "../DataBase/Android/Android.js";
import { DESKTOPENVIRONMENT } from "../DataBase/Desktop/Desktop.js";
import { DEVELOPMENTENVIRONMENT } from "../DataBase/Development/Development.js";
import { WEBENVIRONMENT } from "../DataBase/Web/Web.js";

export const CONFIGENVIRONMENT=()=>{

    if (localStorage.getItem("Env") === "Dev" ) {
        
        DEVELOPMENTENVIRONMENT();

    } else {

        if (localStorage.getItem("Env") === "Android") {

            ANDROIDENVIRONMENT();
            
        } else {

            if (localStorage.getItem("Desktop") === "Android") {

                DESKTOPENVIRONMENT();
                
            } else {

                WEBENVIRONMENT();
                
            };
            
        };

    };

};