import { ADD } from "../DataBase/Add/Add.js";
import { AUTORUN } from "../DataBase/AutoRun/AutoRun.js";
import { BODIED } from "../DataBase/Body/Body.js";
import { CHECKER } from "../DataBase/Checker/Checker.js";
import { CLEAR } from "../DataBase/Clear/Clear.js";
import { CLICK } from "../DataBase/Click/Click.js";
import { CONDITION } from "../DataBase/Condition/Condition.js";
import { CREATEDATABASE } from "../DataBase/CreateDataBase/CreateDatabase.js";
import { CREATETABLE } from "../DataBase/CreateTable/CreateTable.js";
import { DISPLAY } from "../DataBase/Displayed/Display.js";
import { ELEMENTED } from "../DataBase/Elemented/ELemented.js";
import { FINDER } from "../DataBase/Finder/Finder.js";
import { FUNCTIONED } from "../DataBase/Functioned/Functioned.js";
import { GETDATA } from "../DataBase/GetData/GetData.js";
import { INSERTDATA } from "../DataBase/InsertData/InsertData.js";
import { DATASTORE } from "../DataBase/DataStore/DataStore.js";
import { RELOAD } from "../DataBase/Reload/Reload.js";
import { ROUTE } from "../DataBase/Route/Route.js";
import { STYLED } from "../DataBase/Styled/Styled.js";
import { SWITCHER } from "../DataBase/Switcher/Switcher.js";
import { UPDATEDATA } from "../DataBase/UpdateData/UpdateData.js";
import { SCREENWIDTH } from "../DataBase/ScreenWidth/ScreenWidth.js";
import { CLOUDPOST } from "../DataBase/CloudPost/CloudPost.js";

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
const CREATEDATABASE=${CREATEDATABASE};
const CREATETABLE=${CREATETABLE};
const INSERTDATA=${INSERTDATA};
const UPDATEDATA=${UPDATEDATA};
const GETDATA=${GETDATA};
const FINDER=${FINDER};
const CLICK=${CLICK};
const CLEAR=${CLEAR};
const SWITCHER=${SWITCHER};
const DATASTORE=${DATASTORE};
const RELOAD=${RELOAD};
const FUNCTIONED=${FUNCTIONED};
const SCREENWIDTH=${SCREENWIDTH};
const CLOUDPOST=${CLOUDPOST};
`;

localStorage.setItem("FUNCTIONS",DATA);

};

`
const CLOUDPOST=${CLOUDPOST};
`