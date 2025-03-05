import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

const cardsSliceQuizzes = createSlice({
  name: "cardsQuizzes",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    removeCard: (state, action) => {
      console.log("Eliminando card con id:", action.payload);
  state.cards = state.cards.filter((card) => card.id !== action.payload);
  console.log("Nuevo estado de cardss:", state.cards);

    },
  },
});

export const { addCard, removeCard } = cardsSliceQuizzes.actions;
export default cardsSliceQuizzes.reducer;