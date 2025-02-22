import React from 'react';
import '../../styles/Sections/SectionWhite.css';
import CreateTopics from '../../components/Pages/Topics/CreateTopic.jsx';
import CardsList from '../Pages/Topics/CardsList.jsx';

const SectionWhiteTopics = () => {
  return (
    <div className='SectionWhite'>
      <h1>Topics</h1>
      <CardsList/>
      <CreateTopics/>
    </div>
  );
};

export default SectionWhiteTopics;
