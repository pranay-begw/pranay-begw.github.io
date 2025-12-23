import React, { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';


import TechGraphBackground from './components/TechGraphBackground';

import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Education from './pages/Education';
import { colorSchemes } from './utils/colorSchemes';



function App() {
  const muiTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: { main: colorSchemes.teal.muiPrimary },
      secondary: { main: colorSchemes.teal.muiSecondary },
      background: {
        default: colorSchemes.teal.darkBg,
        paper: colorSchemes.teal.cardBg,
      },
      text: {
        primary: colorSchemes.teal.textPrimary,
        secondary: colorSchemes.teal.textSecondary,
      },
    },
    typography: { fontFamily: 'Arial, sans-serif' },
  });

  useEffect(() => {
    // Apply CSS variables with teal scheme
    const scheme = colorSchemes.teal;
    const root = document.documentElement;
    root.style.setProperty('--dark-bg', scheme.darkBg);
    root.style.setProperty('--darker-bg', scheme.darkerBg);
    root.style.setProperty('--teal-accent', scheme.accent);
    root.style.setProperty('--teal-hover', scheme.hover);
    root.style.setProperty('--text-primary', scheme.textPrimary);
    root.style.setProperty('--text-secondary', scheme.textSecondary);
    root.style.setProperty('--card-bg', scheme.cardBg);
  }, []);

  return (
    <ThemeProvider theme={muiTheme}>
      <TechGraphBackground />
      <div className="bg-dark-bg/80 relative min-h-screen text-zinc-400 selection:bg-teal-accent/30 selection:text-teal-200">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
