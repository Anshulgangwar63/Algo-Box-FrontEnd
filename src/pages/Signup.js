import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import logoImg from "../img/logo.jpg";
import { Card, Logo, Form, Input, Button } from '../Components/AuthForms';
import Login from "./Login";

function Signup(props) {
  const [isRegistered, setRegistered] = useState(false);
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function postSignup() {
    axios.post("http://127.0.0.1:5000/api/register", {
      userName,
      password,
      fullName
    }).then(result => {
      console.log(result.data);
      setRegistered(true);
    });
  }
  console.log(isRegistered);
  if (isRegistered) {
    return <Redirect to={{ pathname: "/login" }} />
  }

  return (  
    <Card>
      <Logo src={logoImg} />
      <Form>
        <Input 
          type="text"
          value={fullName}
          onChange={e => {
            setFullName(e.target.value);
          }}
          placeholder="Full Name"
        />
        <Input
          type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="Username"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
        <Button onClick={postSignup}>Sign Up</Button>
      </Form>
      <Link to="/login">Already have an account?</Link>
    </Card>
  );
}

export default Signup;