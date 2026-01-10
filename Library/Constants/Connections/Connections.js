import { BODY } from "../DataBase/Body/Body.js";
import { COMPANYLINK } from "../DataBase/CompanyLink/CompanyLink.js";
import { COMPANYNAME } from "../DataBase/CompanyName/CompanyName.js";
import { CONNECTIONLINK } from "../DataBase/ConnectionLink/ConnectionLink.js";
import { CREATEDATABASELINK } from "../DataBase/CreateDataBaseLink/CreateDataBase.js";
import { CREATETABLELINK } from "../DataBase/CreateTableLink/CreateTableLink.js";
import { EMAILLINK } from "../DataBase/EmailLink/EmailLink.js";
import { ERANDIXAPILINK } from "../DataBase/ErandixApiLink/ErandixApiLink.js";
import { ERANDIXMANAGERLINK } from "../DataBase/ErandixManagerLink/ErandixManagerLink.js";
import { GETDATALINK } from "../DataBase/GetDataLink/GetDataLink.js";
import { INSERTDATALINK } from "../DataBase/InsertDataLink/InsertDataLink.js";
import { MUSICSERVERLINK } from "../DataBase/MusicServerLink/MusicServerLink.js";
import { UPDATEDATALINK } from "../DataBase/UpdateDataLink/UpdateDataLink.js";

export const CONSTANTSCONNECTION=()=>{

const DATA=`const BODY=${BODY};
const CONNECTIONLINK="${CONNECTIONLINK}";
const CREATEDATABASELINK="${CREATEDATABASELINK}";
const CREATETABLELINK="${CREATETABLELINK}";
const INSERTDATALINK="${INSERTDATALINK}";
const UPDATEDATALINK="${UPDATEDATALINK}";
const GETDATALINK="${GETDATALINK}";
const EMAILLINK="${EMAILLINK}";
const ERANDIXAPILINK="${ERANDIXAPILINK}";
const ERANDIXMANAGERLINK="${ERANDIXMANAGERLINK}";
const MUSICSERVERLINK="${MUSICSERVERLINK}";
const COMPANYNAME="${COMPANYNAME}";
const COMPANYLINK="${COMPANYLINK}";
`;

localStorage.setItem("CONSTANTS",DATA);

};

`
const COMPANYLINK="${COMPANYLINK}";
`