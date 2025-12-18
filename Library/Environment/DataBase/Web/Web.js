import { DISPLAYLOADER } from "../../../Pages/DataBase/DisplayLoader/DisplayLoader.js";

export const WEBENVIRONMENT=()=>{

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

        const user = data.find(u => u.ID === localStorage.getItem("Config"));

        console.log(user)

    })
    .catch(error =>{
        console.log(error)
    });

};