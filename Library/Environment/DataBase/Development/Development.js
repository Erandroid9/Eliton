import { START } from "../../../../Connection/Start.js";
import { DISPLAYLOADER } from "../../../Pages/DataBase/DisplayLoader/DisplayLoader.js";

export const DEVELOPMENTENVIRONMENT=()=>{

   DISPLAYLOADER("80%");

    fetch("../../../Development/Development.js")

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

};