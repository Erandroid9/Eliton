import { GETDATALINK } from "../Library/Constants/DataBase/GetDataLink/GetDataLink.js";
import { CHECKER } from "../Library/Functions/DataBase/Checker/Checker.js";
import { CONDITION } from "../Library/Functions/DataBase/Condition/Condition.js";
import { REDUX } from "../Library/Functions/DataBase/Redux/Redux.js";
import { ANDROIDENV } from "./AndroidEnv.js";
import { DESKTOPENV } from "./DesktopEnv.js";
import { WEBENV } from "./WebEnv.js";

export const SUBPRODUCTIONENV=()=>{

    const DATA={
        "spreadsheetUrl":"https://docs.google.com/spreadsheets/d/1V_m4KRo--FQkD0fNKfRZ1EWDRCSqTvwGkM7lEFGWldA/edit?usp=sharing",
        "sheetName":"MiniPages"    
    };
                      
    fetch(GETDATALINK,{
        method:"POST",
        mode:"cors",
        body:JSON.stringify(DATA)
    })
                
    .then(res => res.json())
                
    .then(data =>{

        REDUX(data,(UserData)=>{

            CHECKER(UserData.ID === localStorage.getItem("NAME"),()=>{

                CHECKER(UserData.Name === localStorage.getItem("Named"),()=>{

                    CONDITION(localStorage.getItem("Environment") === "Production",()=>{
                            
                        ANDROIDENV(UserData.AndroidProjectLink);
                            
                    },()=>{
                            
                        CONDITION(localStorage.getItem("Environment") === "Web",()=>{
                            
                            WEBENV(UserData.WebProjectLink);
        
                            },()=>{
                            
                            DESKTOPENV(UserData.DesktopProjectLink);
        
                        });
                            
                    });

                });
                
            });

        });
                          
    })
                    
    .catch(Error => {
                
        console.log(Error);
                
    });

};