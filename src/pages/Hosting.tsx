// src/components/Hosting.tsx

import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button, // Importar Button
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import styled from 'styled-components';
import StorageIcon from '@mui/icons-material/Storage';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import BuildIcon from '@mui/icons-material/Build';

/**
 * Interface para los ítems de Hosting.
 */
interface HostingItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

/**
 * Datos de los servicios de Hosting.
 */
const hostingData: HostingItem[] = [
  {
    title: 'Alto Rendimiento',
    description: 'Servidores optimizados para máxima velocidad',
    icon: <StorageIcon fontSize="large" />,
  },
  {
    title: 'Seguridad Avanzada',
    description: 'Protección contra amenazas y SSL gratuito',
    icon: <CloudUploadIcon fontSize="large" />,
  },
  {
    title: 'Escalabilidad',
    description: 'Crece según tus necesidades sin preocupaciones',
    icon: <BuildIcon fontSize="large" />,
  },
];

/**
 * Card con efecto glass y “iluminación” al hover (sin movimiento).
 * Similar a PlantillasWeb, solo cambia la sombra y borde.
 */
const GlassCard = styled(Card)`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.05); /* Fondo ligeramente gris */
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.1); /* Borde gris claro */
  border-radius: 8px;
  color: #000000; /* Texto negro */
  transition: box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Sombra más oscura al hover */
    border-color: rgba(0, 0, 0, 0.3); /* Borde más oscuro al hover */
  }
`;

/**
 * StyledButton para "Cotizar".
 */
const CotizarButton = styled(Button)`
  font-size: 0.85rem;
  background-color: rgba(0, 0, 0, 0.1); /* Fondo gris claro */
  color: #000000; /* Texto negro */
  border: 1px solid rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(6px);
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    border-color: rgba(0, 0, 0, 0.5);
  }
`;

/**
 * Hosting Component
 */
const Hosting: React.FC = () => {
  const handleCotizar = (servicio: string) => {
    // Abre WhatsApp (ajusta el número según tu país y teléfono real)
    const phoneNumber = '5219999999999';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Hola, me interesa cotizar el servicio de ${servicio}`
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box
      sx={{
        padding: 4,
        minHeight: '100vh',
        backgroundColor: '#ffffff', // Fondo blanco
        color: '#000000', // Texto negro
      }}
    >
      {/* Título y Subtítulo */}
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontSize: '1.8rem',
            fontWeight: 700,
            color: '#000000', // Texto negro
          }}
        >
          Servicios de Hosting
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            color: 'rgba(0, 0, 0, 0.7)', // Texto gris oscuro
            fontSize: '0.9rem',
          }}
        >
          Alojamiento web rápido, seguro y confiable
        </Typography>
      </Box>

      {/* Cards Principales */}
      <Grid container spacing={4} justifyContent="center">
        {hostingData.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <GlassCard>
              <Box sx={{ p: 2 }}>
                <Avatar
                  sx={{
                    margin: '0 auto 8px auto',
                    backgroundColor: 'transparent !important', // Quitar fondo
                    svg: {
                      fill: '#000000 !important', // Icono negro
                    },
                  }}
                >
                  {item.icon}
                </Avatar>
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#000000', // Texto negro
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(0, 0, 0, 0.8)', // Texto gris oscuro
                      fontSize: '0.85rem',
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Box>
              <Box sx={{ textAlign: 'center', mt: 2, mb: 2 }}>
                <CotizarButton onClick={() => handleCotizar(item.title)}>
                  Cotizar Servicio
                </CotizarButton>
              </Box>
            </GlassCard>
          </Grid>
        ))}
      </Grid>

      {/* Sección de Proveedores de Hosting */}
      <Box sx={{ marginTop: 8 }}>
        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          textAlign="center"
          sx={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#000000', // Texto negro
            marginBottom: 3,
          }}
        >
          Proveedores de Hosting
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* Vercel */}
          <Grid item xs={12} sm={6} md={4}>
            <GlassCard>
              <Box sx={{ textAlign: 'center', mb: 2, mt: 2 }}>
                <img
                  src="https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png"
                  alt="Vercel Logo"
                  style={{ width: '40px', height: 'auto' }}
                />
                {/* Nombre debajo del logo */}
                <Typography
                  variant="body1"
                  sx={{ color: '#000000', mt: 1, fontSize: '1rem' }}
                >
                  Vercel
                </Typography>
              </Box>
              <List>
                <ListItem sx={{ paddingY: 0.5 }}>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: '#000000', fontSize: '1rem' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Despliegue automático"
                    primaryTypographyProps={{
                      fontSize: '0.85rem',
                      sx: { color: '#000000' },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ paddingY: 0.5 }}>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: '#000000', fontSize: '1rem' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="SSL gratuito"
                    primaryTypographyProps={{
                      fontSize: '0.85rem',
                      sx: { color: '#000000' },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ paddingY: 0.5 }}>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: '#000000', fontSize: '1rem' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="CDN global incluida"
                    primaryTypographyProps={{
                      fontSize: '0.85rem',
                      sx: { color: '#000000' },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ paddingY: 0.5 }}>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: '#000000', fontSize: '1rem' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Gestión sencilla desde el dashboard"
                    primaryTypographyProps={{
                      fontSize: '0.85rem',
                      sx: { color: '#000000' },
                    }}
                  />
                </ListItem>
              </List>
            </GlassCard>
          </Grid>

          {/* Netlify */}
          <Grid item xs={12} sm={6} md={4}>
            <GlassCard>
              <Box sx={{ textAlign: 'center', mb: 2, mt: 2 }}>
                <img
                  src="https://www.netlify.com/v3/img/components/logomark.png"
                  alt="Netlify Logo"
                  style={{ width: '40px', height: 'auto' }}
                />
                {/* Nombre debajo del logo */}
                <Typography
                  variant="body1"
                  sx={{ color: '#000000', mt: 1, fontSize: '1rem' }}
                >
                  Netlify
                </Typography>
              </Box>
              <List>
                <ListItem sx={{ paddingY: 0.5 }}>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: '#000000', fontSize: '1rem' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Despliegue continuo"
                    primaryTypographyProps={{
                      fontSize: '0.85rem',
                      sx: { color: '#000000' },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ paddingY: 0.5 }}>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: '#000000', fontSize: '1rem' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Forms integrados"
                    primaryTypographyProps={{
                      fontSize: '0.85rem',
                      sx: { color: '#000000' },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ paddingY: 0.5 }}>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: '#000000', fontSize: '1rem' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="SSL gratuito"
                    primaryTypographyProps={{
                      fontSize: '0.85rem',
                      sx: { color: '#000000' },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ paddingY: 0.5 }}>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: '#000000', fontSize: '1rem' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Funciones serverless"
                    primaryTypographyProps={{
                      fontSize: '0.85rem',
                      sx: { color: '#000000' },
                    }}
                  />
                </ListItem>
              </List>
            </GlassCard>
          </Grid>

          {/* Cloudflare Pages */}
          <Grid item xs={12} sm={6} md={4}>
            <GlassCard>
              <Box sx={{ textAlign: 'center', mb: 2, mt: 2 }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Cloudflare_Logo.png/1200px-Cloudflare_Logo.png"
                  alt="Cloudflare Logo"
                  style={{ width: '40px', height: 'auto' }}
                />
                {/* Nombre debajo del logo */}
                <Typography
                  variant="body1"
                  sx={{ color: '#000000', mt: 1, fontSize: '1rem' }}
                >
                  Cloudflare
                </Typography>
              </Box>
              <List>
                <ListItem sx={{ paddingY: 0.5 }}>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: '#000000', fontSize: '1rem' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Rendimiento global"
                    primaryTypographyProps={{
                      fontSize: '0.85rem',
                      sx: { color: '#000000' },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ paddingY: 0.5 }}>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: '#000000', fontSize: '1rem' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="SSL gratuito"
                    primaryTypographyProps={{
                      fontSize: '0.85rem',
                      sx: { color: '#000000' },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ paddingY: 0.5 }}>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: '#000000', fontSize: '1rem' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Protección DDoS"
                    primaryTypographyProps={{
                      fontSize: '0.85rem',
                      sx: { color: '#000000' },
                    }}
                  />
                </ListItem>
                <ListItem sx={{ paddingY: 0.5 }}>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: '#000000', fontSize: '1rem' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Workers integrados"
                    primaryTypographyProps={{
                      fontSize: '0.85rem',
                      sx: { color: '#000000' },
                    }}
                  />
                </ListItem>
              </List>
            </GlassCard>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hosting;
