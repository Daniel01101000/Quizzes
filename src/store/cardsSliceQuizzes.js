import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

const cardsSliceQuizzes = createSlice({
  name: "cardsQuizzes", // Nombre único para este slice
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
  },
});

export const { addCard } = cardsSliceQuizzes.actions;
export default cardsSliceQuizzes.reducer;
