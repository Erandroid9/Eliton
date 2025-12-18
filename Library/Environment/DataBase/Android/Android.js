import { CHECKER } from "../../../Functions/DataBase/Checker/Checker.js";
import { DATASTORE } from "../../../Functions/DataBase/DataStore/DataStore.js";
import { RELOAD } from "../../../Functions/DataBase/Reload/Reload.js";
import { DISPLAYLOADER } from "../../../Pages/DataBase/DisplayLoader/DisplayLoader.js";

export const ANDROIDENVIRONMENT=()=>{

       DISPLAYLOADER("75%");

    const MAIN="https://docs.google.com/spreadsheets/d/1V_m4KRo--FQkD0fNKfRZ1EWDRCSqTvwGkM7lEFGWldA/edit?usp=sharing";

    const CLOUD="https://erandroid9.github.io/Eliton/";

    fetch("https://script.google.com/macros/s/AKfycbxi4dQQfm5u5Pd4Id3JCpmBbRhXv_y4XZZnwET4MHYoWfqKaXhqMXtc2T1gklUuocVy3A/exec",{
        method:"POST",
        mode:"cors",
        body:JSON.stringify({
            "sheetName":"Production",
            "spreadsheetUrl":MAIN
        })
    })
    .then(res =>res.json())
    .then(data=>{

        DISPLAYLOADER("85%");

        FINDER(data,"ID",localStorage.getItem("Config"),(UserData)=>{

            CHECKER(UserData !== false,()=>{

                DISPLAYLOADER("95%");
                
                fetch(CLOUD+UserData.Android)
                
                .then(res =>res.text())
                
                .then(data =>{
                
                    DISPLAYLOADER("100%");
                
                    localStorage.setItem("PROJECT",data);

                    CHECKER(!localStorage.getItem("Packaged"),()=>{

                        localStorage.setItem("Packaged",new Date())

                        location.reload();
                
                    });
                    
                })
                
                .catch(error=>{console.log(error)})

            });

        });

    })
    .catch(error =>{

        console.log(error);

    });

};