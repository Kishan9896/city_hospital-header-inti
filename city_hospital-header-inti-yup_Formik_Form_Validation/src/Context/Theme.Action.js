import { createContext, useReducer } from "react";
import { TOGGLE_THEME } from "./ActionType";
import { ThemeReducer } from "./Reducer/Theme.Reducer";

const ThemeContext = createContext();

const intival = {
  theme: "light",
};

export const ThemeAction = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, intival);

  const ThemeProvider = (val) => {
    const newtheme = val === "light" ? "dark" : "light";
    dispatch({ type: TOGGLE_THEME, payload: newtheme });
  };

  return (
    <ThemeContext.Provider
      value={{
        ...state,
        ThemeProvider,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
