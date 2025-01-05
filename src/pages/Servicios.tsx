// src/pages/Servicios.tsx
import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

const Servicios: React.FC = () => {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Servicios
        </Typography>
        <Typography variant="body1" gutterBottom>
          Ofrecemos una variedad de servicios para ayudarte a crecer tu presencia online:
        </Typography>
        <List>
          <ListItem>
            <Link component={RouterLink} to="/servicios/plantillas-web" underline="hover">
              <ListItemText primary="Plantillas Web" />
            </Link>
          </ListItem>
          <ListItem>
            <Link component={RouterLink} to="/servicios/publicidad-digital" underline="hover">
              <ListItemText primary="Publicidad Digital" />
            </Link>
          </ListItem>
          <ListItem>
            <Link component={RouterLink} to="/servicios/hosting" underline="hover">
              <ListItemText primary="Hosting" />
            </Link>
          </ListItem>
          <ListItem>
            <Link component={RouterLink} to="/servicios/base-de-datos" underline="hover">
              <ListItemText primary="Base de Datos" />
            </Link>
          </ListItem>
          <ListItem>
            <Link component={RouterLink} to="/servicios/dominio" underline="hover">
              <ListItemText primary="Dominio" />
            </Link>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Servicios;
