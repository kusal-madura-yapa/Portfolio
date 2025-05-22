import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Custom primary color (blue)
    },
    secondary: {
      main: '#dc004e', // Custom secondary color (pink)
    },
  },
  typography: {
    h4: {
      fontWeight: 700,
    },
  },
});

export default theme;