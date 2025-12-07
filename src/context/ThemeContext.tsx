import { createContext, useState, useContext, ReactNode } from 'react';

interface ThemeContextType {
  selectedColorIndex: number;
  setSelectedColorIndex: (index: number) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  return (
    <ThemeContext.Provider value={{ selectedColorIndex, setSelectedColorIndex }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
