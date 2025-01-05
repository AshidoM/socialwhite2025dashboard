// src/components/Contacto.tsx

import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Snackbar,
  Alert as MuiAlert,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styled from 'styled-components';

// Alert personalizado usando styled-components
const Alert = styled(MuiAlert)`
  && {
    background-color: #555555;
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.3);

    .MuiAlert-icon {
      color: #ffffff;
    }
  }
`;

const Contacto: React.FC = () => {
  // Estado para el formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  // Estado para mostrar notificación
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  // Manejar cambios en los campos del formulario
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica para enviar el formulario, por ejemplo, mediante EmailJS o una API personalizada
    console.log('Formulario enviado:', formData);
    // Resetear el formulario
    setFormData({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: '',
    });
    // Mostrar notificación
    setSnackbarMessage('¡Mensaje enviado exitosamente!');
    setSnackbarSeverity('success');
    setOpenSnackbar(true);
  };

  // Manejar el cierre del Snackbar
  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
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
          Contacto
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            color: 'rgba(0, 0, 0, 0.7)', // Texto gris oscuro
            fontSize: '0.9rem',
          }}
        >
          Estamos aquí para ayudarte. Contáctanos para cualquier consulta y te
          responderemos lo antes posible.
        </Typography>
      </Box>

      {/* Sección de Información de Contacto y Formulario */}
      <Grid container spacing={4} justifyContent="center">
        {/* Información de Contacto */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              padding: 2,
              backgroundColor: 'rgba(0,0,0,0.05)', // Efecto glass
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(0,0,0,0.2)',
              borderRadius: '8px',
              color: '#000000', // Texto negro
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-6px)',
                boxShadow: '0 6px 12px rgba(0,0,0,0.5)',
              },
            }}
          >
            <CardContent>
              {/* Teléfono */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PhoneIcon sx={{ mr: 1, color: '#000000' }} />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#000000', // Texto negro
                  }}
                >
                  Teléfono
                </Typography>
              </Box>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ fontSize: '0.85rem', color: '#000000' }}
              >
                +52 712 175 4033
              </Typography>

              {/* Email */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmailIcon sx={{ mr: 1, color: '#000000' }} />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#000000', // Texto negro
                  }}
                >
                  Email
                </Typography>
              </Box>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ fontSize: '0.85rem', color: '#000000' }}
              >
                ankercat@outlook.com
              </Typography>

              {/* Ubicación */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOnIcon sx={{ mr: 1, color: '#000000' }} />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#000000', // Texto negro
                  }}
                >
                  Ubicación
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{ fontSize: '0.85rem', color: '#000000' }}
              >
                Atlacomulco, México
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Formulario de Contacto */}
        <Grid item xs={12} md={8}>
          <Card
            sx={{
              padding: 2,
              backgroundColor: 'rgba(0,0,0,0.05)', // Efecto glass
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(0,0,0,0.2)',
              borderRadius: '8px',
              color: '#000000', // Texto negro
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-6px)',
                boxShadow: '0 6px 12px rgba(0,0,0,0.5)',
              },
            }}
          >
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  {/* Nombre */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Nombre"
                      name="nombre"
                      variant="outlined"
                      fullWidth
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      InputLabelProps={{
                        style: { color: '#000000', opacity: 0.7 },
                      }}
                      InputProps={{
                        style: { color: '#000000', borderColor: 'rgba(0,0,0,0.3)' },
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(0,0,0,0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(0,0,0,0.5)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#000000',
                          },
                        },
                      }}
                    />
                  </Grid>

                  {/* Email */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Email"
                      name="email"
                      variant="outlined"
                      type="email"
                      fullWidth
                      required
                      value={formData.email}
                      onChange={handleChange}
                      InputLabelProps={{
                        style: { color: '#000000', opacity: 0.7 },
                      }}
                      InputProps={{
                        style: { color: '#000000', borderColor: 'rgba(0,0,0,0.3)' },
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(0,0,0,0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(0,0,0,0.5)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#000000',
                          },
                        },
                      }}
                    />
                  </Grid>

                  {/* Asunto */}
                  <Grid item xs={12}>
                    <TextField
                      label="Asunto"
                      name="asunto"
                      variant="outlined"
                      fullWidth
                      required
                      value={formData.asunto}
                      onChange={handleChange}
                      InputLabelProps={{
                        style: { color: '#000000', opacity: 0.7 },
                      }}
                      InputProps={{
                        style: { color: '#000000', borderColor: 'rgba(0,0,0,0.3)' },
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(0,0,0,0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(0,0,0,0.5)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#000000',
                          },
                        },
                      }}
                    />
                  </Grid>

                  {/* Mensaje */}
                  <Grid item xs={12}>
                    <TextField
                      label="Mensaje"
                      name="mensaje"
                      variant="outlined"
                      multiline
                      rows={4}
                      fullWidth
                      required
                      value={formData.mensaje}
                      onChange={handleChange}
                      InputLabelProps={{
                        style: { color: '#000000', opacity: 0.7 },
                      }}
                      InputProps={{
                        style: { color: '#000000', borderColor: 'rgba(0,0,0,0.3)' },
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(0,0,0,0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(0,0,0,0.5)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#000000',
                          },
                        },
                      }}
                    />
                  </Grid>

                  {/* Botones */}
                  <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      endIcon={<WhatsAppIcon />}
                      sx={{
                        fontSize: '0.85rem',
                        backgroundColor: 'rgba(0,0,0,0.1)',
                        color: '#000000', // Texto negro
                        border: '1px solid rgba(0,0,0,0.3)',
                        backdropFilter: 'blur(6px)',
                        '&:hover': {
                          backgroundColor: 'rgba(0,0,0,0.2)',
                          borderColor: 'rgba(0,0,0,0.5)',
                        },
                      }}
                    >
                      Enviar Mensaje
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Snackbar para notificación de envío exitoso */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contacto;
