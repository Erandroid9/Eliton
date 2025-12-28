import { GETCOUNTRIESAPI } from "../DataBase/Countries/Countries.js";
import { GETMOVIESAPI } from "../DataBase/Movies/Movies.js";
import { GETMUSICAPI } from "../DataBase/Music/GetMusic.js";

export const APICONNECTION=()=>{
const DATA=`const GETMUSICAPI=${GETMUSICAPI};
const GETMOVIESAPI=${GETMOVIESAPI};
const GETCOUNTRIESAPI=${GETCOUNTRIESAPI};
`;
localStorage.setItem("APIS",DATA);
};
`
const GETCOUNTRIESAPI=${GETCOUNTRIESAPI};
`