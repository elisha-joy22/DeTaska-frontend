import { createContext, useState, useEffect, ReactNode } from "react";

// Define the context type
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Create context with a default value (will be overridden)
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Define the props for ThemeProvider
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
