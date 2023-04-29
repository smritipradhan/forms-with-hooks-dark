/* 

****************************************************************
AUTHOR : Smriti 
****************************************************************

*/
import React, { useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import "./Login.scss";
import useInput from "../../hooks/input-hook";

const Login = () => {
  const {
    value: enteredUsername,
    hasError: usernameHasError,
    valueChangeHandler: userNameChangeHandler,
    valueBlurHandler: userNameBlurHandler,
    isValid: usernameIsValid,
    reset: usernameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPassword,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    isValid: passwordIsValid,
    reset: passwordReset,
  } = useInput((value) => value.trim() !== "");

  let isFormValid = false;

  if (usernameIsValid && passwordIsValid) {
    isFormValid = true;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isFormValid) return;
    usernameReset();
    passwordReset();
  };

  return (
    <div className="loginContainer">
      <div className="loginBox drop">
        <p className="loginText">MOM ?</p>
        <p className="loginText">
          MOMMY's with the Maggots Now
          <PriorityHighIcon />
          <PriorityHighIcon />
        </p>
        <form onSubmit={handleSubmit} className="form ">
          <div
            className={
              usernameHasError ? "form-control invalid" : "form-control"
            }
          >
            <div className="iconLabel">
              <EmailOutlinedIcon /> Username
            </div>

            <input
              type="text"
              id="name"
              onChange={userNameChangeHandler}
              value={enteredUsername}
              onBlur={userNameBlurHandler}
            />
            {usernameHasError && (
              <p className="invalidUsername">Invalid Username</p>
            )}
          </div>

          <div
            className={
              passwordHasError ? "form-control invalid" : "form-control"
            }
          >
            <div className="iconLabel">
              <LockOutlinedIcon /> Password
            </div>
            <input
              type="password"
              id="name"
              onChange={passwordChangeHandler}
              value={enteredPassword}
              onBlur={passwordBlurHandler}
            />
            {passwordHasError && (
              <p className="invalidUsername">Invalid Password</p>
            )}
          </div>

          <div>
            <button className="submit" disabled={!isFormValid}>
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;