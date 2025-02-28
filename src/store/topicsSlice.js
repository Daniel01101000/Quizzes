import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topics: {},  // 🔥 Debe ser un objeto vacío para evitar errores
};

const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    addTopic: (state, action) => {
      const { id, name, description } = action.payload;
      state.topics[id] = { id, name, description };  // Agrega el nuevo topic
    },
  },
});

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;