import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

const cardsSliceFlashcards = createSlice({
  name: "cardsFlashcards",
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
    removeCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
  },
});

export const { addCard, clearCards, removeCard } = cardsSliceFlashcards.actions;
export default cardsSliceFlashcards.reducer;