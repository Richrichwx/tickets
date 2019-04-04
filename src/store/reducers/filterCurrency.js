const initialState = {
  filterCurrency: [],
};

export default function(state = initialState, action) {
  switch(action.type) {
    case 'FIND_CURRENCY': {
      return {
        ...state,
      }
    }
    default:
      return state;
  }
}