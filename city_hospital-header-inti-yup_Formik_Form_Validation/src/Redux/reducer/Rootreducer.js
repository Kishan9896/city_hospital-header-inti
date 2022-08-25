import { combineReducers } from "redux";
import { alertReducer } from "./alert.Reducer";
import { authReducer } from "./auth.Reducer";

export const Rootreducer = combineReducers({
  auth: authReducer,
  text: alertReducer,
});

export default Rootreducer;
