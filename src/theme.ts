// src/theme.ts

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Azul primario (puedes ajustarlo si lo deseas)
    },
    secondary: {
      main: '#dc004e', // Rojo secundario (puedes ajustarlo si lo deseas)
    },
    background: {
      default: '#ffffff', // Fondo blanco por defecto
      paper: '#f5f5f5', // Fondo de elementos como tarjetas (ligeramente gris)
    },
    text: {
      primary: '#000000', // Texto principal negro
      secondary: 'rgba(0,0,0,0.7)', // Texto secundario negro semi-transparente
    },
  },
  typography: {
    fontFamily: 'Futursita, sans-serif', // Fuente global
    button: {
      fontSize: '0.875rem', // Tamaño de fuente para botones (equivalente a 14px)
      fontWeight: 500, // Peso de fuente para botones
    },
    body1: {
      fontSize: '0.875rem', // Tamaño de fuente para body1 (equivalente a 14px)
      fontWeight: 400,
    },
    h6: {
      fontSize: '0.875rem', // Tamaño de fuente para h6 (equivalente a 14px)
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Evitar transformar el texto en mayúsculas
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          fontFamily: 'Futursita, sans-serif', // Aplicar la fuente en AppBar
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem', // Asegurar que MenuItem tenga el mismo tamaño que los botones
          fontWeight: 500, // Peso de fuente consistente
          fontFamily: 'Futursita, sans-serif', // Aplicar la fuente
        },
      },
    },
  },
});

export default theme;
