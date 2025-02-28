import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: {},  // Almacena los quizzes
  selectedTopicId: null // Almacena el topicId seleccionado
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      const { id, title, topicId } = action.payload;
      state.quizzes[id] = { id, title, topicId };
    },
    selectTopic: (state, action) => {
      state.selectedTopicId = action.payload; // Guarda el topicId seleccionado
    }
  }
});

export const { addQuiz, selectTopic } = quizzesSlice.actions;
export default quizzesSlice.reducer;