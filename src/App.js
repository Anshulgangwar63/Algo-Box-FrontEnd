import React, { useState, Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import ProbList from "./ProbList";
import Prob from "./Prob";
import Navbar from "./Components/Main/Navbar";
import PrivateRoute from "./PrivateRoute";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { AuthContext } from "./context/auth";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";

var jwt = require("jsonwebtoken");

function App(props) {
  const verifyToken = () => {
    const tokens = localStorage.getItem("authToken");
    let decodedToken = undefined;
    try {
      decodedToken = jwt.verify(
        JSON.parse(JSON.stringify(tokens)),
        "secretkey"
      );
    } catch (err) {
      console.log(err);
    }
    console.log(decodedToken);
    return decodedToken;
  };
  const [authTokens, setAuthTokens] = useState(verifyToken());
  const setTokens = data => {
    console.log(data);
    jwt.sign(data, "secretkey", function(err, token) {
      setAuthTokens(token);
      localStorage.setItem("authToken", token);
      console.log(token);
    });
  };

  return (
    <div className="App">
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={ProbList} />
          <Route path="/:post_id" component={Prob} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/logout" component={Logout} />
          <PrivateRoute path="/admin" component={Admin} />
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
