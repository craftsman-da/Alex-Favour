import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import App from './App.tsx';
import { ProgramOfEvent } from './pages/ProgramOfEvent.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/program-of-event" element={<ProgramOfEvent />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </StrictMode>
);
