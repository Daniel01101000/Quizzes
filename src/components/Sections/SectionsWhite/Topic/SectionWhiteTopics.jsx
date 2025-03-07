import React from 'react';
import 'styles/Sections/SectionWhite.css';
import CreateTopics from 'components/Pages/Topics/CreateTopic/CreateTopic.jsx';
import TopicsList from 'components/Pages/Quizzes/Extensions/TopicsList.jsx';
import 'styles/Titles/Titles.css';

const SectionWhiteTopics = () => {
  return (
    <div className='SectionWhite'>
      <h1 className='Title'>Topics</h1>
      <TopicsList/>
      <CreateTopics/>
    </div>
  );
};

export default SectionWhiteTopics;
