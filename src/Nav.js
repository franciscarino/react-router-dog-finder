import React from "react";
import { NavLink } from "react-router-dom";
// import "./Nav.css";

/** Render Nav bar */
function Nav() {
  return (
    <nav>
      <ul className="Nav">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/dogs/Duke">Duke</NavLink></li>
        <li><NavLink to="/dogs/Perry">Perry</NavLink></li>
        <li><NavLink to="/dogs/Whiskey">Whiskey</NavLink></li>
      </ul>
    </nav>
  );
}
// end

export default Nav;