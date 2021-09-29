import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
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
    padding: "20px",
    margin: "auto",
    marginTop: "20px",
    textAlign: "left",
  };

  const history = useHistory();
  const goFriends = () => {
    history.push("/friends");
  };
  return (
    <div style={styleDetails}>
      <h3>Detail of: {friendID} </h3>
      <h2>I am {friend.name}</h2>
      <h2>Phone: {friend.phone}</h2>
      <p>Email: {friend.email}</p>
      <p>City: {friend.address?.city}</p>
      <button onClick={goFriends}>See all friends</button>
    </div>
  );
};

export default FriendDetail;
