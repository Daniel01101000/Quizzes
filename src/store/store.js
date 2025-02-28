import { configureStore } from "@reduxjs/toolkit";
import cardsReducerTopics from "./cardsSliceTopics";
import cardsReducerQuizzes from "./cardsSliceQuizzes"; // Renombrado para mayor claridad
import cardsReducerFlashcards from "./cardsSliceFlashcards";
import quizzesReducer from "./quizzesSlice";
import topicsReducer from "./topicsSlice";

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