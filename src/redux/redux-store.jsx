import {applyMiddleware, combineReducers, createStore} from "redux";
import appReducer from "./appReducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
   app: appReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.__store__ = store

export default store