import React from "react";
import '../../../styles/Cards/CardTopic.css';

export default function CardTopic({ name, description }) {
  return (
    <div className="card">
      <h3 className="card-title">{name}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}