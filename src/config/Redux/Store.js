import { createStore, combineReducers, applyMiddleware } from "redux";
import reducerTampungan from "./reducer/TampunganReducer";
import thunk from "redux-thunk";

const Store = createStore(reducerTampungan, applyMiddleware(thunk));
export default Store;
