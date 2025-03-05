import React from 'react';
import 'styles/Sections/SectionWhite.css';
import CardsList from '../../../Pages/Quizzes/Cards/CardsList.jsx';
import 'styles/Titles.css';

const SectionWhiteQuiz = () => {
  return (
    <div className='SectionWhite'>
      <h1 className='Title'>Quizzes</h1>
      <CardsList/>
    </div>
  );
};

export default SectionWhiteQuiz;
