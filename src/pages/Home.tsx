// src/pages/Home.tsx

import React from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Importar Autoplay desde 'swiper/modules'
import 'swiper/css';
import 'swiper/css/autoplay';
import Precios from './Precios'; // Importa el componente Precios
import Equipo from './Equipo'; // Importa el componente Equipo
import Acerca from './Acerca'; // Importa el componente Acerca

const Home: React.FC = () => {
  // Lista de tecnologías con sus URLs de imagen
  const tecnologias = [
    {
      name: "HTML5",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "React",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Vite",
      img: "https://vitejs.dev/logo.svg",
    },
    {
      name: "Supabase",
      img: "https://elest.io/images/softwares/284/logo.png",
    },
    {
      name: "PostgreSQL",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "CSS3",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Material-UI",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    },
  ];

  return (
    <Box
      sx={{
        padding: 2, // Reducir padding general
        minHeight: '100vh',
        backgroundColor: '#ffffff', // Fondo blanco
        color: '#000000', // Texto negro
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', // Alinear al inicio
        alignItems: 'center',
      }}
    >
      {/* Espacio superior reducido */}
      <Box sx={{ height: 50 }} /> {/* Añadir un espacio pequeño si es necesario */}

      {/* Carrusel de Tecnologías */}
      <Box sx={{ maxWidth: 1200, width: '100%', marginBottom: 8 }}>
        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          sx={{
            textAlign: 'center',
            fontSize: '2rem',
            fontWeight: 700,
            color: '#1976d2', // Azul más fuerte
            marginBottom: 4, // Reducir margen inferior
          }}
        >
          Tecnologías que Utilizamos
        </Typography>
        <Swiper
          modules={[Autoplay]} // Añadir el módulo Autoplay aquí
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0, // Sin retraso entre transiciones
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={5000} // Controla la velocidad del desplazamiento
          freeMode={true}
          allowTouchMove={false} // Deshabilita el movimiento táctil para evitar interrupciones
          breakpoints={{
            1280: {
              slidesPerView: 5,
            },
            960: {
              slidesPerView: 4,
            },
            600: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 2,
            },
          }}
          style={{ width: '100%' }} // Asegura que el Swiper ocupe el 100% del contenedor
        >
          {tecnologias.map((tecnologia, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '160px', // Aumentar la altura del contenedor
                  background: 'rgba(255, 255, 255, 0.1)', // Fondo semi-transparente
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
                  },
                  padding: 2,
                }}
              >
                <img
                  src={tecnologia.img}
                  alt={tecnologia.name}
                  style={{
                    maxWidth: '80%',
                    maxHeight: '90%', // Aumentar el maxHeight para ajustarse al nuevo contenedor
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Sección de Precios */}
      <Precios />

      {/* Sección de Equipo */}
      <Equipo />

      {/* Sección de Acerca de */}
      <Acerca />
    </Box>
  );
};

export default Home;
