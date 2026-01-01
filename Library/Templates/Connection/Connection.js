import { CENTREDIVVIEW } from "../DataBase/Components/CentreDivView/CentreDivView.js";
import { DIVVIEW } from "../DataBase/Components/DivView/DivView.js";
import { FOOTERVIEW } from "../DataBase/Components/FooterView/FooterView.js";
import { HEADERFOOTERVIEW } from "../DataBase/Components/HeaderFooterView/HeaderFooterView.js";
import { HEADERVIEW } from "../DataBase/Components/HeaderView/HeaderView.js";
import { ICONVIEW } from "../DataBase/Components/IconView/IconView.js";
import { LEFTDIVVIEW } from "../DataBase/Components/LeftDivView/LeftDivView.js";
import { LEFTICONVIEW } from "../DataBase/Components/LeftIconView/LeftIconView.js";
import { LEFTTEXTVIEW } from "../DataBase/Components/LeftTextView/LeftTextView.js";
import { RIGHTDIVVIEW } from "../DataBase/Components/RightDivView/RightDivView.js";
import { RIGHTICONVIEW } from "../DataBase/Components/RightIconView/RightIconView.js";
import { RIGHTTEXTVIEW } from "../DataBase/Components/RightTextView/RighttextView.js";
import { ROUNDINPUTVIEW } from "../DataBase/Components/RoundInputView/RoundInputView.js";
import { TABLEVIEW } from "../DataBase/Components/TableView/TableView.js";
import { TOASTVIEW } from "../DataBase/Components/ToastView/ToastView.js";
import { DOWNLOADSAVEINDEX } from "../DataBase/Functions/DownloadSaveIndex/DownloadSaveIndex.js";
import { OFFLINECHECKER } from "../DataBase/Functions/OffLineChecker/OfflineChecker.js";
import { LOGINVIEW } from "../DataBase/Views/LoginView/LoginView.js";

export const TEMPLATESCONNECTION=()=>{
const DATA=`const HEADERVIEW=${HEADERVIEW};
const LEFTTEXTVIEW=${LEFTTEXTVIEW};
const RIGHTTEXTVIEW=${RIGHTTEXTVIEW};
const FOOTERVIEW=${FOOTERVIEW};
const ICONVIEW=${ICONVIEW};
const LEFTICONVIEW=${LEFTICONVIEW};
const RIGHTICONVIEW=${RIGHTICONVIEW};
const DIVVIEW=${DIVVIEW};
const LOGINVIEW=${LOGINVIEW};
const DOWNLOADSAVEINDEX=${DOWNLOADSAVEINDEX};
const OFFLINECHECKER=${OFFLINECHECKER};
const TOASTVIEW=${TOASTVIEW};
const TABLEVIEW=${TABLEVIEW};
const HEADERFOOTERVIEW=${HEADERFOOTERVIEW};
const ROUNDINPUTVIEW=${ROUNDINPUTVIEW};
const LEFTDIVVIEW=${LEFTDIVVIEW};
const RIGHTDIVVIEW=${RIGHTDIVVIEW};
const CENTREDIVVIEW=${CENTREDIVVIEW};
`;
    
localStorage.setItem("TEMPLATES",DATA);

};

`
const CENTREDIVVIEW=${CENTREDIVVIEW};
`