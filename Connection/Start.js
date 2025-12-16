import { APPSTART } from "./AutoRun.js";

export const START=()=>{

APPSTART();

const DATA=`ROUTEJS(localStorage.getItem("FUNCTIONS"));
ROUTEJS(localStorage.getItem("CONSTANTS"));
ROUTEJS(localStorage.getItem("RUN"));
ROUTEJS(localStorage.getItem("PROJECT"));
`;
    
localStorage.setItem("ERANDCONFIG",DATA);

if (!localStorage.getItem("Packaged")) {

    localStorage.setItem("Packaged",new Date())

    location.reload();

    return;

} ;

};

