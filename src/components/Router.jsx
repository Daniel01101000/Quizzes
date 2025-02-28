import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Topics from './Pages/Topics/Topics';
import Quizzes from './Pages/Quizzes/Quizzes';
import Flashcards from './Pages/Flashcards/Flashcards';
import QuizzesList from './Pages/Topics/Extensions/QuizzesList';
import FlashcardsList from './Pages/Quizzes/Extentions/FlashcardsList';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="/quizzes" element={<Quizzes />} />
      <Route path="/flashcards" element={<Flashcards />} />
      <Route path="/topics/:topicId/quizzes" element={<QuizzesList />} />
      <Route path="/topics/:topicId/quizzes/:quizId/flashcards" element={<FlashcardsList />} />
    </Routes>
  );
};

export default AppRouter;
