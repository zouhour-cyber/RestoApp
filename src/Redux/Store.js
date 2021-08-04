
import { createStore, applyMiddleware,compose } from "redux";
import { rootReducer } from "./Reducers/RootReducer";
import thunk from "redux-thunk";



const middleWare = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWare))
);


export default store;