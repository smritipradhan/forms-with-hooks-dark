/* 

****************************************************************
AUTHOR : Smriti 
Date : 29-04-2023
****************************************************************

*/

import React from "react";
import AuthenticatesApp from "./authComponents/AuthenticatedApp";
import UnAuthenticatedApp from "./authComponents/UnAuthenticatedApp";

const Auth = () => {
  let isLoggedIn = true;
  return isLoggedIn ? <AuthenticatesApp /> : <UnAuthenticatedApp />;
};
export default Auth;
