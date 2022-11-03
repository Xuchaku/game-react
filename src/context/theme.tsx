import { createContext } from "react";
import Theme from "../types/Theme/Theme";
type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const initialState: ThemeContextType = {
  theme: {
    backgroundColor: "",
    backgorundImage: "",
    board: "",
    elements: [],
  },
  setTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(initialState);
