import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw Error("UseThemeContext must be used inside on ThemeProvider");
  }

  return context;
};
