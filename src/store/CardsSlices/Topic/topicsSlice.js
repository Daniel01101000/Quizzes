import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topics: {},  // Almacena los topics
};

const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    addTopic: (state, action) => {
      const { id, name, description } = action.payload;
      state.topics[id] = { id, name, description };
    },
    removeTopic: (state, action) => {
      delete state.topics[action.payload]; // Elimina el topic por su id
    },
  },
});

export const { addTopic, removeTopic } = topicsSlice.actions;
export default topicsSlice.reducer;