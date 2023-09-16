import React, { useReducer, useEffect } from "react";
import "./Login.css";
import Button from "../UI/Button/Button";
import { useState } from "react";
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.includes("@"),
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }
  return {
    value: "",
    isValid: null,
  };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6,
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }
  return {
    value: "",
    isValid: null,
  };
};
export default function Login(props) {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailValid, setEmailValid] = useState();
  // const [enteredPassword, setEnteredPasword] = useState("");
  // const [passwordValid, setPasswordvalid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  useEffect(() => {
    const logged = setTimeout(() => {
      console.log("Form validation");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CleanUp");
      clearTimeout(logged);
    };
  }, [emailIsValid, passwordIsValid]);

  function emailChangeHandler(event) {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    console.log(dispatchEmail);
    // setEnteredEmail(event.target.value);
    // setFormIsValid(emailState.isValid && passwordState.isValid);
  }

  function passwordChangeHandler(event) {
    // setEnteredPasword(event.target.value);
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
    // setFormIsValid(passwordState.isValid && emailState.isValid);
  }

  function validateEmailHandler() {
    // setEmailValid(enteredEmail.includes("@"));
    dispatchEmail({ type: "INPUT_BLUR" });
  }

  function validatePasswordHandler() {
    // setPasswordvalid(enteredPassword.trim().length > 6);
    dispatchEmail({ type: "INPUT_BLUR" });
  }
  function submitHandler(event) {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  }
  return (
    <div className="loginContainer">
      <form onSubmit={submitHandler}>
        <div className="subLoginContainer">
          <div
            className={`control ${
              emailState.isValid === false ? "invalid" : " "
            }`}
          >
            <label htmlFor="mail">E-mail</label>
            <input
              type="email"
              id="mail"
              onChange={emailChangeHandler}
              value={emailState.value}
              onBlur={validateEmailHandler}
            />
          </div>
          <div
            className={`control ${
              passwordState.isValid === false ? "invalid" : " "
            }`}
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={passwordChangeHandler}
              value={passwordState.value}
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
