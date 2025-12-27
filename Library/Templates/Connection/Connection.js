import { HEADERVIEW } from "../DataBase/Components/HeaderView/HeaderView.js";
import { LEFTTEXTVIEW } from "../DataBase/Components/LeftTextView/LeftTextView.js";
import { RIGHTTEXTVIEW } from "../DataBase/Components/RightTextView/RighttextView.js";

export const TEMPLATESCONNECTION=()=>{
const DATA=`const HEADERVIEW=${HEADERVIEW};
const LEFTTEXTVIEW=${LEFTTEXTVIEW};
const RIGHTTEXTVIEW=${RIGHTTEXTVIEW};
`;
    
localStorage.setItem("TEMPLATES",DATA);

};

`
const RIGHTTEXTVIEW=${RIGHTTEXTVIEW};
`