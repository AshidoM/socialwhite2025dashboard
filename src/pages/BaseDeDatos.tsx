// src/components/BaseDeDatos.tsx

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
import StorageIcon from '@mui/icons-material/Storage';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import BuildIcon from '@mui/icons-material/Build';
import styled from 'styled-components';

/**
 * Interface para los ítems de Base de Datos.
 */
interface BaseDeDatosItem {
  title: string;
  bullets: string[];
  icon: React.ReactNode;
}

/**
 * Datos de los servicios de Base de Datos.
 */
const baseDeDatosData: BaseDeDatosItem[] = [
  {
    title: 'Creación de Base de Datos',
    bullets: [
      'Configuración inicial de la base de datos',
      'Implementación de tablas y relaciones',
      'Políticas de seguridad RLS',
      'Autenticación y autorización',
      'Backups automáticos',
    ],
    icon: <StorageIcon fontSize="large" />,
  },
  {
    title: 'Migración a la Nube',
    bullets: [
      'Análisis de la estructura actual',
      'Plan de migración personalizado',
      'Migración de datos sin pérdidas',
      'Pruebas de integridad',
      'Soporte post-migración',
    ],
    icon: <CloudUploadIcon fontSize="large" />,
  },
  {
    title: 'Personalizado',
    bullets: [
      'Consultoría especializada',
      'Desarrollo de funciones personalizadas',
      'Optimización de rendimiento',
      'Integración con servicios externos',
      'Soporte técnico dedicado',
    ],
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
 * BaseDeDatos Component
 */
const BaseDeDatos: React.FC = () => {
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
          Servicios de Base de Datos
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            color: 'rgba(0, 0, 0, 0.7)', // Texto gris oscuro
            fontSize: '0.9rem',
          }}
        >
          Soluciones robustas y escalables con PostgreSQL y Supabase
        </Typography>
      </Box>

      {/* Cards Principales */}
      <Grid container spacing={4} justifyContent="center">
        {baseDeDatosData.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <GlassCard>
              <Box sx={{ p: 2 }}>
                <Avatar
                  sx={{
                    margin: '0 auto 16px auto',
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
    </Box>
  );
};

export default BaseDeDatos;
