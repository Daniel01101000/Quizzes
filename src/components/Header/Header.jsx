import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'styles/Header/Header.css';
import Logo from '../../images/Logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <img src={Logo} alt="Logo" className="Logo" />
      
      {/* Botón de hamburguesa */}
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
      <i class="bi bi-list"></i>
      </button>

      {/* Menú de navegación */}
      <nav className={menuOpen ? "nav open" : "nav"}>
        <ul>
          <li><Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/topics" className="nav-link" onClick={() => setMenuOpen(false)}>Topics</Link></li>
          <li><Link to="/quizzes" className="nav-link" onClick={() => setMenuOpen(false)}>Quizzes</Link></li>
          <li><Link to="/flashcards" className="nav-link" onClick={() => setMenuOpen(false)}>Flashcards</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;