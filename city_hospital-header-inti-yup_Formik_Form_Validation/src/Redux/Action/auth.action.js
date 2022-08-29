import * as Actiontype from "../Actiontype";

export const singupAction = (values) => (dispatch) => {
  dispatch({ type: Actiontype.SING_UP, payload: values });
};

export const singInAction = (values) => (dispatch) => {
  dispatch({ type: Actiontype.SING_IN, payload: values });
};

export const singout = (values) => (dispatch) => {
  dispatch({ type: Actiontype.SINGED_IN });
};
