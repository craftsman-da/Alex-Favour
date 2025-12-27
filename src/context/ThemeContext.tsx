import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

export const COLORS = [
  {
    name: 'Golden Yellow',
    bg: 'bg-yellow-500',
    hover: 'hover:bg-yellow-600',
    border: 'border-yellow-500',
    text: 'text-yellow-600',
    value: '#facc15',
    rgb: '250, 204, 21',
    ceremonyText: 'Ceremony',
  },
  {
    name: 'Emerald Green',
    bg: 'bg-emerald-600',
    hover: 'hover:bg-emerald-700',
    border: 'border-emerald-600',
    text: 'text-emerald-600',
    value: '#059669',
    rgb: '5, 150, 105',
    ceremonyText: 'Ceremony',
  },
  {
    name: 'Navy Blue',
    bg: 'bg-blue-900',
    hover: 'hover:bg-blue-950',
    border: 'border-blue-900',
    text: 'text-blue-900',
    value: '#1e3a8a',
    rgb: '30, 58, 138',
    ceremonyText: 'Ceremony',
  },
];

interface ThemeContextType {
  selectedTheme: number;
  setSelectedTheme: (index: number) => void;
  currentColor: (typeof COLORS)[0];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Default to Emerald Green (index 1)
  const [selectedTheme, setSelectedTheme] = useState(1);

  const setThemeColor = (color: string, rgb: string) => {
    const root = document.documentElement;
    root.style.setProperty('--theme-primary', color);
    root.style.setProperty('--theme-r', rgb.split(',')[0].trim());
    root.style.setProperty('--theme-g', rgb.split(',')[1].trim());
    root.style.setProperty('--theme-b', rgb.split(',')[2].trim());
  };

  useEffect(() => {
    const color = COLORS[selectedTheme];
    setThemeColor(color.value, color.rgb);
  }, [selectedTheme]);

  return (
    <ThemeContext.Provider
      value={{
        selectedTheme,
        setSelectedTheme,
        currentColor: COLORS[selectedTheme],
      }}
    >
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
