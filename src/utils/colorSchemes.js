// Color scheme definitions
export const colorSchemes = {
  teal: {
    name: 'Teal (Current)',
    darkBg: '#1a1a1a',
    darkerBg: '#121212',
    accent: '#00b3b3',
    hover: '#00e6e6',
    textPrimary: '#ffffff',
    textSecondary: '#b3b3b3',
    cardBg: '#242424',
    muiPrimary: '#00b3b3',
    muiSecondary: '#00e6e6',
  },
  purple: {
    name: 'Purple',
    darkBg: '#1a1a1a',
    darkerBg: '#121212',
    accent: '#9b59b6',
    hover: '#bb7dd6',
    textPrimary: '#ffffff',
    textSecondary: '#d0b3e0',
    cardBg: '#242424',
    muiPrimary: '#9b59b6',
    muiSecondary: '#bb7dd6',
  },
  blue: {
    name: 'Blue',
    darkBg: '#1a1a1a',
    darkerBg: '#121212',
    accent: '#3498db',
    hover: '#5dade2',
    textPrimary: '#ffffff',
    textSecondary: '#b3d9f2',
    cardBg: '#242424',
    muiPrimary: '#3498db',
    muiSecondary: '#5dade2',
  },
  green: {
    name: 'Green',
    darkBg: '#1a1a1a',
    darkerBg: '#121212',
    accent: '#2ecc71',
    hover: '#58d68d',
    textPrimary: '#ffffff',
    textSecondary: '#b3e6cc',
    cardBg: '#242424',
    muiPrimary: '#2ecc71',
    muiSecondary: '#58d68d',
  },
  orange: {
    name: 'Orange',
    darkBg: '#1a1a1a',
    darkerBg: '#121212',
    accent: '#e67e22',
    hover: '#f39c12',
    textPrimary: '#ffffff',
    textSecondary: '#f5cba7',
    cardBg: '#242424',
    muiPrimary: '#e67e22',
    muiSecondary: '#f39c12',
  },
  red: {
    name: 'Red',
    darkBg: '#1a1a1a',
    darkerBg: '#121212',
    accent: '#e74c3c',
    hover: '#ec7063',
    textPrimary: '#ffffff',
    textSecondary: '#f5b7b1',
    cardBg: '#242424',
    muiPrimary: '#e74c3c',
    muiSecondary: '#ec7063',
  },
  pink: {
    name: 'Pink',
    darkBg: '#1a1a1a',
    darkerBg: '#121212',
    accent: '#e91e63',
    hover: '#f06292',
    textPrimary: '#ffffff',
    textSecondary: '#f8bbd0',
    cardBg: '#242424',
    muiPrimary: '#e91e63',
    muiSecondary: '#f06292',
  },
  cyan: {
    name: 'Cyan',
    darkBg: '#1a1a1a',
    darkerBg: '#121212',
    accent: '#00bcd4',
    hover: '#4dd0e1',
    textPrimary: '#ffffff',
    textSecondary: '#b2ebf2',
    cardBg: '#242424',
    muiPrimary: '#00bcd4',
    muiSecondary: '#4dd0e1',
  },
  amber: {
    name: 'Amber',
    darkBg: '#1a1a1a',
    darkerBg: '#121212',
    accent: '#ffc107',
    hover: '#ffd54f',
    textPrimary: '#ffffff',
    textSecondary: '#fff9c4',
    cardBg: '#242424',
    muiPrimary: '#ffc107',
    muiSecondary: '#ffd54f',
  },
};

export const applyColorScheme = (scheme) => {
  const root = document.documentElement;
  root.style.setProperty('--dark-bg', scheme.darkBg);
  root.style.setProperty('--darker-bg', scheme.darkerBg);
  root.style.setProperty('--teal-accent', scheme.accent);
  root.style.setProperty('--teal-hover', scheme.hover);
  root.style.setProperty('--text-primary', scheme.textPrimary);
  root.style.setProperty('--text-secondary', scheme.textSecondary);
  root.style.setProperty('--card-bg', scheme.cardBg);
};

