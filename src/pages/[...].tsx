import React, { useState } from "react";
import { Router } from "@reach/router";
import Layout from "../components/Layout/layout";
import Compare from "../components/Compare/compare";
import PostDetails from "../components/postDetails";
import Login from "../components/Authentications/CreateAccount";
import Home from "../components/Home/home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const App = () => {
  const [searchQuery, setsearchQuery] = useState("");
  return (
    <>
      <Layout setsearchQuery={setsearchQuery} searchQuery={searchQuery}>
        <Router basepath="/">
          <PrivateRoute path="/post-details" component={PostDetails} />
          <PrivateRoute path="/compare" component={Compare} />
          <PrivateRoute
            path="/app"
            searchQuery={searchQuery}
            component={Home}
          />
          <Login path="/" />
        </Router>
      </Layout>
    </>
  );
};

export default App;
