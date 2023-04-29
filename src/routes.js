import Login from "./pages/Login/Login";

export const unAuthenticatedRoutes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];
