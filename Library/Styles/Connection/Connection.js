import { POSITIONFIXED } from "../DataBase/PositionFixed/PositionFixed.js";
import { RADIUS } from "../DataBase/Radius/Radius.js";

export const STYLESCONNECTIONS=()=>{
const DATA=`const POSITIONFIXED=${POSITIONFIXED};
const RADIUS=${RADIUS};
`;

localStorage.setItem("STYLES",DATA);

};

`
const RADIUS=${RADIUS};
`