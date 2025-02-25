import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../../../store/cardsSliceQuizzes";
import "../../../styles/createCards/CreateCards.css";

export default function CreateQuiz() {
  const [name, setName] = useState("");
   const dispatch = useDispatch();
 
   const handleSubmit = (e) => {
     e.preventDefault();
     if (name) {
       dispatch(addCard({ name })); // Enviamos a Redux
       setName("");
     }
   };
  return (
    <div className="flashcard-container">
      <h2 className="flashcard-title">Create Quiz</h2>
      <form onSubmit={handleSubmit} className="flashcard-form">
        <div className="input-group">
          <label htmlFor="name">Name of the Quiz</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
        Create Quiz
        </button>
      </form>
    </div>
  );
}