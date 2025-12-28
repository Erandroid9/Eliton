import { GETCOUNTRIESAPI } from "../DataBase/Countries/Countries.js";
import { GETMOVIESAPI } from "../DataBase/Movies/Movies.js";
import { GETMUSICAPI } from "../DataBase/Music/GetMusic.js";
import { GETUGANDANDISTRICTSAPI } from "../DataBase/UgandanDistricits/UgandanDistricits.js";

export const APICONNECTION=()=>{
const DATA=`const GETMUSICAPI=${GETMUSICAPI};
const GETMOVIESAPI=${GETMOVIESAPI};
const GETCOUNTRIESAPI=${GETCOUNTRIESAPI};
const GETUGANDANDISTRICTSAPI=${GETUGANDANDISTRICTSAPI};
`;
localStorage.setItem("APIS",DATA);
};
`
const GETUGANDANDISTRICTSAPI=${GETUGANDANDISTRICTSAPI};
`