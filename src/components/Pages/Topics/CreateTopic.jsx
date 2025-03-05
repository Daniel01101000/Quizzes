import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../../../styles/createCards/CreateCards.css";
import { addTopic } from "../../../store/topicsSlice";  // 👈 Asegúrate de importar la acción correcta

export default function CreateTopic() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      const newTopic = {
        id: Date.now().toString(), // Genera un ID único
        name,
        description,
      };
      dispatch(addTopic(newTopic)); // 👈 Usar `addTopic` en lugar de `addCard`
      setName("");
      setDescription("");
    }
  };

  return (
    <div className="flashcard-container">
      <h2 className="flashcard-title">Create Topic</h2>
      <form onSubmit={handleSubmit} className="flashcard-form">
        <div className="input-group">
          <label htmlFor="name">Name of the Topic</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description of the Topic</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="3"
          />
        </div>
        <button type="submit" className="submit-btn">
          Create Topic
        </button>
      </form>
    </div>
  );
}
