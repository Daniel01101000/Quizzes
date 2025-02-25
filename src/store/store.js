import { configureStore } from "@reduxjs/toolkit";
import cardsReducerTopics from "./cardsSliceTopics";
import cardsReducerQuizzes from "./cardsSliceQuizzes";
import cardsReducerFlashcards from "./cardsSliceFlashcards";
import rootReducer from "./rootReducer"; // Solo si tienes más reducers

const store = configureStore({
  reducer: {
    cardsTopics: cardsReducerTopics,
    cardsQuizzes: cardsReducerQuizzes,
    cardsFlashcards: cardsReducerFlashcards,
    root: rootReducer, // Solo si `rootReducer` agrupa más reducers
  },
});

export default store;