// src/components/ProviderCard.tsx

import React from 'react';
import {
  Card,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Typography,
  Avatar,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import LanguageIcon from '@mui/icons-material/Language'; // Icono para dominio personalizado

interface ProviderCardProps {
  logoSrc?: string;
  logoAlt?: string;
  title: string;
  features: string[];
  onCotizar: () => void;
}

const ProviderCard: React.FC<ProviderCardProps> = ({
  logoSrc,
  logoAlt,
  title,
  features,
  onCotizar,
}) => {
  return (
    <Card
      sx={{
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: 6,
        },
        height: '100%',
        textAlign: 'center',
      }}
    >
      <Box>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          {logoSrc ? (
            <img src={logoSrc} alt={logoAlt} style={{ width: '80px', height: 'auto' }} />
          ) : (
            <Avatar
              sx={{
                bgcolor: 'grey.300',
                margin: '0 auto',
                width: 56,
                height: 56,
              }}
            >
              <LanguageIcon fontSize="large" />
            </Avatar>
          )}
        </Box>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <List>
          {features.map((feature, index) => (
            <ListItem key={index} sx={{ py: 0.5 }}>
              <ListItemIcon>
                <CheckIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={feature} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Button variant="contained" color="primary" onClick={onCotizar}>
          Cotizar Servicio
        </Button>
      </Box>
    </Card>
  );
};

export default ProviderCard;
