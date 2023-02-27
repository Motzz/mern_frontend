import { combineReducers } from "redux";

import Globalreducer from "./GlobalReducer";
import HomeReducer from "./HomeReducer";
const reducerTampungan = combineReducers({ HomeReducer, Globalreducer });
export default reducerTampungan;
