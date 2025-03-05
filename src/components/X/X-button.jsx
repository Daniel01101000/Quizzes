import React from "react";
import { useDispatch } from "react-redux";
import { removeCard as removeFlashcard } from "store/cardsSliceFlashcards";
import { removeQuiz } from "store/quizzesSlice";
import { removeTopic } from "store/topicsSlice";

import '../../styles/X/X.css';

export default function Card({ id, type }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    if (type === "flashcard") {
      dispatch(removeFlashcard(id));
    } else if (type === "quiz") {
      dispatch(removeQuiz(id));
    } else if (type === "topic") {
      dispatch(removeTopic(id)); 
    }
  };

  return (
    <>
      <button className="X" onClick={handleRemove}>
        <i className="bi bi-x"></i>
      </button>
    </>
  );
}