// src/pages/PlantillasWeb.tsx

import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Button,
  useMediaQuery,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  CircularProgress,
  Alert,
} from '@mui/material';
import styled from 'styled-components';
import { supabase } from '../lib/supabaseClient';
import VisibilityIcon from '@mui/icons-material/Visibility';

/** 
 * Definimos las categorías disponibles.
 */
const CATEGORIES = [
  'Ver todas',
  'Comercio Electrónico',
  'Tienda',
  'Dashboard',
  'Blog',
  'Educación',
  'Personal',
];

/**
 * Estructura de datos para cada plantilla desde la vista.
 */
interface Plantilla {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  url_vista_previa: string;
  categorias: string[];
  tecnologias: Array<{
    id: number;
    nombre: string;
    imagen: string;
  }>;
}

/**
 * Función auxiliar para acomodar las tecnologías en filas de 3
 * para que no se encimen.
 */
function chunkArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
} 

/** 
 * Tarjeta personalizada con efecto glass.
 * - Más ancha (750px).
 * - border-radius reducido a 3px.
 */
const StyledCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border-color: rgba(0, 0, 0, 0.3);
  }
`;

/** 
 * Contenedor para la imagen.
 */
const ImageContainer = styled(Box)`
  position: relative;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  overflow: hidden;
`;

/** 
 * Botón "Ver Preview" con efecto glass,
 * colocado a la derecha del nombre y con texto e ícono en color negro.
 */
const PreviewButton = styled(Button)`
  font-family: 'Futursita', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: none;
  /* Texto en negro */
  color: #000000 !important;
  /* Fondo gris claro semitransparente */
  background-color: rgba(200, 200, 200, 0.6);
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.3s ease;

  /* Forzar el ícono a negro también */
  svg {
    fill: #000000 !important;
  }

  &:hover {
    background-color: rgba(160, 160, 160, 0.6);
  }
`;

/** 
 * Contenido de la tarjeta.
 */
const StyledCardContent = styled(CardContent)`
  flex-grow: 1;
  padding: 16px;
`;

/** 
 * Componente para mostrar tecnologías con logo y nombre.
 * - Margin bottom mayor para evitar que se encimen verticalmente.
 */
const TecnologiaBox = styled(Box)`
  display: flex;
  align-items: center;
  background-color: #dddddd;
  border-radius: 8px;
  padding: 2px 6px;
  margin: 4px;
  margin-bottom: 8px; 
`;

const TecnologiaLogo = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
  margin-right: 4px;
`;

const TecnologiaNombre = styled(Typography)`
  color: #000000;
  font-size: 0.6rem;
  letter-spacing: 0.5px;
`;

/** 
 * Componente para ajustar el ancho de la tarjeta.
 */
const CardWrapper = styled.div`
  width: 100%;
  max-width: 950px;  /* Aumentado a 950px */
  margin: 0 auto;
`;

const PlantillasWeb: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Ver todas');
  const isMobile = useMediaQuery('(max-width:600px)');
  const [plantillas, setPlantillas] = useState<Plantilla[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Obtener los datos de la vista 'v_plantillas_completas'
  const fetchPlantillas = async () => {
    setLoading(true);
    setError(null);

    const { data, error } = await supabase
      .from<Plantilla>('v_plantillas_completas')
      .select('*');

    if (error) {
      setError(error.message);
    } else {
      setPlantillas(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchPlantillas();
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredPlantillas =
    selectedCategory === 'Ver todas'
      ? plantillas
      : plantillas.filter((p) => p.categorias.includes(selectedCategory));

  return (
    <Box
      sx={{
        p: 2,
        minHeight: '100vh',
        backgroundColor: '#ffffff', // Fondo blanco
        color: '#000000',             // Texto negro
        letterSpacing: '2px',
      }}
    >
      {/* Filtro de Categorías */}
      {isMobile ? (
        <FormControl
          size="small"
          sx={{
            mb: 3,
            width: '100%',
          }}
        >
          <InputLabel
            id="select-categoria-label"
            sx={{ color: '#000000' }}
          >
            Filtrar por...
          </InputLabel>
          <Select
            labelId="select-categoria-label"
            label="Filtrar por..."
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            sx={{
              color: '#000000',
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(0,0,0,0.5)',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#000000',
              },
              '& .MuiSvgIcon-root': {
                color: '#000000',
              },
            }}
          >
            {CATEGORIES.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : (
        <Stack
          direction="row"
          spacing={1}
          sx={{
            mb: 3,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {CATEGORIES.map((cat) => (
            <Button
              key={cat}
              variant={cat === selectedCategory ? 'contained' : 'outlined'}
              onClick={() => handleCategoryChange(cat)}
              sx={{
                textTransform: 'none',
                fontWeight: 500,
                color: cat === selectedCategory ? '#ffffff' : 'rgba(0,0,0,0.7)',
                borderRadius: '5px',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(0,0,0,0.3)',
                ...(cat === selectedCategory
                  ? {
                      backgroundColor: 'rgba(0,0,0,0.2)',
                      borderColor: 'rgba(0,0,0,0.6)',
                    }
                  : {
                      backgroundColor: 'transparent',
                    }),
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.1)',
                },
              }}
            >
              {cat}
            </Button>
          ))}
        </Stack>
      )}

      {/* Estado de Carga */}
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress color="inherit" />
        </Box>
      )}

      {/* Manejo de Errores */}
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {/* Grid de Plantillas */}
      {!loading && !error && (
        <Grid container spacing={3} justifyContent="center">
          {filteredPlantillas.map((plantilla) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={plantilla.id}>
              <CardWrapper>
                <StyledCard>
                  {/* Sección de Imagen */}
                  <ImageContainer>
                    <CardMedia
                      component="img"
                      height="180"
                      image={plantilla.imagen}
                      alt={plantilla.nombre}
                      sx={{
                        objectFit: 'cover',
                        borderBottom: '1px solid rgba(0,0,0,0.1)',
                      }}
                    />
                  </ImageContainer>

                  {/* Contenido de la tarjeta */}
                  <StyledCardContent>
                    {/* Fila con el nombre y el botón "Ver Preview" a su derecha */}
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between', 
                        mb: 1 
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 'bold',
                          color: '#000000',
                          letterSpacing: '1px',
                        }}
                      >
                        {plantilla.nombre}
                      </Typography>

                      <PreviewButton
                        onClick={() =>
                          window.open(plantilla.url_vista_previa, '_blank', 'noopener,noreferrer')
                        }
                      >
                        <VisibilityIcon />
                        Preview
                      </PreviewButton>
                    </Box>

                    <Typography
                      variant="body2"
                      sx={{
                        mb: 2,
                        color: 'rgba(0,0,0,0.7)',
                        letterSpacing: '1px',
                      }}
                    >
                      {plantilla.descripcion}
                    </Typography>

                    {/* Tecnologías acomodadas en filas de 3 */}
                    {chunkArray(plantilla.tecnologias, 3).map((tecRow, idx) => (
                      <Stack
                        key={idx}
                        direction="row"
                        spacing={1}
                        flexWrap="wrap"
                        justifyContent="center"
                        sx={{ mb: 1 }}
                      >
                        {tecRow.map((tec) => (
                          <TecnologiaBox key={tec.id}>
                            <TecnologiaLogo src={tec.imagen} alt={tec.nombre} />
                            <TecnologiaNombre variant="body2">
                              {tec.nombre}
                            </TecnologiaNombre>
                          </TecnologiaBox>
                        ))}
                      </Stack>
                    ))}
                  </StyledCardContent>
                </StyledCard>
              </CardWrapper>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default PlantillasWeb;
