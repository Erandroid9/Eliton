import { CENTREDIVVIEW } from "../DataBase/Components/CentreDivView/CentreDivView.js";
import { DIVVIEW } from "../DataBase/Components/DivView/DivView.js";
import { FOOTERVIEW } from "../DataBase/Components/FooterView/FooterView.js";
import { HEADERFOOTERVIEW } from "../DataBase/Components/HeaderFooterView/HeaderFooterView.js";
import { HEADERVIEW } from "../DataBase/Components/HeaderView/HeaderView.js";
import { ICONVIEW } from "../DataBase/Components/IconView/IconView.js";
import { INLINEVIEW } from "../DataBase/Components/InlineView/InlineView.js";
import { LEFTDIVVIEW } from "../DataBase/Components/LeftDivView/LeftDivView.js";
import { LEFTICONVIEW } from "../DataBase/Components/LeftIconView/LeftIconView.js";
import { LEFTTEXTVIEW } from "../DataBase/Components/LeftTextView/LeftTextView.js";
import { RIGHTDIVVIEW } from "../DataBase/Components/RightDivView/RightDivView.js";
import { RIGHTICONVIEW } from "../DataBase/Components/RightIconView/RightIconView.js";
import { RIGHTTEXTVIEW } from "../DataBase/Components/RightTextView/RighttextView.js";
import { ROUNDINPUTVIEW } from "../DataBase/Components/RoundInputView/RoundInputView.js";
import { TABLEVIEW } from "../DataBase/Components/TableView/TableView.js";
import { TEXTVIEW } from "../DataBase/Components/TextView/TextView.js";
import { TOASTVIEW } from "../DataBase/Components/ToastView/ToastView.js";
import { QELDATABASELINK } from "../DataBase/Constants/QelDataBaseLink/QelDataBaseLink.js";
import { ACCOUNTEMAILCHECKER } from "../DataBase/Functions/AccountChecker/AccountChecker.js";
import { BASE64CONVERTOR } from "../DataBase/Functions/Base64Convertor/Base64Convertor.js";
import { DOWNLOADSAVEINDEX } from "../DataBase/Functions/DownloadSaveIndex/DownloadSaveIndex.js";
import { GETSAVEDINDEX } from "../DataBase/Functions/GetSavedIndex/GetSavedIndex.js";
import { LOGINCHECKER } from "../DataBase/Functions/LoginChecker/LoginChecker.js";
import { OFFLINECHECKER } from "../DataBase/Functions/OffLineChecker/OfflineChecker.js";
import { QELPAY } from "../DataBase/Functions/QelPay/QelPay.js";
import { VISITORS } from "../DataBase/Functions/Visitors/Visitors.js";
import { CREATEACCOUNTVIEW } from "../DataBase/Views/CreateAccountView/CreateAccountView.js";
import { EMAILVERIFICATIONVIEW } from "../DataBase/Views/EmailVerificationView/EmailVerificationView.js";
import { FORGOTPASSWORDVIEW } from "../DataBase/Views/ForgotPasswordView/ForgotPasswordView.js";
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
const BASE64CONVERTOR=${BASE64CONVERTOR};
const INLINEVIEW=${INLINEVIEW};
const QELPAY=${QELPAY};
const QELDATABASELINK="${QELDATABASELINK}";
const GETSAVEDINDEX=${GETSAVEDINDEX};
const LOGINCHECKER=${LOGINCHECKER};
const TEXTVIEW=${TEXTVIEW};
const VISITORS=${VISITORS};
const ACCOUNTEMAILCHECKER=${ACCOUNTEMAILCHECKER};
const CREATEACCOUNTVIEW=${CREATEACCOUNTVIEW};
const EMAILVERIFICATIONVIEW=${EMAILVERIFICATIONVIEW};
const FORGOTPASSWORDVIEW=${FORGOTPASSWORDVIEW};
`;
    
localStorage.setItem("TEMPLATES",DATA);

};

`
const FORGOTPASSWORDVIEW=${FORGOTPASSWORDVIEW};
`