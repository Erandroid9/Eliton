import { CREATEACCOUNTSERVER } from "../DataBase/CreateAccountServer/CreateAccountServer.js";
import { EMAILSERVER } from "../DataBase/EmailServer/EmailServer.js";
import { FORGOTPASSWORDSERVER } from "../DataBase/ForgotPasswordServer/ForgotPasswordServer.js";
import { LOGINSERVER } from "../DataBase/LoginServer/LoginServer.js";
import { OFFLINESERVER } from "../DataBase/OffLineServer/OffLineServer.js";
import { ERANDIXNEWPROJECT } from "../DataBase/ProjectServers/ErandixManager/CreateNewProject/ErandixNewProject.js";

export const SERVERCONNECTION=()=>{
const DATA=`const CREATEACCOUNTSERVER=${CREATEACCOUNTSERVER};
const FORGOTPASSWORDSERVER=${FORGOTPASSWORDSERVER};
const LOGINSERVER=${LOGINSERVER};
const OFFLINESERVER=${OFFLINESERVER};
const EMAILSERVER=${EMAILSERVER};
const ERANDIXNEWPROJECT=${ERANDIXNEWPROJECT};
`;
    
localStorage.setItem("SERVER",DATA);

};

`
const CREATEACCOUNTSERVER=${CREATEACCOUNTSERVER};
`