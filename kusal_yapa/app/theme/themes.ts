import { createTheme, Theme } from '@mui/material/styles';

// Define the dark theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00bcd4', // Cyan for a modern, vibrant look
      light: '#4dd0e1',
    },
    background: {
      default: '#121212', // Softer dark gray for better readability
      paper: '#1e1e1e', // Slightly lighter for cards
    },
    text: {
      primary: '#e0e0e0', // Softer white for readability
      secondary: '#b0b0b0',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#e0e0e0',
          transition: 'color 0.3s ease', // Smooth color transition
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(45deg, #00bcd4 30%, #4dd0e1 90%)',
          color: '#ffffff',
          transition: 'transform 0.2s ease, background 0.3s ease',
          '&:hover': {
            background: 'linear-gradient(45deg, #4dd0e1 30%, #00bcd4 90%)',
            transform: 'scale(1.05)', // Slight scale on hover
            boxShadow: '0 0 15px rgba(0, 188, 212, 0.5)', // Glow effect
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(145deg, #1e1e1e 0%, #252525 100%)', // Subtle gradient
          border: '1px solid #333',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.2s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)', // Lift effect on hover
            boxShadow: '0 8px 16px rgba(0, 188, 212, 0.4)', // Cyan glow
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#444', // Softer divider color
          transition: 'border-color 0.3s ease',
        },
      },
    },
  },
});

// Define the light theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0288d1',
      light: '#4fc3f7',
    },
    background: {
      default: '#e3f2fd',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121', // Slightly softer black for readability
      secondary: '#616161',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#212121',
          transition: 'color 0.3s ease',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(45deg, #0288d1 30%, #4fc3f7 90%)',
          color: '#ffffff',
          transition: 'transform 0.2s ease, background 0.3s ease',
          '&:hover': {
            background: 'linear-gradient(45deg, #4fc3f7 30%, #0288d1 90%)',
            transform: 'scale(1.05)',
            boxShadow: '0 0 15px rgba(2, 136, 209, 0.5)', // Blue glow
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)', // Subtle gradient
          border: '1px solid #e0e0e0',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 16px rgba(2, 136, 209, 0.3)', // Blue glow
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#d4e6f1',
          transition: 'border-color 0.3s ease',
        },
      },
    },
  },
});

// Helper function to get theme-specific gradient
export const getThemeGradient = (theme: Theme) => {
  return `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`;
};