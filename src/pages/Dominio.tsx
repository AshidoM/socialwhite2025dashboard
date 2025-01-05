// src/components/Dominio.tsx

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
  Button,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import LanguageIcon from '@mui/icons-material/Language';
import styled from 'styled-components';

/**
 * Interface para los ítems de Dominio.
 */
interface DominioItem {
  title: string;
  bullets: string[];
  icon: React.ReactNode;
}

/**
 * Datos de los servicios de Dominio.
 */
const dominioData: DominioItem[] = [
  {
    title: 'Proveedores de Dominio',
    bullets: [
      'Integración automática con despliegues',
      'SSL gratuito',
      'CDN global incluida',
      'Gestión sencilla desde el dashboard',
    ],
    icon: <LanguageIcon fontSize="large" />,
  },
  {
    title: 'GoDaddy',
    bullets: [
      'Precios competitivos y grandes descuentos',
      'Adquiere 3 años por el precio de 1 o 2 años',
      'Amplia variedad de extensiones de dominio',
      'Privacidad de dominio incluida',
      'Soporte 24/7',
    ],
    icon: <LanguageIcon fontSize="large" />, // Usar un ícono adecuado si está disponible
  },
  {
    title: 'Dominio Personalizado',
    bullets: [
      'Configuración a medida según tus necesidades',
      'Integración con cualquier proveedor de hosting',
      'Gestión avanzada de DNS',
      'Migración de dominios sin interrupciones',
      'Soporte técnico dedicado',
    ],
    icon: <LanguageIcon fontSize="large" />,
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
 * Dominio Component
 */
const Dominio: React.FC = () => {
  const handleCotizar = (servicio: string) => {
    const mensaje = `Hola, me gustaría cotizar el servicio de ${servicio}.`;
    const telefono = '5219999999999'; // Reemplaza con tu número de WhatsApp en formato internacional sin '+'
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
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
          Servicios de Dominio
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            color: 'rgba(0, 0, 0, 0.7)', // Texto gris oscuro
            fontSize: '0.9rem',
          }}
        >
          Gestiona y personaliza tus dominios con los mejores proveedores
        </Typography>
      </Box>

      {/* Cards de Servicios de Dominio */}
      <Grid container spacing={4} justifyContent="center">
        {dominioData.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <GlassCard>
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
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
                  {/* Iconos de Proveedores */}
                  {item.icon && (
                    <Avatar
                      sx={{
                        backgroundColor: 'transparent !important', // Quitar fondo
                        svg: {
                          fill: '#000000 !important', // Icono negro
                        },
                      }}
                    >
                      {item.icon}
                    </Avatar>
                  )}
                </Box>
                <List>
                  {item.bullets.map((bullet, i) => (
                    <ListItem key={i} sx={{ paddingY: 0.5 }}>
                      <ListItemIcon>
                        <CheckIcon sx={{ color: '#000000', fontSize: '1rem' }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={bullet}
                        primaryTypographyProps={{
                          fontSize: '0.85rem',
                          sx: { color: '#000000' },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <Box sx={{ textAlign: 'center', mt: 2, mb: 2 }}>
                <CotizarButton onClick={() => handleCotizar(item.title)}>
                  Cotizar Servicio
                </CotizarButton>
              </Box>
            </GlassCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dominio;
