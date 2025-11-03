import { createContext, useState, type ReactNode, } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../styles/themes/default";
import { lightTheme } from "../styles/themes/lightTheme";

interface ThemeContextType {
  chooseTheme: "default" | "light";
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [chooseTheme, setChooseTheme] = useState<"default" | "light">("default");

  function toggleTheme() {
    setChooseTheme((prev) => (prev === "default" ? "light" : "default"));
  }

  return (
    <ThemeContext.Provider value={{ chooseTheme, toggleTheme }}>
      <ThemeProvider theme={chooseTheme === "default" ? defaultTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
