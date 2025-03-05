import React from 'react';
import 'styles/Sections/SectionWhite.css';
import FlashcardsList from 'components/Pages/Quizzes/Extensions/FlashcardsList.jsx';
import 'styles/Titles/Titles.css';

const SectionFlashcardsList = () => {
  return (
    <div className='SectionWhite'>
      <FlashcardsList/>
    </div>
  );
};

export default SectionFlashcardsList;
