/* 

****************************************************************
AUTHOR : Smriti 
Date : 29-04-2023
****************************************************************

*/

import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";

const AuthenticatesApp = () => {
  return (
    <Routes>
      <Route path={"/login"} element={<Login />} />
    </Routes>
  );
};

export default AuthenticatesApp;
