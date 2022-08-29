import * as Actiontype from "../Actiontype";

export const setAlert = (values) => (dispatch) => {
  dispatch({ type: Actiontype.SET_ALERT, payload: values });
};

export const resetAlert = () => (dispatch) => {
  dispatch({ type: Actiontype.RESET_ALERT });
};

