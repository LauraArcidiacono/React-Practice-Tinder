import React from 'react';
import { NavLink } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <nav className="nav-bar">
        <NavLink className="link" activeClassName="active" exact to="/">Inicio</NavLink>
        <NavLink className="link" activeClassName="active" to="/favorites">Favoritos</NavLink>
        <NavLink className="link" activeClassName="active" to="/login">login</NavLink>
      </nav>
    </div>
  );
}

export default App;
