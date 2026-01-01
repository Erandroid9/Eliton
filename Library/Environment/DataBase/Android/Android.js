import { DISPLAYLOADER } from "../../../Pages/DataBase/DisplayLoader/DisplayLoader.js";

export const ANDROIDENVIRONMENT=()=>{

    DISPLAYLOADER("75%");

    const MAIN="https://docs.google.com/spreadsheets/d/1V_m4KRo--FQkD0fNKfRZ1EWDRCSqTvwGkM7lEFGWldA/edit?usp=sharing";

    const CLOUD="https://erandroid9.github.io/Eliton/";

    fetch("https://script.google.com/macros/s/AKfycbxgaFqwexOOBXA5tn1n2Mp0k9-KlwZ8ZP4QUvWM_CigDocfx-nVR0xz2RyuwDBYgwMp/exec",{
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
                            
            fetch(CLOUD+user.Android)
                            
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