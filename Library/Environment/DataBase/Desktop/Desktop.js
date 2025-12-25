import { DISPLAYLOADER } from "../../../Pages/DataBase/DisplayLoader/DisplayLoader.js";

export const DESKTOPENVIRONMENT=()=>{
    
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

        const user = data.find((item) => item.ID === localStorage.getItem("Config"));

        if (user) {

            DISPLAYLOADER("95%");
                            
            fetch(CLOUD+user.Desktop)
                            
            .then(res =>res.text())
                            
            .then(data =>{
                            
                DISPLAYLOADER("100%");
                            
                localStorage.setItem("PROJECT",data);

                if (!localStorage.getItem("Packaged")) {

                    localStorage.setItem("Packaged",new Date())
            
                    location.reload();

                    return;
                    
                };
            
            })
                            
            .catch(error=>{console.log(error)})

            return;
  
        };
        
    })
    .catch(error =>{

        console.log(error);

    });

};