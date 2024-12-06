import React from 'react';
import '../styles/styles.css';  // от компонентов в src/components


const Header = () => {
  return (
    <div className="header">
      <h1><a href="/">Star Wars DB</a></h1>
      <ul>
        <li><a href="/people">People</a></li>
        <li><a href="/planets">Planets</a></li>
        <li><a href="/starships">Starships</a></li>
      </ul>
    </div>
  );
};

export default Header;
