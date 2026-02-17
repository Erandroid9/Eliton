export const APPSTART=()=>{

const DATA=`AUTORUN();
BODIED();
WEBKIT();
ZOOM();
VISITORS();
APPMODE();
TIMEZONE();
DOMAINNAMECHANGE();
`;
    
localStorage.setItem("RUN",DATA);

};