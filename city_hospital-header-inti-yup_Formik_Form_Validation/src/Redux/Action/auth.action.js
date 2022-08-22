import * as Actiontype from "../Actiontype";

export const singupAction = (values) => (dispatch) => {
  dispatch({ type: Actiontype.SING_UP, payload: values });
};
