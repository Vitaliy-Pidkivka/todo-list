import {applyMiddleware, combineReducers, createStore} from "redux";
import appReducer from "./appReducer";
import thunkMiddleware from 'redux-thunk';
import {stateSaver} from "../middleware/stateSaver";

let reducers = combineReducers({
   app: appReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware, stateSaver));
window.__store__ = store

export default store