import { auth } from "../../firebase";
import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import isAuthenticated from "../authentication/Home/isAuth";

const Dashboard = (props) => {
  const namee = props.name;
  const [user, setUser] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else setUser("");
    });
  }, []);



  return (
    <div>
      <div>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">Signup</Link>
        </h1>
      </div>

      <br />
      <br />
      <br />

      <h2>{user.uid}</h2>
      <h2>{user.email}</h2>
      <h2>{user.displayName}</h2>
      <p>Profile picture: <img src={user.photoURL} alt="Profile" /></p>

    </div>
  );


}

export default Dashboard;

