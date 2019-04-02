const initialState = {
  filterTickets: [],
};

export default function(state = initialState, action) {
  switch(action.type) {
    case 'FIND_TICKETS': {
      console.log('action ', action);
      let newTickets = [];
      if(action.status){
        action.tickets.filter((item) => {
          action.newIdX.map((id) => {
            if( id === item.stops) {
              newTickets = [...newTickets,item];
            }
          })
        });
      } else {

      }

console.log(newTickets);
      return {
        ...state,
        filterTickets: newTickets
      }
    }
    default:
      return state;
  }
}