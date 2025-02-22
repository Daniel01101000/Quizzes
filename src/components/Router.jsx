import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Topics from './Pages/Topics/Topics';
import Quizzes from './Pages/Quizzes/Quizzes';
import Flashcards from './Pages/Flashcards/Flashcards';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="/quizzes" element={<Quizzes />} />
      <Route path="/flashcards" element={<Flashcards />} />
    </Routes>
  );
};

export default AppRouter;
