import React from 'react';
import '../../styles/Sections/SectionWhite.css';
import CardsList from '../Pages/Quizzes/CardsList.jsx';

const SectionWhiteQuiz = () => {
  return (
    <div className='SectionWhite'>
      <h1>Quizzes</h1>
      <CardsList/>
    </div>
  );
};

export default SectionWhiteQuiz;
