import * as Actiontype from "../Actiontype";
const initval = {
  text: "",
  color: "",
};

export const alertReducer = (state = initval, action) => {
  switch (action.type) {
    case Actiontype.SET_ALERT:
      return {
        ...state,
        text: action.payload.text,
        color: action.payload.color,
      };
    case Actiontype.RESET_ALERT:
      return {
        ...state,
        text: "",
        color: "",
      };
    default:
      return state;
  }
};
