import React from 'react';
import quizz from '../../../images/quiz1.jpg';
import SectionWhiteHome from '../../Sections/SectionWhiteHome.jsx';
import SectionGreen from '../../Sections/SectionGreen.jsx';
import '../../../styles/Pages/Home.css';

const Home = () => {
  return (
    <>
      <img src={quizz} alt="image of quizz" className='imagen-fondo'/>
      <div className="home-container">
        <SectionWhiteHome />
        <SectionGreen />
      </div>
    </>
  );
};

export default Home;
