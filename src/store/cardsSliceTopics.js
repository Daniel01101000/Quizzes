import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

const cardsSliceTopics = createSlice({
  name: "cardsTopics", // Nombre único para este slice
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
  },
});

export const { addCard } = cardsSliceTopics.actions;
export default cardsSliceTopics.reducer;
