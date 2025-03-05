import { configureStore } from "@reduxjs/toolkit";
import cardsReducerTopics from "../CardsSlices/Topic/cardsSliceTopics";
import cardsReducerQuizzes from "../CardsSlices/Quiz/cardsSliceQuizzes"; // Renombrado para mayor claridad
import cardsReducerFlashcards from "../CardsSlices/Flashcard/cardsSliceFlashcards";
import quizzesReducer from "../CardsSlices/Quiz/quizzesSlice";
import topicsReducer from "../CardsSlices/Topic/topicsSlice";

const store = configureStore({
  reducer: {
    cardsTopics: cardsReducerTopics,
    cardsQuizzes: cardsReducerQuizzes,
    cardsFlashcards: cardsReducerFlashcards,
    topics: topicsReducer,
    quizzes: quizzesReducer,
  },
});

export default store;