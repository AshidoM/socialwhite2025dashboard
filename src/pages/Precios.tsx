// src/components/Precios.tsx

import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  CircularProgress,
} from '@mui/material';
import { supabase } from '../lib/supabaseClient';
import PlanCard from './PlanCard';

interface CaracteristicaPlan {
  id: number;
  plan_id: number;
  caracteristica: string;
}

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

const Precios: React.FC = () => {
  const [planes, setPlanes] = useState<Plan[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPlanes = async () => {
      setLoading(true);
      try {
        // Obtener todos los planes
        const { data: planesData, error: planesError } = await supabase
          .from<Plan>('planes')
          .select('*');

        if (planesError) {
          throw planesError;
        }

        // Obtener todas las características
        const { data: caracteristicasData, error: caracteristicasError } = await supabase
          .from<CaracteristicaPlan>('caracteristicas_planes')
          .select('*');

        if (caracteristicasError) {
          throw caracteristicasError;
        }

        // Asociar características a cada plan
        const planesConCaracteristicas: Plan[] = (planesData || []).map((plan) => ({
          ...plan,
          caracteristicas: (caracteristicasData || [])
            .filter((caracteristica) => caracteristica.plan_id === plan.id)
            .map((caracteristica) => caracteristica.caracteristica),
        }));

        // Definir el Plan Personalizado
        const customPlan: Plan = {
          id: 4,
          nombre: 'Plan Personalizado',
          costo_mensual: 0, // Se mostrará 'Contactar para cotización'
          descripcion: null,
          limite_sitios_web: null,
          costo_adicional_inicial: null,
          costo_adicional_mensual: null,
          es_personalizado: true,
          caracteristicas: [
            'Número de sitios ilimitado',
            'Soporte dedicado 24/7',
            'Infraestructura personalizada',
            'Características a medida',
            'Soluciones empresariales',
          ],
        };

        // Agregar el Plan Personalizado a la lista de planes
        planesConCaracteristicas.push(customPlan);

        setPlanes(planesConCaracteristicas);
      } catch (error) {
        console.error('Error al obtener los planes o las características:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanes();
  }, []);

  const handleCotizar = (planName: string) => {
    const mensaje = `Hola, me gustaría cotizar el servicio de ${planName}.`;
    const telefono = '1234567890'; // Reemplázalo con tu número
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '50vh',
          backgroundColor: '#ffffff', // Fondo blanco
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    );
  }

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
            fontSize: '2rem',
            fontWeight: 700,
            color: '#1976d2', // Azul más fuerte
            marginBottom: 2,
          }}
        >
          Nuestros Planes
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: 'rgba(0, 0, 0, 0.7)', // Texto gris oscuro
            fontSize: '1rem',
          }}
        >
          Elige el plan que mejor se adapte a tus necesidades
        </Typography>
      </Box>

      {/* Grid con las Cards de los planes */}
      <Grid container spacing={4} justifyContent="center">
        {planes.map((plan) => {
          const isRecommended = plan.id === 2; // Asumiendo que el Plan Profesional tiene id 2
          return (
            <Grid item xs={12} sm={6} md={3} key={plan.id} sx={{ display: 'flex' }}>
              <PlanCard
                plan={plan}
                isRecommended={isRecommended}
                handleCotizar={handleCotizar}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Precios;
