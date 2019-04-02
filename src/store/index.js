import rootReducer from "./reducers";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

export default createStore(rootReducer, composeEnhancers(
  applyMiddleware()
));