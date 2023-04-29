import { Route, Routes } from "react-router-dom";
import { unAuthenticatedRoutes } from "./routes";

const UnAuthenticatedApp = () => {
  return (
    <Routes>
      {unAuthenticatedRoutes.map((route) => (
        <Route path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default UnAuthenticatedApp;
