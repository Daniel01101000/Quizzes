import React from 'react';
import '../../styles/Sections/SectionWhite.css';
import QuizzesList from '../Pages/Topics/Extensions/QuizzesList.jsx';
import '../../styles/Titles.css';

const SectionFlashcardsList = () => {
  return (
    <div className='SectionWhite'>
      <QuizzesList/>
    </div>
  );
};

export default SectionFlashcardsList;
