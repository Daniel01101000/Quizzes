import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./cardsSlice"; // Importa el reducer, no la acción
import rootReducer from "./rootReducer"; // Solo si tienes más reducers

const store = configureStore({
  reducer: {
    cards: cardsReducer, // Usa el reducer correcto aquí
    root: rootReducer,   // Solo si `rootReducer` agrupa más reducers
  },
});

export default store;