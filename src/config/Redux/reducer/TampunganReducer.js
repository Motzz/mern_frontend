import { combineReducers } from "redux";

import Globalreducer from "./GlobalReducer";
import HomeReducer from "./HomeReducer";
import CreateBlogReducer from "./CreateBlogReducer";
const reducerTampungan = combineReducers({ HomeReducer, Globalreducer, CreateBlogReducer });
export default reducerTampungan;
