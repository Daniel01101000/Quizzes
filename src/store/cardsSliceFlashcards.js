import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

const cardsSliceFlashcards = createSlice({
  name: "cardsFlashcards", // Nombre único para este slice
  initialState,
  reducers: {
    addCard: (state, action) => {
      const newCard = action.payload;
      if (!state.cards.some((card) => card.id === newCard.id)) {
        state.cards.push(newCard);
      }
    },
    clearCards: (state) => {
      state.cards = [];
    },
  },
});

export const { addCard, clearCards } = cardsSliceFlashcards.actions;
export default cardsSliceFlashcards.reducer;
