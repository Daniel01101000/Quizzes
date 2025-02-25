import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header/Header.css';
import Logo from '../images/Logo.png';

const Header = () => {
  return (
    <header className="header">
      <nav>
        
        <ul>
        <img src={Logo} alt="Logo" className='Logo'/>
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/topics" className="nav-link">Topics</Link>
          </li>
          <li>
            <Link to="/quizzes" className="nav-link">Quizzes</Link>
          </li>
          <li>
            <Link to="/flashcards" className="nav-link">Flashcards</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
