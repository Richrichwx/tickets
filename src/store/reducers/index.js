import { combineReducers } from "redux";
import tickets from "./tickets/tickets";
import filterTickets from "./tickets/filterTickets"
import currency from "./currency/currency";
import filterCurrency from "./currency/filterCurrency"


export default combineReducers({ tickets, filterTickets, currency, filterCurrency
});