export const START=()=>{

const DATA=`ROUTEJS(localStorage.getItem("FUNCTIONS"));
ROUTEJS(localStorage.getItem("COMPONENTS"));
ROUTEJS(localStorage.getItem("CONSTANTS"));
ROUTEJS(localStorage.getItem("RUN"));
ROUTEJS(localStorage.getItem("PROJECT"));
ROUTEJS(localStorage.getItem("STYLES"));
ROUTEJS(localStorage.getItem("PAGES"));
`;
    
localStorage.setItem("ERANDCONFIG",DATA);

};

