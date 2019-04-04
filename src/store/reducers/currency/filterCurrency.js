const initialState = {
  filterCurrency: [],
};

export default function(state = initialState, action) {
  switch(action.type) {
    case 'FIND_CURRENCY': {
      console.log('action',action)
      return {
        ...state,
      }
    }
    default:
      return state;
  }
}