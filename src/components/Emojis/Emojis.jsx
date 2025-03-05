import React from "react";
import '../../styles/Emojis/Emojis.css';

export default function Emojis() {
  // Lista de emojis
  const emojis = ["(^-^*)", "(>_<)", "(o^^)o", "(╥﹏╥)", "(⊙_☉)", "(｡•́︿•̀｡)", "(´Д`)", "(´･ω･`)", "(×_×)", "(・´д`・)", "( ˃̣̣̣̣̣̣︿˂̣̣̣̣̣̣ )", "(oT-T)o"];

  // Función para seleccionar un emoji aleatorio
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  return (
    <div className="emoji">
      <p>{randomEmoji}</p>
    </div>
  );
}