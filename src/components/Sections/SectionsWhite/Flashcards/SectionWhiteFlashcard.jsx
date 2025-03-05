import React from 'react';
import 'styles/Sections/SectionWhite.css';
import FlashcardsListWithoutCreate from '../../WithoutCreate/FlashcardsListWithoutCreate.jsx';
import 'styles/Titles/Titles.css';

const SectionWhiteFlashcard = () => {
  return (
    <div className='SectionWhite'>
      <h1 className='Title'>Flashcards</h1>
      <FlashcardsListWithoutCreate/>
    </div>
  );
};

export default SectionWhiteFlashcard;
