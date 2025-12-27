import { FOOTERVIEW } from "../DataBase/Components/FooterView/FooterView.js";
import { HEADERVIEW } from "../DataBase/Components/HeaderView/HeaderView.js";
import { ICONVIEW } from "../DataBase/Components/IconView/IconView.js";
import { LEFTICONVIEW } from "../DataBase/Components/LeftIconView/LeftIconView.js";
import { LEFTTEXTVIEW } from "../DataBase/Components/LeftTextView/LeftTextView.js";
import { RIGHTICONVIEW } from "../DataBase/Components/RightIconView/RightIconView.js";
import { RIGHTTEXTVIEW } from "../DataBase/Components/RightTextView/RighttextView.js";

export const TEMPLATESCONNECTION=()=>{
const DATA=`const HEADERVIEW=${HEADERVIEW};
const LEFTTEXTVIEW=${LEFTTEXTVIEW};
const RIGHTTEXTVIEW=${RIGHTTEXTVIEW};
const FOOTERVIEW=${FOOTERVIEW};
const ICONVIEW=${ICONVIEW};
const LEFTICONVIEW=${LEFTICONVIEW};
const RIGHTICONVIEW=${RIGHTICONVIEW};
`;
    
localStorage.setItem("TEMPLATES",DATA);

};

`
const RIGHTICONVIEW=${RIGHTICONVIEW};
`