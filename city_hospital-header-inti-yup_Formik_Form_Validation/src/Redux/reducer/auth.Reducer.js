import * as Actiontype from "../Actiontype";

const initval = {
  isLoding: false,
  value: null,
  error: "",
};

export const authReducer = (state = initval, action) => {
  switch (action.type) {
    case Actiontype.SINGED_IN:
      return {
        ...state,
        isLoding: false,
        value: action.payload,
        error: "",
      };
    default:
      return state;
  }
};
