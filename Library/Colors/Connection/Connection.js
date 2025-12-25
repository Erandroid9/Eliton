import { BLACK } from "../DataBase/Black/Black.js";
import { BLUE } from "../DataBase/Blue/Blue.js";
import { BROWN } from "../DataBase/Brown/Brown.js";
import { FORESTGREEN } from "../DataBase/ForestGreen/ForestGreen.js";
import { GREEN } from "../DataBase/Green/Green.js";
import { ORANGE } from "../DataBase/Orange/Oranage.js";
import { PINK } from "../DataBase/Pink/Pink.js";
import { PURPLE } from "../DataBase/Purple/Purple.js";
import { RED } from "../DataBase/Red/Red.js";
import { TEAL } from "../DataBase/Teal/Teal.js";
import { TRANSPARENT } from "../DataBase/Transparent/Transparent.js";
import { WHITE } from "../DataBase/White/White.js";

export const COLORSCONNECTION=()=>{
const DATA=`const BLACK="${BLACK}";
const WHITE="${WHITE}";
const RED="${RED}";
const TRANSPARENT="${TRANSPARENT}";
const ORANGE="${ORANGE}";
const PINK="${PINK}";
const PURPLE="${PURPLE}";
const FORESTGREEN="${FORESTGREEN}";
const BLUE="${BLUE}";
const GREEN="${GREEN}";
const BROWN="${BROWN}";
const TEAL="${TEAL}";
`;
localStorage.setItem("COLORS",DATA);
};


`
const TEAL="${TEAL}";
`