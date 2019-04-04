const initialState = {
  currency: [],
};

export default function(state = initialState, action) {
  switch(action.type) {
    case 'GET_CURRENCY': {
      return {
        ...state,
        currency: action.payload
      }
    }
    default:
      return state;
  }
}