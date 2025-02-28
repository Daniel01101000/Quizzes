import React from 'react';
import '../../styles/Sections/SectionWhite.css';
import FlashcardsListWithoutCreate from './FlashcardsListWithoutCreate.jsx';

const SectionWhiteFlashcard = () => {
  return (
    <div className='SectionWhite'>
      <h1>Flashcards</h1>
      <FlashcardsListWithoutCreate/>
    </div>
  );
};

export default SectionWhiteFlashcard;
