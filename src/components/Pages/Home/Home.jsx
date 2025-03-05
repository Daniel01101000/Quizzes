import React, { useState, useEffect } from 'react';
import quizz from '../../../images/quiz1.jpg';
import quiz3 from '../../../images/quiz3.jpg'; // Asegúrate de importar la segunda imagen
import SectionWhiteHome from '../../Sections/SectionWhiteHome.jsx';
import SectionGreen from '../../Sections/SectionGreen.jsx';
import '../../../styles/Pages/Home.css';

const Home = () => {
  const [image, setImage] = useState(quizz); // Estado para la imagen

  useEffect(() => {
    // Función para actualizar la imagen según el tamaño de la ventana
    const handleResize = () => {
      if (window.innerWidth < 815) {
        setImage(quiz3); // Cambia la imagen cuando la ventana es más pequeña que 815px
      } else {
        setImage(quizz); // Vuelve a la imagen original
      }
    };

    // Escucha los cambios de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Llama a la función inmediatamente para ajustar la imagen al cargar
    handleResize();

    // Limpieza del evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Solo se ejecuta una vez, al montar el componente

  return (
    <>
      <img src={image} alt="image of quizz" className='imagen-fondo' />
      <div className="home-container">
        <SectionWhiteHome />
        <SectionGreen />
      </div>
    </>
  );
};

export default Home;