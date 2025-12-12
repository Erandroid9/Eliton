import { LOADERPAGE } from "../Library/Pages/Loader.js";
import { CLOUDCONNECTION } from "./CloudConnection.js";

export const CONNECTIONS=()=>{

    const ELITONCONFIG=(t,e)=>{fetch(t).then((t=>t.text())).then((t=>{localStorage.setItem(e,t)})).catch((t=>console.log(t)))};

    ELITONCONFIG("../Library/Services/Eliton.css","ERANDIS");
    ELITONCONFIG("../Library/Services/ElitonTemp.css","ERANDISTEMP");
    ELITONCONFIG("../Library/Services/ElitonClasses.css","ERANDISCLASS");
    ELITONCONFIG("../Library/Services/ElitonElements.css","ERANDISELEMS");

    ELITONCONFIG("../Library/Services/Eliton.js","ERANDS");
    ELITONCONFIG("../Library/Services/ElitonIcons.js","ERANDIA");
    ELITONCONFIG("../Library/Services/ElitonPlugs.js","ERANDIN");
    ELITONCONFIG("../Library/Services/ElitonTemps.js","ERANDTEMP");

    ELITONCONFIG("../Library/Server/CloudSync.js","ERANDCONFIG");

    CLOUDCONNECTION();

    if (!localStorage.getItem("Packaged")) {

        LOADERPAGE();
        
    };

};