import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { store } from "./src/store";

export const wrapWithProvider = ({ element }) => {
  const clientId: any = process.env.REACT_APP_GOOGLE_API;

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Provider store={store}>{element}</Provider>{" "}
    </GoogleOAuthProvider>
  );
};
