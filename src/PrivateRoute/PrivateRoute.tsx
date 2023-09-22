import React from "react";
import { navigate } from "gatsby";

const PrivateRoute = ({ component: Component, location, ...rest }: any) => {
  if (!localStorage.getItem("userId") && location.pathname !== `/`) {
    navigate("/");
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
