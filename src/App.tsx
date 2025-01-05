// src/App.tsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, GlobalStyles as MuiGlobalStyles } from '@mui/material';
import GlobalStyle from './GlobalStyles'; // Importar GlobalStyles
import theme from './theme'; // Importar el tema personalizado

import Header from './components/Header';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import PlantillasWeb from './pages/PlantillasWeb';
import PublicidadDigital from './pages/PublicidadDigital';
import Hosting from './pages/Hosting';
import BaseDeDatos from './pages/BaseDeDatos';
import Dominio from './pages/Dominio';
import Precios from './pages/Precios';
import Contacto from './pages/Contacto';
import Acerca from './pages/Acerca';
import IniciarSesion from './pages/IniciarSesion';
// Ya no es necesario importar Registrarse aquí

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle /> {/* Aplica los estilos globales */}

      {/* Estilos globales para el scrollbar usando GlobalStyles de MUI */}
      <MuiGlobalStyles
        styles={{
          /* Scrollbar para navegadores basados en Firefox */
          '*': {
            scrollbarWidth: 'thin', // Hacer el scrollbar delgado
            scrollbarColor: '#b0b0b0 #ffffff', // Color del thumb (gris muy claro) y track (blanco)
          },
          /* Scrollbar para navegadores basados en WebKit (Chrome, Safari, Edge) */
          '*::-webkit-scrollbar': {
            width: '8px', // Ancho del scrollbar
          },
          '*::-webkit-scrollbar-track': {
            background: '#ffffff', // Fondo blanco del track
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#b0b0b0', // Color del thumb (gris muy claro)
            borderRadius: '4px', // Bordes redondeados
            border: '2px solid #ffffff', // Borde blanco para separar el thumb del track
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#b0b0b0', // Color ligeramente más oscuro al pasar el cursor
          },
        }}
      />

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/servicios/plantillas-web" element={<PlantillasWeb />} />
        <Route path="/servicios/publicidad-digital" element={<PublicidadDigital />} />
        <Route path="/servicios/hosting" element={<Hosting />} />
        <Route path="/servicios/base-de-datos" element={<BaseDeDatos />} />
        <Route path="/servicios/dominio" element={<Dominio />} />
        <Route path="/precios" element={<Precios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        {/* Elimina la ruta de Registrarse */}
        {/* <Route path="/registrarse" element={<Registrarse />} /> */}
      </Routes>
    </ThemeProvider>
  );
};

export default App;
