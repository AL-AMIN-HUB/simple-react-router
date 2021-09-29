import React from "react";
import { NavLink } from "react-router-dom";

const Friend = (props) => {
  const { name, email, address, website, phone, id } = props.friend;
  const friendStyle = {
    border: "3px solid goldenrod",
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: "lightBlue",
    color: "#222",
  };
  const url = `/friend/${id}`;
  return (
    <div style={friendStyle}>
      <h2>Name: {name} </h2>
      <h2>{id}</h2>
      <h5>Call me: {phone}</h5>
      <p>Visit me: {website} </p>
      <p>Email: {email} </p>
      <small>I live in: {address.city} </small>
      <NavLink to={url}>Visit Me</NavLink>
    </div>
  );
};

export default Friend;
