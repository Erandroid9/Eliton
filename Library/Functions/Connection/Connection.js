import { ADD } from "../DataBase/Add/Add.js";
import { AUTORUN } from "../DataBase/AutoRun/AutoRun.js";
import { BODIED } from "../DataBase/Body/Body.js";
import { CHECKER } from "../DataBase/Checker/Checker.js";
import { CONDITION } from "../DataBase/Condition/Condition.js";
import { DISPLAY } from "../DataBase/Displayed/Display.js";
import { ELEMENTED } from "../DataBase/Elemented/ELemented.js";
import { ROUTE } from "../DataBase/Route/Route.js";
import { STYLED } from "../DataBase/Styled/Styled.js";

export const FUNCTIONSCONNECTION=()=>{

const DATA=`const ADD=${ADD};
const AUTORUN=${AUTORUN};
const CONDITION=${CONDITION};
const DISPLAY=${DISPLAY};
const CHECKER=${CHECKER};
const BODIED=${BODIED};
const STYLED=${STYLED};
const ELEMENTED=${ELEMENTED};
const ROUTE=${ROUTE};
`;

localStorage.setItem("FUNCTIONS",DATA);

};

`
const ROUTE=${ROUTE};
`