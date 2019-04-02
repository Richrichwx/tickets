import { combineReducers } from "redux";
import tickets from "./tickets";
import filterTickets from "./filterTickets"


export default combineReducers({ tickets, filterTickets,
});