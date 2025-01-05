// src/pages/Registrarse.tsx

import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Snackbar,
  Alert as MuiAlert,
} from '@mui/material';
import styled from 'styled-components';
import { supabase } from '../lib/supabaseClient';
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';

/**
 * Definición de las props para el componente Registrarse
 */
interface RegistrarseProps {
  showCard?: boolean; // Prop para determinar si se muestra la tarjeta
  onClose?: () => void; // Prop para cerrar el modal después del registro
}

/**
 * Alert personalizado usando styled-components
 */
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

/**
 * StyledButton para "Registrarse".
 */
const StyledButton = styled.button`
  font-family: 'Futursita', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-transform: none;
  background-color: rgba(0, 0, 0, 0.1); /* Fondo gris claro */
  color: #000000; /* Texto negro */
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 12px 0;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
  margin-top: 16px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    border-color: rgba(0, 0, 0, 0.5);
  }

  &:focus {
    outline: none;
  }
`;

/**
 * Estilos para los campos de texto
 */
const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 20px;

    label {
      color: #000000;
      opacity: 0.7;
      font-weight: 500;
    }

    .MuiOutlinedInput-root {
      color: #000000;
      border-color: rgba(0, 0, 0, 0.3);

      &:hover fieldset {
        border-color: rgba(0, 0, 0, 0.5);
      }

      &.Mui-focused fieldset {
        border-color: #000000;
      }
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: rgba(0, 0, 0, 0.3);
    }

    input {
      padding: 14px 12px;
    }
  }
`;

/**
 * Contenedor principal
 */
const Container = styled.div`
  padding: 40px;
  min-height: 100vh;
  background-color: #ffffff; /* Fondo blanco */
  color: #000000; /* Texto negro */
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

/**
 * Título y Subtítulo
 */
const TitleBox = styled.div`
  text-align: center;
  margin-bottom: 24px;

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #000000; /* Texto negro */
    margin-bottom: 8px;
  }

  p {
    color: rgba(0, 0, 0, 0.7); /* Texto gris oscuro */
    font-size: 0.95rem;
  }
`;

const Registrarse: React.FC<RegistrarseProps> = ({ showCard = true, onClose }) => {
  // Estado para el formulario
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    email: '',
    telefono: '',
    contraseña: '',
    confirmarContraseña: '',
  });

  // Estado para mostrar notificación
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const navigate = useNavigate();

  // Manejar cambios en los campos del formulario
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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

  // Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar que las contraseñas coincidan
    if (formData.contraseña !== formData.confirmarContraseña) {
      setSnackbarMessage('Las contraseñas no coinciden.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    // Validar campos adicionales si es necesario
    if (!formData.email || !formData.nombreCompleto || !formData.contraseña) {
      setSnackbarMessage('Por favor, completa todos los campos requeridos.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    try {
      // Hash de la contraseña
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(formData.contraseña, salt);

      // Insertar datos en la tabla 'perfiles'
      const { data, error } = await supabase
        .from('perfiles')
        .insert([
          {
            nombre_completo: formData.nombreCompleto,
            email: formData.email,
            telefono: formData.telefono,
            contraseña: hashedPassword,
          },
        ]);

      if (error) {
        throw error;
      }

      // Mostrar notificación de éxito
      setSnackbarMessage('¡Registro exitoso!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);

      // Limpiar el formulario
      setFormData({
        nombreCompleto: '',
        email: '',
        telefono: '',
        contraseña: '',
        confirmarContraseña: '',
      });

      // Redirigir o cerrar el modal
      if (showCard) {
        navigate('/'); // Redirigir a la página de inicio u otra página
      } else if (onClose) {
        onClose(); // Cerrar el modal si se proporciona onClose
      }
    } catch (error: any) {
      console.error('Error al registrarse:', error.message);
      setSnackbarMessage(`Error: ${error.message}`);
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  // Formulario de Registro
  const form = (
    <>
      <form onSubmit={handleSubmit}>
        <StyledTextField
          label="Nombre Completo"
          name="nombreCompleto"
          variant="outlined"
          fullWidth
          required
          value={formData.nombreCompleto}
          onChange={handleChange}
        />

        <StyledTextField
          label="Correo Electrónico"
          name="email"
          variant="outlined"
          type="email"
          fullWidth
          required
          value={formData.email}
          onChange={handleChange}
        />

        <StyledTextField
          label="Teléfono"
          name="telefono"
          variant="outlined"
          type="tel"
          fullWidth
          value={formData.telefono}
          onChange={handleChange}
        />

        <StyledTextField
          label="Contraseña"
          name="contraseña"
          variant="outlined"
          type="password"
          fullWidth
          required
          value={formData.contraseña}
          onChange={handleChange}
        />

        <StyledTextField
          label="Confirmar Contraseña"
          name="confirmarContraseña"
          variant="outlined"
          type="password"
          fullWidth
          required
          value={formData.confirmarContraseña}
          onChange={handleChange}
        />

        <StyledButton type="submit">
          Registrarse
        </StyledButton>
      </form>

      {/* Snackbar para notificación */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );

  // Renderizado condicional basado en la prop showCard
  if (showCard) {
    return (
      <Container>
        <Box
          sx={{
            backgroundColor: 'rgba(0,0,0,0.05)', // Efecto glass
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(0,0,0,0.2)',
            borderRadius: '12px',
            padding: '32px 24px',
            color: '#000000', // Texto negro
            maxWidth: '400px',
            width: '100%',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Título y Subtítulo */}
          <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Registrarse
            </Typography>
            <Typography variant="subtitle2">
              Crea una cuenta para acceder a todos nuestros servicios
            </Typography>
          </Box>

          {/* Formulario de Registro */}
          {form}
        </Box>
      </Container>
    );
  } else {
    return (
      <>
        {/* Solo el formulario de Registro sin la tarjeta */}
        {form}
      </>
    );
  }
};

export default Registrarse;
