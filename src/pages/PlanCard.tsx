// src/components/PlanCard.tsx

import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import styled from 'styled-components';

/**
 * Interfaces
 */
interface Plan {
  id: number;
  nombre: string;
  costo_mensual: number;
  descripcion: string | null;
  limite_sitios_web: number | null;
  costo_adicional_inicial: number | null;
  costo_adicional_mensual: number | null;
  es_personalizado: boolean;
  caracteristicas: string[];
}

interface PlanCardProps {
  plan: Plan;
  isRecommended: boolean;
  handleCotizar: (planName: string) => void;
}

/**
 * Card con sombra consistente y altura completa
 */
const StyledCard = styled(Card)`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #ffffff; /* Fondo blanco */
  border-radius: 12px;
  color: #000000; /* Texto negro */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra consistente */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-4px); /* Sutil elevación al hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Sombra más intensa al hover */
  }
`;

/**
 * StyledButton para "Cotizar" y "Seleccionar Plan".
 */
const ActionButton = styled(Button)`
  font-size: 0.85rem;
  background-color: #1976d2; /* Azul más fuerte */
  color: #ffffff; /* Texto blanco */
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1565c0; /* Azul más oscuro al hover */
  }
`;

/**
 * PlanCard Component
 */
const PlanCard: React.FC<PlanCardProps> = ({
  plan,
  isRecommended,
  handleCotizar,
}) => {
  const [open, setOpen] = useState(false);

  const featuresToShow = plan.caracteristicas.slice(0, 5);
  const additionalFeaturesCount =
    plan.caracteristicas.length > 5
      ? plan.caracteristicas.length - 5
      : 0;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledCard>
      {/* Etiqueta "RECOMENDADO" */}
      {isRecommended && (
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            backgroundColor: '#1976d2', // Azul primario para resaltar
            color: '#ffffff',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '1px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)', // Sombra para dar profundidad
          }}
        >
          RECOMENDADO
        </Box>
      )}

      <CardContent
        sx={{
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontSize: '1.3rem',
            fontWeight: 700,
            color: '#1976d2', // Azul más fuerte
            marginBottom: 1.5,
          }}
        >
          {plan.nombre}
        </Typography>

        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: '#000000', // Texto negro
            fontWeight: 700,
            marginBottom: 1.5,
            fontSize: '1.2rem',
          }}
        >
          {plan.es_personalizado
            ? 'Contactar para cotización'
            : `$${plan.costo_mensual.toLocaleString('es-MX')} MXN / mes`}
        </Typography>

        <List sx={{ p: 0, color: '#000000', flexGrow: 1 }}>
          {featuresToShow.map((feature, index) => (
            <ListItem
              key={index}
              disableGutters
              sx={{
                fontSize: '0.85rem',
                color: '#000000',
                paddingY: 0.5,
              }}
            >
              <ListItemIcon sx={{ minWidth: 28 }}>
                <CheckIcon sx={{ color: '#1976d2', fontSize: '0.9rem' }} />
              </ListItemIcon>
              <ListItemText
                primary={feature}
                primaryTypographyProps={{
                  fontSize: '0.85rem',
                  sx: { color: '#000000' },
                }}
              />
            </ListItem>
          ))}
          {additionalFeaturesCount > 0 && (
            <ListItem
              disableGutters
              sx={{
                fontSize: '0.85rem',
                color: '#000000',
                fontStyle: 'italic',
              }}
            >
              <ListItemIcon sx={{ minWidth: 28 }}>
                <CheckIcon sx={{ color: '#1976d2', fontSize: '0.9rem' }} />
              </ListItemIcon>
              <ListItemText
                primary={`y ${additionalFeaturesCount} más...`}
                primaryTypographyProps={{
                  fontSize: '0.85rem',
                  sx: { color: '#000000' },
                }}
              />
            </ListItem>
          )}
        </List>
      </CardContent>

      {/* Botones de acción */}
      <Box sx={{ textAlign: 'center', padding: '0 24px 16px 24px' }}>
        <ActionButton onClick={() => handleCotizar(plan.nombre)}>
          {plan.es_personalizado ? 'Cotizar' : 'Seleccionar Plan'}
        </ActionButton>
        {/* Botón "Ver más detalles" */}
        <Button
          fullWidth
          sx={{
            mt: 1.5,
            fontSize: '0.85rem',
            backgroundColor: '#f5f5f5', // Gris claro
            color: '#000000',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '8px 16px',
            transition: 'background-color 0.3s ease, border-color 0.3s ease',
            '&:hover': {
              backgroundColor: '#e0e0e0',
              borderColor: '#bdbdbd',
            },
          }}
          onClick={handleOpen}
        >
          Ver más detalles
        </Button>
      </Box>

      {/* Dialog para mostrar más detalles */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ backgroundColor: '#ffffff', color: '#1976d2' }}>
          Detalles de {plan.nombre}
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: '#ffffff', color: '#000000' }}>
          <List>
            {plan.caracteristicas.map((feature, index) => (
              <ListItem key={index} disableGutters>
                <ListItemIcon sx={{ minWidth: 28 }}>
                  <CheckIcon sx={{ color: '#1976d2', fontSize: '0.9rem' }} />
                </ListItemIcon>
                <ListItemText
                  primary={feature}
                  primaryTypographyProps={{
                    fontSize: '0.85rem',
                    sx: { color: '#000000', letterSpacing: '0.5px' },
                  }}
                />
              </ListItem>
            ))}
            {/* Sitios Adicionales y Costos */}
            {plan.limite_sitios_web !== null && (
              <>
                <ListItem disableGutters>
                  <ListItemText
                    primary="Sitios Adicionales:"
                    primaryTypographyProps={{
                      fontSize: '0.85rem',
                      sx: { color: '#1976d2', fontWeight: 600, letterSpacing: '0.5px' },
                    }}
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText
                    primary={`Costo inicial: ${
                      plan.costo_adicional_inicial
                        ? `$${plan.costo_adicional_inicial.toLocaleString('es-MX')} MXN`
                        : 'N/A'
                    }`}
                    primaryTypographyProps={{
                      fontSize: '0.85rem',
                      sx: { color: '#000000', letterSpacing: '0.5px' },
                    }}
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText
                    primary={`Costo mensual: ${
                      plan.costo_adicional_mensual
                        ? `$${plan.costo_adicional_mensual.toLocaleString('es-MX')} MXN`
                        : 'N/A'
                    }`}
                    primaryTypographyProps={{
                      fontSize: '0.85rem',
                      sx: { color: '#000000', letterSpacing: '0.5px' },
                    }}
                  />
                </ListItem>
              </>
            )}
          </List>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: '#ffffff' }}>
          <Button onClick={handleClose} sx={{ color: '#1976d2', fontSize: '0.85rem' }}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </StyledCard>
  );
};

export default PlanCard;
