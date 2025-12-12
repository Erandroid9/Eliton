import { NOSERVICE } from "../Library/Pages/NoService.js";

export const CLOUDCONNECTION=()=>{

    const ELITONCONFIG=(t,e)=>{fetch(t).then((t=>t.text())).then((t=>{localStorage.setItem(e,t)})).catch((t=>console.log(t)))};

    if (localStorage.getItem("Env") === "Dev" ) {

        ELITONCONFIG("../Projects/Projects.css","ERANDCPRO");
        ELITONCONFIG("../Projects/Projects.js","ERANDPRO");

        if (!localStorage.getItem("Packaged")) {

            localStorage.setItem("Packaged","Verified");

            setTimeout((()=>{location.reload()}),500);

            return;
            
        };

    } else {

        const BUILDPATH="https://erandroid9.github.io/Eliton/Build/";fetch("https://erandroid9.github.io/Eliton/Library/DataBase/Config.json").then((e=>e.json())).then((e=>{e.forEach((e=>{if(e.ID===localStorage.getItem("Config")){if(ELITONCONFIG(BUILDPATH+e.WebSiteCSS,"ERANDCPRO"),ELITONCONFIG(BUILDPATH+e.WebSiteJS,"ERANDPRO"),!localStorage.getItem("Packaged"))return localStorage.setItem("Packaged","Verified"),void setTimeout((()=>{location.reload()}),500)}else NOSERVICE()}))})).catch((e=>{console.log()}));
        
    };
   
};