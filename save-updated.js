import {writeFileSync} from "node:fs"; 
import { loadData } from "./load.js";
import { addSeason } from "./series-service.js";


const data = loadData();
const season = { number:1, episodes: [
    {
    id: 801,
    title: "First Contact",
    rating:8.0,
    duration: 44}
]
};

const updatedSeries = addSeason(data.series, 5, season);
const updatedData = {
    ...data, series:updatedSeries
};

writeFileSync(
    "series-updated.json",
    JSON.stringify(updatedData, null, 2)
);

