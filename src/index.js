import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './styles/index.css';
import App from './App';
import { colorSchemes } from './utils/colorSchemes';

// Create initial theme
const initialTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colorSchemes.teal.muiPrimary,
    },
    secondary: {
      main: colorSchemes.teal.muiSecondary,
    },
    background: {
      default: colorSchemes.teal.darkBg,
      paper: colorSchemes.teal.cardBg,
    },
    text: {
      primary: colorSchemes.teal.textPrimary,
      secondary: colorSchemes.teal.textSecondary,
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={initialTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
