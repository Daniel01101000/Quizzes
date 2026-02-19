import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Topics from '../Pages/Topics/TopicsComponent/Topics';
import Quizzes from '../Pages/Quizzes/QuizzesComponent/Quizzes';
import Flashcards from '../Pages/Flashcards/FlashcardComponent/Flashcards';
import SectionFlashcardsList from 'components/Sections/FlashcardsList/SectionFlashcardsList';
import SectionQuizzesList from 'components/Sections/QuizzesList/SectionQuizzesList';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="/quizzes" element={<Quizzes />} />
      <Route path="/flashcards" element={<Flashcards />} />
      <Route path="/topics/:topicId/quizzes" element={<SectionQuizzesList />} />
      <Route path="/topics/:topicId/quizzes/:quizId/flashcards" element={<SectionFlashcardsList />} />
    </Routes>
  );
};

export default AppRouter;
