import { START } from "../../../../Connection/Start.js";

export const DEVELOPMENTENVIRONMENT=()=>{

   

    fetch("../../../Development/Development.js")

    .then(res =>res.text())

    .then(data =>{

        localStorage.setItem("PROJECT",data);

        START();

    })

    .catch(error=>{console.log(error)})

};