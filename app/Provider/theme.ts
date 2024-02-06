'use client';

import { PaletteColorOptions, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3A86FF',
    },
  },
  typography: {
    body1: {
      color: '#495057',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
        contained: {
          color: '#ffffff',
        },
      },
    },
  },
});

export default theme;
