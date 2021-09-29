import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const FriendDetail = () => {
  const { friendID } = useParams();
  const [friend, setFriend] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendID}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  const styleDetails = {
    width: "400px",
    backgroundColor: "lightgreen",
    color: "#222",
    borderRadius: "10px",
    padding: "10px",
    margin: "auto",
    marginTop: "20px",
    textAlign: "left",
  };
  return (
    <div style={styleDetails}>
      <h3>Detail of: {friendID} </h3>
      <h2>Name: {friend.name}</h2>
      <h2>Phone: {friend.phone}</h2>
      <p>Email: {friend.email}</p>
      <p>City: {friend.address?.city}</p>
    </div>
  );
};

export default FriendDetail;
