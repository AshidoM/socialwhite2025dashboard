// src/pages/PublicidadDigital.tsx

import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  CardActions,
} from '@mui/material';
import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import CampaignIcon from '@mui/icons-material/Campaign';
import CheckIcon from '@mui/icons-material/Check';

/**
 * Interface para los ítems de publicidad.
 */
interface PublicidadItem {
  title: string;
  subtitle: string;
  bullets: string[];
  price: string;
  icon?: React.ReactNode;
}

/**
 * Datos de publicidad minimalistas.
 */
const publicidadData: PublicidadItem[] = [
  {
    title: 'Instagram',
    subtitle: 'Tráfico hacia tu sitio web desde Instagram',
    bullets: [
      '10,000 visitas por $190',
      'Mayor visibilidad y engagement',
      'Segmentación por intereses y edades',
    ],
    price: 'Desde $190',
    icon: <InstagramIcon fontSize="large" sx={{ color: '#000000' }} />, // Icono negro
  },
  {
    title: 'Twitter (México)',
    subtitle: 'Visitas a tu web provenientes de Twitter (México)',
    bullets: [
      '10,000 visitas por $320',
      'Audiencia local y segmentada',
      'Promoción de contenido y eventos',
    ],
    price: 'Desde $320',
    icon: <TwitterIcon fontSize="large" sx={{ color: '#000000' }} />, // Icono negro
  },
  {
    title: 'Google Ads',
    subtitle: 'Tráfico desde Google (Estados Unidos)',
    bullets: [
      '10,000 visitas por $140',
      'Descuentos por volumen',
      'Optimización de palabras clave',
    ],
    price: 'Desde $140',
    icon: <AdUnitsIcon fontSize="large" sx={{ color: '#000000' }} />, // Icono negro
  },
  {
    title: 'Redes y Streaming',
    subtitle: 'Publicidad en YouTube, Spotify, TikTok, etc.',
    bullets: [
      'Seguidores, Likes, Reproducciones',
      'Suscriptores, Vistas, Comentarios',
      'Segmentación por género, edad, intereses',
      'Planes y presupuestos variados',
    ],
    price: 'Precios variables',
    icon: <CampaignIcon fontSize="large" sx={{ color: '#000000' }} />, // Icono negro
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
 * PublicidadDigital Component
 */
const PublicidadDigital: React.FC = () => {
  const handleCotizar = (servicio: string) => {
    // Abre WhatsApp (ajusta el número según tu país y teléfono real)
    const phoneNumber = '5219999999999';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Hola, me interesa cotizar publicidad: ${servicio}`
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box
      sx={{
        padding: 4,
        minHeight: '100vh',
        backgroundColor: '#ffffff', // Fondo blanco
        color: '#000000',             // Texto negro
      }}
    >
      {/* Encabezado principal */}
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
          Impulsa tu sitio web con tráfico de redes sociales
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            color: 'rgba(0, 0, 0, 0.7)', // Texto gris oscuro
            fontSize: '0.9rem',
          }}
        >
          Aumenta visitas, engagement y conversiones
        </Typography>
      </Box>

      {/* Grid con las Cards de publicidad */}
      <Grid container spacing={4} justifyContent="center">
        {publicidadData.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <GlassCard>
              <CardContent sx={{ p: 0 }}>
                <Box sx={{ mt: 2, mb: 1, display: 'flex', justifyContent: 'center' }}>
                  {item.icon}
                </Box>

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
                  gutterBottom
                  sx={{
                    color: 'rgba(0, 0, 0, 0.8)', // Texto gris oscuro
                    fontSize: '0.85rem',
                    px: 2,
                  }}
                >
                  {item.subtitle}
                </Typography>

                <List
                  sx={{
                    p: 0,
                    color: '#000000', // Texto negro
                    display: 'inline-block',
                    textAlign: 'left',
                  }}
                >
                  {item.bullets.map((bullet, i) => (
                    <ListItem
                      key={i}
                      disableGutters
                      sx={{
                        fontSize: '0.85rem',
                        color: '#000000', // Texto negro
                        py: 0.3,
                        px: 2,
                      }}
                    >
                      <ListItemText
                        primary={`• ${bullet}`}
                        primaryTypographyProps={{
                          fontSize: '0.85rem',
                          sx: { color: '#000000' },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>

                <Typography
                  variant="body1"
                  sx={{
                    mt: 2,
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#000000', // Texto negro
                  }}
                >
                  {item.price}
                </Typography>
              </CardContent>

              <CardActions sx={{ mt: 'auto', justifyContent: 'center', mb: 2 }}>
                <CotizarButton onClick={() => handleCotizar(item.title)}>
                  Cotizar
                </CotizarButton>
              </CardActions>
            </GlassCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PublicidadDigital;
