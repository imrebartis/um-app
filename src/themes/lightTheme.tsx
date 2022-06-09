import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    mode: 'light' as PaletteMode,
    primary: {
      main: '#e3127e',
    },
    secondary: {
      main: '#000000',
    },
  },
});
