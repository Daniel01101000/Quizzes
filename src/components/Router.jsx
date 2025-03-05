import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Topics from './Pages/Topics/Topics';
import Quizzes from './Pages/Quizzes/Quizzes/Quizzes';
import Flashcards from './Pages/Flashcards/Flashcards';
import SectionFlashcardsList from '../components/Sections/SectionFlashcardsList';
import SectionQuizzesList from '../components/Sections/SectionQuizzesList';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="/quizzes" element={<Quizzes />} />
      <Route path="/flashcards" element={<Flashcards />} />
      <Route path="/topics/:topicId/quizzes" element={<SectionQuizzesList />} />
      <Route path="/topics/:topicId/quizzes/:quizId/flashcards" element={<SectionFlashcardsList />} />
    </Routes>
  );
};

export default AppRouter;
