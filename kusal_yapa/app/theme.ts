import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#197FF6', // Custom primary color (blue)
    },
    secondary: {
      main: '#dc004', // Custom secondary color (pink)
    },
  },
  typography: {
    h4: {
      fontWeight: 700,
    },
  },
});

export default theme;