import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "red",
    borderBottom: "3px solid blue",
  };
  return (
    <nav className="header">
      <NavLink to="/Home" activeStyle={activeStyle}>
        Home
      </NavLink>
      <NavLink to="/friends" activeStyle={activeStyle}>
        Friends
      </NavLink>
      <NavLink exact to="/about/culture" activeStyle={activeStyle}>
        Culture
      </NavLink>
      <NavLink exact to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
};

export default Header;
