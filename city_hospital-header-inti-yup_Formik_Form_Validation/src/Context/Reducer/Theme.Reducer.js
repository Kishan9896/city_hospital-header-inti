import { TOGGLE_THEME } from "../ActionType";
import themeAction from "../Theme.Action";

export const ThemeReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: themeAction,
      };
    default:
        return state;
  }
};
