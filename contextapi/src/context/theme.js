import React, { useContext, createContext } from "react";

// Create the theme context
export const ThemeContext = createContext();
console.log("ThemeContext created"); // Log context creation

// Provider component for the theme context
export const ThemeProvider = ThemeContext.Provider;

// Custom hook to consume the theme context
export function useTheme() {
  return useContext(ThemeContext);
}

console.log("useTheme hook created"); // Log custom hook creation
