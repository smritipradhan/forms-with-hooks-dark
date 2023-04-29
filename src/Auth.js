/* 

****************************************************************
AUTHOR : Smriti 
****************************************************************

*/

import React from "react";
import AuthenticatesApp from "./AuthenticatedApp";
import UnAuthenticatedApp from "./UnAuthenticatedApp";

const Auth = () => {
  let isLoggedIn = true;
  return isLoggedIn ? <AuthenticatesApp /> : <UnAuthenticatedApp />;
};
export default Auth;
