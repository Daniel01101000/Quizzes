import React from 'react';
import 'styles/Sections/SectionWhite.css';
import QuizzesList from 'components/Pages/Topics/Extensions/QuizzesList.jsx';
import 'styles/Titles/Titles.css';

const SectionFlashcardsList = () => {
  return (
    <div className='SectionWhite'>
      <QuizzesList/>
    </div>
  );
};

export default SectionFlashcardsList;
