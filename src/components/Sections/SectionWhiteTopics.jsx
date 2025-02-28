import React from 'react';
import '../../styles/Sections/SectionWhite.css';
import CreateTopics from '../../components/Pages/Topics/CreateTopic.jsx';
import TopicsList from '../../components/Pages/Quizzes/Extentions/TopicsList.jsx';

const SectionWhiteTopics = () => {
  return (
    <div className='SectionWhite'>
      <h1>Topics</h1>
      <TopicsList/>
      <CreateTopics/>
    </div>
  );
};

export default SectionWhiteTopics;
