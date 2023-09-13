import React from "react";
import "./MainHeader.css";
import Navigation from "./Navigation";
export default function MainHeader(props) {
  return (
    <header className="mainHeader">
      <h1>A Login Form</h1>
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </header>

    /* <Navigation
          isLoggedin={props.isAuthenticated}
          onLogout={props.onLogout}
        /> */
  );
}
