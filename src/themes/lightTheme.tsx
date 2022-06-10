import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#e3127e',
    },
    secondary: {
      main: '#000000',
    },
  },
  clicked: {
    color: '#e3127e !important',
    borderColor: '#e3127e !important',
  },
  notClicked: {
    color: '#000000 !important',
    borderColor: '#000000 !important',
  },
});
