import * as Actiontype from "../Actiontype";

export const signupAction = (values) => (dispatch) => {
  dispatch({ type: Actiontype.SIGN_UP, payload: values });
};

export const signInAction = (values) => (dispatch) => {
  dispatch({ type: Actiontype.SIGN_IN, payload: values });
};

export const signInGoogle = () => (dispatch) => {
  dispatch({ type: Actiontype.SIGN_IN_Google });
};

export const signout = () => (dispatch) => {
  dispatch({ type: Actiontype.SIGNED_IN });
};

export const logoutAction = () => (dispatch) => {
  dispatch({ type: Actiontype.LOG_OUT });
};

export const loggedoutAction = () => (dispatch) => {
  dispatch({ type: Actiontype.LOGGED_OUT });
};

export const forgotPassword = () => (dispatch) => {
  dispatch({ type: Actiontype.FORGOT_PASS })
}