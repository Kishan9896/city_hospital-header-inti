import * as Actiontype from "../Actiontype";

export const singupAction = (values) => (dispatch) => {
  dispatch({ type: Actiontype.SING_UP, payload: values });
};

export const singInAction = (values) => (dispatch) => {
  dispatch({ type: Actiontype.SING_IN, payload: values });
};

export const singInGoogle = () => (dispatch) => {
  dispatch({ type: Actiontype.SIGN_IN_Google });
};

export const singout = () => (dispatch) => {
  dispatch({ type: Actiontype.SINGED_IN });
};

export const logoutAction = () => (dispatch) => {
  dispatch({ type: Actiontype.LOG_OUT });
};

export const loggedoutAction = () => (dispatch) => {
  dispatch({ type: Actiontype.LOGGED_OUT });
};
