import React from "react";
import { useDispatch } from "react-redux";
import { removeCard as removeFlashcard } from "store/CardsSlices/Flashcard/cardsSliceFlashcards";
import { removeQuiz } from "store/CardsSlices/Quiz/quizzesSlice";
import { removeTopic } from "store/CardsSlices/Topic/topicsSlice";

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