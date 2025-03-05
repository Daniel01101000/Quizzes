import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: {}, // Almacena los quizzes
  selectedTopicId: null
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      const { id, title, topicId } = action.payload;
      state.quizzes[id] = { id, title, topicId };
    },
    removeQuiz: (state, action) => {
      console.log("Estado antes de eliminar:", state.quizzes);
  delete state.quizzes[action.payload]; // Elimina el quiz por su id
  console.log("Estado después de eliminar:", state.quizzes);

    },
    selectTopic: (state, action) => {
      state.selectedTopicId = action.payload;
    }
  }
});

export const { addQuiz, removeQuiz, selectTopic } = quizzesSlice.actions;
export default quizzesSlice.reducer;