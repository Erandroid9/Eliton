import { ADD } from "../DataBase/Add/Add.js";
import { AUTORUN } from "../DataBase/AutoRun/AutoRun.js";
import { BODIED } from "../DataBase/Body/Body.js";
import { CHECKER } from "../DataBase/Checker/Checker.js";
import { CONDITION } from "../DataBase/Condition/Condition.js";
import { DISPLAY } from "../DataBase/Display/Display.js";
import { STYLED } from "../DataBase/Styled/Styled.js";

export const FUNCTIONSCONNECTION=()=>{

const DATA=`const ADD=${ADD};
const AUTORUN=${AUTORUN};
const CONDITION=${CONDITION};
const DISPLAY=${DISPLAY};
const CHECKER=${CHECKER};
const BODIED=${BODIED};
const STYLED=${STYLED};
`;

localStorage.setItem("FUNCTIONS",DATA);

};

`
const STYLED=${STYLED};
`