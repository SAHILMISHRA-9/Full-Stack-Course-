import { database as db,serviceDB as serv } from "./data";
import getMatchingTripsArr from "./serachFunction.js";

console.log(filterFunction(getMatchingTripsArr(db,address)))