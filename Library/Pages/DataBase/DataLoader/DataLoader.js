import { APPSTART } from "../../../../Connection/AutoRun.js";
import { START } from "../../../../Connection/Start.js";
import { COLORSCONNECTION } from "../../../Colors/Connection/Connection.js";
import { COMPONENTSCONNECTION } from "../../../Components/Connection/Connection.js";
import { CONSTANTSCONNECTION } from "../../../Constants/Connections/Connections.js";
import { CONFIGENVIRONMENT } from "../../../Environment/Connection/Connection.js";
import { FUNCTIONSCONNECTION } from "../../../Functions/Connection/Connection.js";
import { SERVERCONNECTION } from "../../../Server/Connection/Connection.js";
import { STYLESCONNECTIONS } from "../../../Styles/Connection/Connection.js";
import { PAGESCONNECTION } from "../../Connection/Connnection.js";
import { DISPLAYLOADER } from "../DisplayLoader/DisplayLoader.js";

export const DATALOADER=()=>{

    if (localStorage.getItem("Packaged")) {

        FUNCTIONSCONNECTION();

        CONSTANTSCONNECTION();

        STYLESCONNECTIONS(); 

        COMPONENTSCONNECTION();

        CONFIGENVIRONMENT();

        PAGESCONNECTION();

        APPSTART();

        START();

        COLORSCONNECTION();

        SERVERCONNECTION();
        
    } else {

        if (localStorage.getItem("COLORS")) {
            
            if (localStorage.getItem("FUNCTIONS")) {
    
                FUNCTIONSCONNECTION();
    
                if (localStorage.getItem("COMPONENTS")) {
    
                    COMPONENTSCONNECTION();
    
                    if (localStorage.getItem("CONSTANTS")) {
    
                        CONSTANTSCONNECTION();
    
                        if (localStorage.getItem("STYLES")) {
    
                            STYLESCONNECTIONS();
    
                            if (localStorage.getItem("PAGES")) {
    
                                PAGESCONNECTION();
    
                                if (localStorage.getItem("RUN")) {
    
                                    APPSTART();
    
                                    if (localStorage.getItem("ERANDCONFIG")) {
    
                                        START();

                                        if (localStorage.getItem("SERVER")) {
    
                                            SERVERCONNECTION();
                                            
                                            if (localStorage.getItem("PROJECT")) {
        
                                                CONFIGENVIRONMENT();
                                                
                                            } else {
        
                                                DISPLAYLOADER("90%");
        
                                                CONFIGENVIRONMENT();
                                                                   
                                            };

                                        } else {
    
                                            DISPLAYLOADER("85%");
    
                                            SERVERCONNECTION();

                                            RERUN();
                                                               
                                        };
    
                                    } else {
    
                                        DISPLAYLOADER("80%");
    
                                        START();
    
                                        RERUN();
                                                
                                    };
                                    
                                } else {
    
                                    DISPLAYLOADER("70%");
    
                                    APPSTART();
    
                                    RERUN();
                                            
                                };
                            
                            } else {
    
                                DISPLAYLOADER("60%");
    
                                PAGESCONNECTION();
    
                                RERUN();
                                    
                            };
                        
                        } else {
    
                            DISPLAYLOADER("50%");
    
                            STYLESCONNECTIONS();
    
                            RERUN();
                                
                        };
                        
                    } else {
    
                        DISPLAYLOADER("40%");
    
                        CONSTANTSCONNECTION();
    
                        RERUN();
                        
                    };
                    
                } else {
    
                    DISPLAYLOADER("30%");
    
                    COMPONENTSCONNECTION();
    
                    RERUN();
                    
                };
    
            }else{
    
                DISPLAYLOADER("20%");
    
                FUNCTIONSCONNECTION();
    
                RERUN();
    
            };

        } else {

            DISPLAYLOADER("10%");
            
            COLORSCONNECTION();

            RERUN();

        };

    };

};

const RERUN=()=>{

    if (localStorage.getItem("Env") ==="Dev") {

        import("../../../../Connection/Connection.js").then(o=>typeof o.CONNECTIONS=="function"&&o.CONNECTIONS()).catch(console.error);

    } else {

        import("https://erandroid9.github.io/Eliton/Connection/Connection.js").then(o=>typeof o.CONNECTIONS=="function"&&o.CONNECTIONS()).catch(console.error);
        
    };

};