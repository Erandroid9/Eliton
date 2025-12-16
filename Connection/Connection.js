import { CONSTANTSCONNECTION } from "../Library/Constants/Connections/Connections.js";
import { CONFIGENVIRONMENT } from "../Library/Environment/Connection/Connection.js";
import { FUNCTIONSCONNECTION } from "../Library/Functions/Connection/Connection.js";

export const CONNECTIONS=()=>{

    CONSTANTSCONNECTION();

    FUNCTIONSCONNECTION();

   CONFIGENVIRONMENT();

};