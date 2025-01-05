// src/components/Acerca.tsx

import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaLaptopCode, FaDatabase, FaCreditCard, FaCloud, FaTools, FaStar } from 'react-icons/fa';

// Variables de color para consistencia
const colors = {
  background: '#ffffff', // Fondo blanco
  text: '#000000', // Texto negro
  cardBackground: 'rgba(0, 0, 0, 0.05)', // Gris muy claro para tarjetas
  border: 'rgba(0, 0, 0, 0.1)', // Bordes sutiles
};

// Estilos para el carrusel de imágenes
const ImageSlider = styled(Slider)`
  && {
    .slick-slide div {
      outline: none; // Eliminar el contorno al enfocar
    }

    .slick-dots li button:before {
      color: ${colors.text}; // Puntos negros
    }

    .slick-prev:before,
    .slick-next:before {
      color: ${colors.text}; // Flechas negras
      font-size: 30px;
    }
  }
`;

// Estilos para cada imagen en el carrusel
const CarouselImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s;
  filter: brightness(0.9);

  &:hover {
    transform: scale(1.05);
    filter: brightness(1);
  }

  @media (max-width: 600px) {
    height: 200px;
  }
`;

// Estilos para los cards de servicios y razones
const ServiceCard = styled(Card)`
  && {
    background: ${colors.cardBackground};
    border: 1px solid ${colors.border};
    border-radius: 16px;
    transition: transform 0.3s, box-shadow 0.3s;
    height: 100%;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }
`;

// Estilos para los íconos de los servicios y razones
const IconWrapper = styled.div`
  font-size: 2rem;
  color: ${colors.text};
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
`;

const Acerca: React.FC = () => {
  // Configuración del carrusel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 960, // Pantallas medianas
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Pantallas pequeñas
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // URLs de las imágenes para el carrusel
  const carouselImages = [
    "https://v4.mui.com/static/images/themes-light.jpg",
    "https://s.tmimgcdn.com/scr/1200x627/271700/gamerzy-plantilla-react-js-para-deportes-electronicos-y-juegos_271706-original.jpg",
    "https://s.tmimgcdn.com/scr/1200x627/280200/plantilla-react-js-de-casino-en-linea-y-juegos-de-azar_280231-original.jpg",
  ];

  // Datos de servicios
  const servicios = [
    {
      icon: <FaLaptopCode />,
      titulo: "Diseño y Desarrollo Web",
      descripcion: "Creamos páginas web modernas, funcionales y atractivas, adaptadas a tus necesidades específicas. Ya sea un diseño completamente personalizado o basado en una plantilla optimizada, entregamos resultados que destacan por su calidad.",
    },
    {
      icon: <FaDatabase />,
      titulo: "Frontend y Backend",
      descripcion: "Nos encargamos de construir interfaces visualmente impactantes y desarrollar la lógica interna que respalda el funcionamiento eficiente de tu sitio web.",
    },
    {
      icon: <FaDatabase />,
      titulo: "Bases de Datos",
      descripcion: "Diseñamos, configuramos y gestionamos bases de datos robustas y seguras para garantizar un almacenamiento eficiente y confiable de tu información.",
    },
    {
      icon: <FaCreditCard />,
      titulo: "Conexión de Servicios de Pago",
      descripcion: "Integramos opciones de pago confiables como Stripe y PayPal, asegurando transacciones rápidas y seguras para tu negocio.",
    },
    {
      icon: <FaCloud />,
      titulo: "Hosting y Dominios",
      descripcion: "Nos encargamos de subir tu sitio a un hosting confiable y conectarlo con tu dominio, para que esté listo para funcionar de manera óptima.",
    },
  ];

  // Datos de por qué elegirnos
  const porQueElegirnos = [
    {
      icon: <FaStar />,
      titulo: "Experiencia Completa",
      descripcion: "Cubrimos todas las etapas del desarrollo web, para que no tengas que preocuparte por nada.",
    },
    {
      icon: <FaTools />,
      titulo: "Flexibilidad",
      descripcion: "Nos adaptamos a tus ideas, ya sea que busques un diseño exclusivo o soluciones basadas en plantillas.",
    },
    {
      icon: <FaTools />,
      titulo: "Soporte Personalizado",
      descripcion: "Te acompañamos durante todo el proceso y más allá, brindando atención personalizada y soluciones rápidas a tus necesidades.",
    },
  ];

  return (
    <Box
      id="acerca"
      sx={{
        padding: { xs: 4, sm: 6 },
        maxWidth: 1200,
        width: '100%',
        backgroundColor: colors.background,
        color: colors.text,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: { xs: 6, sm: 8 }, // Espacio inferior adaptable
      }}
    >
      {/* Título de la sección */}
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          fontSize: { xs: '1.75rem', sm: '2.25rem' }, // Reducido en 4px
          fontWeight: 700,
          color: colors.text, // Texto negro
          marginBottom: { xs: 3, sm: 4 },
          textAlign: 'center',
        }}
      >
        Acerca de Nosotros
      </Typography>

      {/* Párrafo de descripción */}
      <Typography
        variant="body1"
        sx={{
          maxWidth: 800,
          fontSize: { xs: '1rem', sm: '1.1rem' },
          textAlign: 'justify', // Justificado
          color: colors.text,
          marginBottom: { xs: 4, sm: 6 },
          lineHeight: 1.6,
        }}
      >
        En nuestra empresa, nos especializamos en ofrecer soluciones completas para el desarrollo web, asegurándonos de cubrir todas las necesidades de nuestros clientes, desde la concepción de la idea hasta la puesta en marcha de su proyecto en línea.
      </Typography>

      {/* Sección "¿Qué hacemos?" */}
      <Box sx={{ width: '100%', marginTop: 4 }}>
        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          sx={{
            fontSize: { xs: '1.5rem', sm: '1.75rem' },
            fontWeight: 600,
            color: colors.text, // Texto negro
            marginBottom: { xs: 2, sm: 3 },
            textAlign: 'center',
          }}
        >
          ¿Qué hacemos?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {servicios.map((servicio, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceCard>
                <CardContent>
                  <IconWrapper>
                    {servicio.icon}
                  </IconWrapper>
                  <Typography
                    variant="h6"
                    component="h4"
                    sx={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: colors.text, // Texto negro
                      marginBottom: 1,
                      textAlign: 'center',
                    }}
                  >
                    {servicio.titulo}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '0.95rem',
                      color: colors.text, // Texto negro
                      textAlign: 'center',
                    }}
                  >
                    {servicio.descripcion}
                  </Typography>
                </CardContent>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Carrusel de imágenes */}
      <Box sx={{ width: '100%', maxWidth: 1000, marginTop: 8 }}>
        <ImageSlider {...sliderSettings}>
          {carouselImages.map((url, index) => (
            <Box key={index} sx={{ padding: 1 }}>
              <CarouselImage src={url} alt={`Imagen ${index + 1}`} />
            </Box>
          ))}
        </ImageSlider>
      </Box>

      {/* Sección "¿Por qué elegirnos?" */}
      <Box sx={{ width: '100%', marginTop: 4 }}>
        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          sx={{
            fontSize: { xs: '1.5rem', sm: '1.75rem' },
            fontWeight: 600,
            color: colors.text, // Texto negro
            marginBottom: { xs: 2, sm: 3 },
            textAlign: 'center',
          }}
        >
          ¿Por qué elegirnos?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {porQueElegirnos.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceCard>
                <CardContent>
                  <IconWrapper>
                    {item.icon}
                  </IconWrapper>
                  <Typography
                    variant="h6"
                    component="h4"
                    sx={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: colors.text, // Texto negro
                      marginBottom: 1,
                      textAlign: 'center',
                    }}
                  >
                    {item.titulo}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '0.95rem',
                      color: colors.text, // Texto negro
                      textAlign: 'center',
                    }}
                  >
                    {item.descripcion}
                  </Typography>
                </CardContent>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Llamado a la Acción */}
      <Box sx={{ width: '100%', marginTop: 8, textAlign: 'center' }}>
        <Typography
          variant="h6"
          component="p"
          sx={{
            fontSize: { xs: '1.1rem', sm: '1.2rem' },
            fontWeight: 500,
            color: colors.text, // Texto negro
          }}
        >
          Si buscas un socio confiable para llevar tu negocio al mundo digital de manera profesional y eficiente, ¡somos la elección perfecta! 🚀
        </Typography>
      </Box>
    </Box>
  );
};

export default Acerca;
