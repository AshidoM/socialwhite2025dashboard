// src/components/Header.tsx

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Menu,
  Grow,
  Dialog,
  Typography,
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Registrarse from '../pages/Registrarse';
import IniciarSesion from '../pages/IniciarSesion';

/** 
 * MenuItem personalizado con hover suave.
 */
const CustomMenuItem = styled(MenuItem)`
  && {
    transition: background-color 0.3s ease;
    color: #000000; /* Texto negro */
    background-color: #ffffff; /* Fondo blanco */
    font-family: 'Futursita', sans-serif; /* Aplicar la fuente */
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;

/**
 * Botón personalizado con la fuente "Futursita".
 */
const CustomButton = styled(Button)`
  font-family: 'Futursita', sans-serif; /* Aplicar la fuente */
`;

const Header: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  // Menú hamburguesa en móvil
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Submenú de Servicios en escritorio (hover)
  const [anchorElServices, setAnchorElServices] = useState<null | HTMLElement>(null);
  const isServicesMenuOpen = Boolean(anchorElServices);

  // Submenú de Servicios en móvil (clic)
  const [anchorElServicesMobile, setAnchorElServicesMobile] = useState<null | HTMLElement>(null);
  const isServicesMenuOpenMobile = Boolean(anchorElServicesMobile);

  // Abre menú al pasar el mouse (escritorio)
  const handleServicesMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElServices(event.currentTarget);
  };
  // Cierra submenú (escritorio)
  const handleServicesMenuClose = () => {
    setAnchorElServices(null);
  };

  // Abre submenú de servicios en móvil
  const handleServicesMenuOpenMobile = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElServicesMobile(event.currentTarget);
  };
  // Cierra submenú de servicios en móvil
  const handleServicesMenuCloseMobile = () => {
    setAnchorElServicesMobile(null);
  };

  // Estado para el modal de Registrarse
  const [openRegister, setOpenRegister] = useState(false);

  const handleOpenRegister = () => {
    setOpenRegister(true);
  };

  const handleCloseRegister = () => {
    setOpenRegister(false);
  };

  // Estado para el modal de Iniciar Sesión
  const [openLogin, setOpenLogin] = useState(false);

  const handleOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  return (
    <>
      {/* Barra de navegación fija */}
      <AppBar
        position="fixed" // Cambiado a 'fixed'
        sx={{
          backgroundColor: '#ffffff', // Fondo blanco
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)', // Sombra sutil
          zIndex: (theme) => theme.zIndex.drawer + 1, // Asegura que esté por encima de otros componentes
        }}
      >
        <Toolbar>
          {/* LOGO */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
              my: '2px',
            }}
          >
            <Box
              component="img"
              src="https://odolofjixzwxfntaveii.supabase.co/storage/v1/object/public/imagenes%20de%20equipo/LOGO/ICONOSW.png?t=2024-12-29T01%3A48%3A58.608Z"
              alt="Logo"
              sx={{
                width: 80,
                height: 80,
                mr: 2,
                // Sin drop-shadow
              }}
            />
          </Box>

          {/* Menú de navegación (MD+) */}
          <Box
            sx={{
              flex: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CustomButton
              component={RouterLink}
              to="/"
              sx={{
                textTransform: 'none',
                fontWeight: isActive('/') ? 700 : 500,
                color: isActive('/') ? '#000000' : 'rgba(0,0,0,0.7)', // Texto negro
                mx: 1,
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: '#000000',
                },
              }}
            >
              Inicio
            </CustomButton>

            {/* "Servicios" sin flecha, con hover para submenú */}
            <CustomButton
              onMouseEnter={handleServicesMenuOpen}
              // Eliminamos onMouseLeave para evitar el cierre inmediato
              sx={{
                textTransform: 'none',
                fontWeight: location.pathname.startsWith('/servicios') ? 700 : 500,
                color: location.pathname.startsWith('/servicios')
                  ? '#000000'
                  : 'rgba(0,0,0,0.7)', // Texto negro
                mx: 1,
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: '#000000',
                },
              }}
            >
              Servicios
            </CustomButton>
            <Menu
              anchorEl={anchorElServices}
              open={isServicesMenuOpen}
              onClose={handleServicesMenuClose}
              TransitionComponent={Grow} // Animación bonita
              TransitionProps={{ style: { transformOrigin: 'center top' } }}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              PaperProps={{
                sx: {
                  backgroundColor: '#ffffff', // Fondo blanco
                  border: '1px solid rgba(0,0,0,0.1)',
                  borderRadius: '8px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  maxHeight: '300px', // Limita la altura del menú
                  overflowY: 'auto', // Permite scroll si hay muchos elementos
                },
              }}
              // Agregamos onMouseEnter y onMouseLeave al menú para mantenerlo abierto
              onMouseEnter={() => {}}
              onMouseLeave={handleServicesMenuClose}
              disableScrollLock // Deshabilitar bloqueo de scroll
              disableAutoFocusItem // Previene el enfoque automático
            >
              <CustomMenuItem
                component={RouterLink}
                to="/servicios/plantillas-web"
                onClick={handleServicesMenuClose}
                sx={{
                  fontWeight: location.pathname === '/servicios/plantillas-web' ? 700 : 400,
                }}
              >
                Plantillas Web
              </CustomMenuItem>
              <CustomMenuItem
                component={RouterLink}
                to="/servicios/publicidad-digital"
                onClick={handleServicesMenuClose}
                sx={{
                  fontWeight: location.pathname === '/servicios/publicidad-digital' ? 700 : 400,
                }}
              >
                Publicidad Digital
              </CustomMenuItem>
              <CustomMenuItem
                component={RouterLink}
                to="/servicios/hosting"
                onClick={handleServicesMenuClose}
                sx={{
                  fontWeight: location.pathname === '/servicios/hosting' ? 700 : 400,
                }}
              >
                Hosting
              </CustomMenuItem>
              <CustomMenuItem
                component={RouterLink}
                to="/servicios/base-de-datos"
                onClick={handleServicesMenuClose}
                sx={{
                  fontWeight: location.pathname === '/servicios/base-de-datos' ? 700 : 400,
                }}
              >
                Base de Datos
              </CustomMenuItem>
              <CustomMenuItem
                component={RouterLink}
                to="/servicios/dominio"
                onClick={handleServicesMenuClose}
                sx={{
                  fontWeight: location.pathname === '/servicios/dominio' ? 700 : 400,
                }}
              >
                Dominio
              </CustomMenuItem>
            </Menu>

            <CustomButton
              component={RouterLink}
              to="/precios"
              sx={{
                textTransform: 'none',
                fontWeight: isActive('/precios') ? 700 : 500,
                color: isActive('/precios') ? '#000000' : 'rgba(0,0,0,0.7)', // Texto negro
                mx: 1,
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: '#000000',
                },
              }}
            >
              Precios
            </CustomButton>

            <CustomButton
              component={RouterLink}
              to="/contacto"
              sx={{
                textTransform: 'none',
                fontWeight: isActive('/contacto') ? 700 : 500,
                color: isActive('/contacto') ? '#000000' : 'rgba(0,0,0,0.7)', // Texto negro
                mx: 1,
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: '#000000',
                },
              }}
            >
              Contacto
            </CustomButton>
          </Box>

          {/* Botones de Sesión (MD+) */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2 }}>
            {/* Botón para abrir modal de Iniciar Sesión */}
            <CustomButton
              onClick={handleOpenLogin}
              variant="outlined"
              sx={{
                textTransform: 'none',
                fontWeight: isActive('/iniciar-sesion') ? 700 : 500,
                color: '#000000', // Texto negro
                borderColor: 'rgba(0,0,0,0.4)', // Bordes negros semi-transparentes
                mx: 1,
                borderRadius: '5px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.05)',
                  borderColor: 'rgba(0,0,0,0.6)',
                },
              }}
            >
              Iniciar Sesión
            </CustomButton>

            {/* Botón para abrir modal de Registrarse */}
            <CustomButton
              onClick={handleOpenRegister}
              variant="contained"
              sx={{
                ml: 2,
                textTransform: 'none',
                fontWeight: 600,
                backgroundColor: 'rgba(200,200,200,0.2)', // Fondo gris claro
                color: '#000000', // Texto negro
                borderRadius: '5px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(200,200,200,0.3)',
                },
              }}
            >
              Registrarse
            </CustomButton>
          </Box>

          {/* Menú hamburguesa (pantallas XS-SM) */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
            <IconButton
              onClick={handleMenuOpen}
              sx={{
                color: '#000000', // Icono negro
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'rotate(90deg)',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={handleMenuClose}
              TransitionComponent={Grow} // Animación
              TransitionProps={{ style: { transformOrigin: 'center top' } }}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              PaperProps={{
                sx: {
                  backgroundColor: '#ffffff', // Fondo blanco
                  border: '1px solid rgba(0,0,0,0.1)',
                  borderRadius: '8px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  fontFamily: 'Futursita, sans-serif',
                  maxHeight: '80vh', // Limita la altura del menú
                  overflowY: 'auto', // Permite scroll si hay muchos elementos
                },
              }}
              disableScrollLock // Deshabilitar bloqueo de scroll
              disableAutoFocusItem // Previene el enfoque automático
            >
              <CustomMenuItem
                component={RouterLink}
                to="/"
                onClick={handleMenuClose}
                sx={{
                  fontWeight: isActive('/') ? 700 : 400,
                }}
              >
                Inicio
              </CustomMenuItem>

              {/* Submenú de Servicios en móvil: sigue con clic */}
              <CustomMenuItem
                onClick={(e) => {
                  handleMenuClose();
                  handleServicesMenuOpenMobile(e);
                }}
                sx={{
                  fontWeight: location.pathname.startsWith('/servicios') ? 700 : 400,
                }}
              >
                Servicios
              </CustomMenuItem>
              <Menu
                anchorEl={anchorElServicesMobile}
                open={isServicesMenuOpenMobile}
                onClose={handleServicesMenuCloseMobile}
                TransitionComponent={Grow}
                TransitionProps={{ style: { transformOrigin: 'center top' } }}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                  sx: {
                    backgroundColor: '#ffffff', // Fondo blanco
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                    fontFamily: 'Futursita, sans-serif',
                    maxHeight: '60vh', // Limita la altura del submenú
                    overflowY: 'auto', // Permite scroll si hay muchos elementos
                  },
                }}
                disableScrollLock
                disableAutoFocusItem
              >
                <CustomMenuItem
                  component={RouterLink}
                  to="/servicios/plantillas-web"
                  onClick={() => {
                    handleServicesMenuCloseMobile();
                    handleMenuClose();
                  }}
                  sx={{
                    fontWeight: location.pathname === '/servicios/plantillas-web' ? 700 : 400,
                  }}
                >
                  Plantillas Web
                </CustomMenuItem>
                <CustomMenuItem
                  component={RouterLink}
                  to="/servicios/publicidad-digital"
                  onClick={() => {
                    handleServicesMenuCloseMobile();
                    handleMenuClose();
                  }}
                  sx={{
                    fontWeight:
                      location.pathname === '/servicios/publicidad-digital'
                        ? 700
                        : 400,
                  }}
                >
                  Publicidad Digital
                </CustomMenuItem>
                <CustomMenuItem
                  component={RouterLink}
                  to="/servicios/hosting"
                  onClick={() => {
                    handleServicesMenuCloseMobile();
                    handleMenuClose();
                  }}
                  sx={{
                    fontWeight: location.pathname === '/servicios/hosting' ? 700 : 400,
                  }}
                >
                  Hosting
                </CustomMenuItem>
                <CustomMenuItem
                  component={RouterLink}
                  to="/servicios/base-de-datos"
                  onClick={() => {
                    handleServicesMenuCloseMobile();
                    handleMenuClose();
                  }}
                  sx={{
                    fontWeight: location.pathname === '/servicios/base-de-datos' ? 700 : 400,
                  }}
                >
                  Base de Datos
                </CustomMenuItem>
                <CustomMenuItem
                  component={RouterLink}
                  to="/servicios/dominio"
                  onClick={() => {
                    handleServicesMenuCloseMobile();
                    handleMenuClose();
                  }}
                  sx={{
                    fontWeight: location.pathname === '/servicios/dominio' ? 700 : 400,
                  }}
                >
                  Dominio
                </CustomMenuItem>
              </Menu>

              <CustomMenuItem
                component={RouterLink}
                to="/precios"
                onClick={handleMenuClose}
                sx={{
                  fontWeight: isActive('/precios') ? 700 : 400,
                }}
              >
                Precios
              </CustomMenuItem>
              <CustomMenuItem
                component={RouterLink}
                to="/contacto"
                onClick={handleMenuClose}
                sx={{
                  fontWeight: isActive('/contacto') ? 700 : 400,
                }}
              >
                Contacto
              </CustomMenuItem>

              {/* Botón Iniciar Sesión en móvil */}
              <CustomMenuItem
                onClick={() => {
                  handleMenuClose();
                  handleOpenLogin();
                }}
                sx={{
                  fontWeight: isActive('/iniciar-sesion') ? 700 : 400,
                }}
              >
                Iniciar Sesión
              </CustomMenuItem>

              {/* Botón Registrarse en móvil */}
              <CustomMenuItem
                onClick={() => {
                  handleMenuClose();
                  handleOpenRegister();
                }}
                sx={{
                  fontWeight: isActive('/registrarse') ? 700 : 400,
                }}
              >
                Registrarse
              </CustomMenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Offset para evitar que el contenido quede oculto detrás del AppBar fijo */}
      <Toolbar />

      {/* Modal de Registrarse */}
      <Dialog
        open={openRegister}
        onClose={handleCloseRegister}
        fullWidth
        maxWidth="xs" // Ajuste para reducir el ancho del modal
        PaperProps={{
          sx: {
            backgroundColor: '#ffffff', // Fondo blanco
            color: '#000000', // Texto negro
            borderRadius: '12px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        {/* Barra de herramientas dentro del modal */}
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#ffffff', // Fondo blanco
          }}
        >
          <Typography variant="h6">Registrarse</Typography>
          <IconButton onClick={handleCloseRegister} sx={{ color: '#000000' }}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <Box sx={{ padding: 3 }}>
          {/* Utiliza Registrarse con showCard={false} y onClose={handleCloseRegister} */}
          <Registrarse showCard={false} onClose={handleCloseRegister} />
        </Box>
      </Dialog>

      {/* Modal de Iniciar Sesión */}
      <Dialog
        open={openLogin}
        onClose={handleCloseLogin}
        fullWidth
        maxWidth="xs" // Ajuste para reducir el ancho del modal
        PaperProps={{
          sx: {
            backgroundColor: '#ffffff', // Fondo blanco
            color: '#000000', // Texto negro
            borderRadius: '12px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#ffffff', // Fondo blanco
          }}
        >
          <Typography variant="h6">Iniciar Sesión</Typography>
          <IconButton onClick={handleCloseLogin} sx={{ color: '#000000' }}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <Box sx={{ padding: 3 }}>
          {/* Utiliza IniciarSesion con showCard={false} y onClose={handleCloseLogin} */}
          <IniciarSesion showCard={false} onClose={handleCloseLogin} />
        </Box>
      </Dialog>
    </>
  );
};

export default Header;
