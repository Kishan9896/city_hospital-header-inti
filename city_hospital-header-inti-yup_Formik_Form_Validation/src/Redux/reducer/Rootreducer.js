import { combineReducers } from "redux";
import { authReducer } from "./auth.Reducer";

export const Rootreducer = combineReducers({
  auth: authReducer,
});

export default Rootreducer;
