import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

const cardsSliceFlashcards = createSlice({
  name: "cardsFlashcards", // Nombre único para este slice
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
  },
});

export const { addCard } = cardsSliceFlashcards.actions;
export default cardsSliceFlashcards.reducer;
