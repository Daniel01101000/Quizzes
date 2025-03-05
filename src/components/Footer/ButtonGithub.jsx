import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Importa el ícono de GitHub
import 'styles/Footer/ButtonGithub.css';

const ButtonGithub = () => {
  const handleClick = () => {
    window.open('https://github.com/Daniel01101000', '_blank'); // Reemplaza con tu perfil de GitHub
  };

  return (
    <button
      onClick={handleClick}
      className="Button-github"
    >
      <FaGithub size={35} />
    </button>
  );
};

export default ButtonGithub;