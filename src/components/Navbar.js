import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/about">О нас</Link></li>
		  <li><Link to="/books">Книги</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
