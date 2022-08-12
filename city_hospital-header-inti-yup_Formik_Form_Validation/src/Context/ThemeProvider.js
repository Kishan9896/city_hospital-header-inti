import { createContext, useReducer } from "react";
import { TOGGLE_THEME } from "./ActionType";
import { ThemeReducer } from "./Reducer/Theme.Reducer";

const ThemeContext = createContext();

const intival = {
  theme: "light",
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, intival);

  const ToggleTheme = (val) => {
    const newtheme = val === "light" ? "dark" : "light";
    dispatch({ type: TOGGLE_THEME, payload: newtheme });
  };

  return (
    <ThemeContext.Provider
      value={{
        ...state,
        ToggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
