const initialState = {
  filterTickets: [],
};

export default function(state = initialState, action) {
  switch(action.type) {
    case 'FIND_TICKETS': {
      console.log('action ', action);
      console.log(action.newIsActiveCurrency)
      let newTickets = [];
        action.tickets.filter((item) => {
          action.newIdX.map((id) => {
            if( id === item.stops ) {
              newTickets = [...newTickets,item];

            }
            else if(id === 'all') {
              newTickets = action.tickets;
            }
          })
        });
      return {
        ...state,
        filterTickets: newTickets
      }
    }
    default:
      return state;
  }
}