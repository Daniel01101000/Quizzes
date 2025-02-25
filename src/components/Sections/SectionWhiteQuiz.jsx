import React from 'react';
import '../../styles/Sections/SectionWhite.css';
import CreateQuiz from '../../components/Pages/Quizzes/CreateQuiz.jsx';
import CardsList from '../Pages/Quizzes/CardsList.jsx';

const SectionWhiteQuiz = () => {
  return (
    <div className='SectionWhite'>
      <h1>Quizzes</h1>
      <CardsList/>
      <CreateQuiz/>
    </div>
  );
};

export default SectionWhiteQuiz;
