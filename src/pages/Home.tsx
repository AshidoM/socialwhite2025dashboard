// src/pages/Home.tsx

import React from 'react';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Precios from './Precios'; // Importa el componente Precios
import Equipo from './Equipo'; // Importa el componente Equipo
import Acerca from './Acerca'; // Importa el componente Acerca

const Home: React.FC = () => {
  // Configuración del carrusel
  const settings = {
    dots: false, // Opcional: Puedes ocultar los puntos si lo prefieres
    infinite: true,
    speed: 2000, // Aumenta la duración de la transición para simular un movimiento más suave y continuo
    slidesToShow: 5, // Número de logos visibles en pantallas grandes
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Configura el autoplaySpeed a 0 para intentar un desplazamiento continuo
    cssEase: "linear", // Usa una transición lineal para un movimiento constante
    pauseOnHover: false, // Evita que el carrusel se pause al pasar el cursor
    responsive: [
      {
        breakpoint: 1280, // Pantallas grandes
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 960, // Medianas pantallas
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600, // Pequeñas pantallas
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

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
        <Slider {...settings}>
          {tecnologias.concat(tecnologias).map((tecnologia, index) => ( // Duplicar la lista para un bucle más fluido
            <Box key={index} sx={{ padding: 2 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '120px',
                  background: 'rgba(255, 255, 255, 0.1)', // Fondo semi-transparente
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <img
                  src={tecnologia.img}
                  alt={tecnologia.name}
                  style={{
                    maxWidth: '80%',
                    maxHeight: '80%',
                  }}
                />
              </Box>
            </Box>
          ))}
        </Slider>
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
