import React from "react";
import { Route } from "react-router-dom";
// import { getAuth } from "../Utils/localStorage";

const PrivateRoute = (props) => {
  // const user = getAuth();
  const user = "a";
  if (user) return <Route {...props} />;

  // return (
  //   <Redirect
  //     to={{
  //       pathname: "/login",
  //     }}
  //   />
  // );
};

export default PrivateRoute;
