import React, { useEffect } from "react";
import "./Login.css";
import Button from "../UI/Button/Button";
import { useState } from "react";
export default function Login(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailValid, setEmailValid] = useState();
  const [enteredPassword, setEnteredPasword] = useState("");
  const [passwordValid, setPasswordvalid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  useEffect(() => {
    const logged = setTimeout(() => {
      console.log("Form validation");
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 500);

    return () => {
      console.log("CleanUp");
      clearTimeout(logged);
    };
  }, [enteredEmail, enteredPassword]);

  function emailChangeHandler(event) {
    setEnteredEmail(event.target.value);
  }

  function passwordChangeHandler(event) {
    setEnteredPasword(event.target.value);
    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes("@")
    // );
  }

  function validateEmailHandler() {
    setEmailValid(enteredEmail.includes("a"));
  }

  function validatePasswordHandler() {
    setPasswordvalid(enteredPassword.trim().length > 6);
  }
  function submitHandler(event) {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  }
  return (
    <div className="loginContainer">
      <form onSubmit={submitHandler}>
        <div className="subLoginContainer">
          <div className={`control ${emailValid === false ? "invalid" : " "}`}>
            <label htmlFor="mail">E-mail</label>
            <input
              type="email"
              id="mail"
              onChange={emailChangeHandler}
              value={enteredEmail}
              onBlur={validateEmailHandler}
            />
          </div>
          <div
            className={`control ${passwordValid === false ? "invalid" : " "}`}
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={passwordChangeHandler}
              value={enteredPassword}
              onBlur={validatePasswordHandler}
            />
          </div>
          <div className="action">
            <Button type="submit" className="btn" disabled={!formIsValid}>
              Login
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
