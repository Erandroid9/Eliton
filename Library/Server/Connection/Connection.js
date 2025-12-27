import { CREATEACCOUNTSERVER } from "../DataBase/CreateAccountServer/CreateAccountServer.js";
import { EMAILSERVER } from "../DataBase/EmailServer/EmailServer.js";
import { FORGOTPASSWORDSERVER } from "../DataBase/ForgotPasswordServer/ForgotPasswordServer.js";
import { LOGINSERVER } from "../DataBase/LoginServer/LoginServer.js";
import { OFFLINESERVER } from "../DataBase/OffLineServer/OffLineServer.js";

export const SERVERCONNECTION=()=>{
const DATA=`const CREATEACCOUNTSERVER=${CREATEACCOUNTSERVER};
const FORGOTPASSWORDSERVER=${FORGOTPASSWORDSERVER};
const LOGINSERVER=${LOGINSERVER};
const OFFLINESERVER=${OFFLINESERVER};
const EMAILSERVER=${EMAILSERVER};
`;
    
localStorage.setItem("SERVER",DATA);

};

`
const EMAILSERVER=${EMAILSERVER};
`