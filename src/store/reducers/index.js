import { combineReducers } from "redux";
import tickets from "./tickets";
import filterTickets from "./filterTickets"
import currency from "./currency";
import filterCurrency from "./filterCurrency"


export default combineReducers({ tickets, filterTickets, currency, filterCurrency
});