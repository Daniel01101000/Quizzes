import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

const cardsSliceTopics = createSlice({
  name: "cardsTopics",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    removeCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
  },
});

export const { addCard, removeCard } = cardsSliceTopics.actions;
export default cardsSliceTopics.reducer;
