import {applyMiddleware, combineReducers, createStore,compose} from "redux"
import {thunk} from "redux-thunk";
import {reducer as layoutReducer} from "./layoutReducer/reducer";
const rootReducer = combineReducers({
  layoutReducer
 
  }); 
  
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;




  export const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

