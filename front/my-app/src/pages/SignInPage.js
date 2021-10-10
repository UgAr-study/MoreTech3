
import React from "react";
import ReactDOM from "react-dom";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@material-ui/core";
import "../components/styles.css"
import {useDispatch} from "react-redux";
import {logIn} from "../redux/actions/authAction";
import {useIsAuth} from "../context/AuthContextProvider";
import {useState} from "react";

import { Switch, Route, Link, Redirect } from 'react-router-dom';

const SignInPage = () => {
  const {isAuth, setIsAuth}=useIsAuth()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const response = true;
    const user = { username, password };
    if ((user.username == 'Oleg') && (user.password == "Password")|| 
        (user.username == 'Luda') && (user.password == "Password"))
    {
      setIsAuth(true);
    }
    else {
      console.log(user);
      alert("Wrong username/password! Please try again.")
    }
  };
  if (isAuth) {
    return (
      <span>&nbsp;</span>
    )
  }
  else {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        value={username}
        placeholder="enter a username"
        onChange={({ target }) => setUsername(target.value)}
      />
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          value={password}
          placeholder="enter a password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};
}

export default SignInPage;

