import { combineReducers } from "redux";
import tickets from "./tickets/tickets";
import filterTickets from "./tickets/filterTickets"

export default combineReducers({
  tickets,
  filterTickets
});