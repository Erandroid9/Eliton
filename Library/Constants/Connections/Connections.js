import { BODY } from "../DataBase/Body/Body.js";
import { CONNECTIONLINK } from "../DataBase/ConnectionLink/ConnectionLink.js";

export const CONSTANTSCONNECTION=()=>{

const DATA=`const BODY=${BODY};
const CONNECTIONLINK="${CONNECTIONLINK}";
`;

localStorage.setItem("CONSTANTS",DATA);

};

`
const CONNECTIONLINK="${CONNECTIONLINK}";
`