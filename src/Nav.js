import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <ul>
      <li><NavLink to="/dogs/duke">Duke</NavLink></li>
      <li><NavLink to="/dogs/perry">Perry</NavLink></li>
      <li><NavLink to="/dogs/whiskey">Whiskey</NavLink></li>
    </ul>
  );
}
// end

export default Nav;