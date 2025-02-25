import React from 'react';
import '../../styles/Sections/SectionWhite.css';
import CreateFlashcard from '../../components/Pages/Flashcards/CreateFlashcard.jsx';
import CardsList from '../Pages/Flashcards/CardsList.jsx';

const SectionWhiteFlashcard = () => {
  return (
    <div className='SectionWhite'>
      <h1>Flashcards</h1>
      <CardsList/>
      <CreateFlashcard/>
    </div>
  );
};

export default SectionWhiteFlashcard;
