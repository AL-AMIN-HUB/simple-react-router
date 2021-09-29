import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";

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

  const history = useHistory();
  const handleClick = () => {
    history.push(`/friend/${id}`);
  };
  return (
    <div style={friendStyle}>
      <h2>Name: {name} </h2>
      <h2>{id}</h2>
      <h5>Call me: {phone}</h5>
      <p>Visit me: {website} </p>
      <p>Email: {email} </p>
      <small>I live in: {address.city} </small>
      <br />

      {/* system no 1 */}
      <NavLink to={url}>Visit Me</NavLink>
      <br />

      {/* system no 2 */}
      <Link to={url}>
        <button>Visit Me</button>
      </Link>
      <br />

      {/* most uses system no 3*/}
      <button onClick={handleClick}>Visit Me 2</button>
    </div>
  );
};

export default Friend;
