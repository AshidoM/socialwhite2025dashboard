// src/components/Equipo.tsx

import React from 'react';
import { Box, Grid, Typography, Avatar } from '@mui/material';
import styled from 'styled-components';

/**
 * Datos del Equipo
 */
const equipoData = [
  {
    nombre: 'Juan Pérez',
    rol: 'Desarrollador Frontend',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    nombre: 'María López',
    rol: 'Diseñadora UX/UI',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    nombre: 'Carlos García',
    rol: 'Gestor de Proyectos',
    img: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
  {
    nombre: 'Ana Martínez',
    rol: 'Especialista en Marketing',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

/**
 * StyledCard para miembros del equipo con efecto glass morphism.
 */
const StyledCard = styled(Box)`
  background: rgba(255, 255, 255, 0.15); /* Fondo semi-transparente */
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3); /* Borde transparente */
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15); /* Sombra 3D */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  padding: 24px;
  height: 100%;

  &:hover {
    transform: translateY(-6px); /* Elevación al hover */
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25); /* Sombra más intensa al hover */
  }
`;

const Equipo: React.FC = () => {
  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: '#ffffff', // Fondo blanco
        color: '#000000', // Texto negro
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          fontSize: '2rem',
          fontWeight: 700,
          color: '#1976d2', // Azul más fuerte
          textAlign: 'center',
          marginBottom: 4,
        }}
      >
        Nuestro Equipo
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {equipoData.map((miembro, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StyledCard>
              <Avatar
                src={miembro.img}
                alt={miembro.nombre}
                sx={{
                  width: 80,
                  height: 80,
                  margin: '0 auto 16px auto',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#1976d2', // Azul más fuerte
                  marginBottom: 1,
                }}
              >
                {miembro.nombre}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '0.95rem',
                  color: 'rgba(0, 0, 0, 0.8)',
                }}
              >
                {miembro.rol}
              </Typography>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Equipo;
