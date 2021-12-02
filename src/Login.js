import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import shopItLogo from "./assets/Shop_it_Logo2.png";

// import { db } from "./firebase";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const signInTest = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword("test@gmail.com", "123456")
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // successfully created a new user with email and password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src={shopItLogo}
          // src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signIn} className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the Shop It conditions of use & Sale.
          Please see our Privacy Notice, our cookies notice and our
          internet-based ads Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Shop It account
        </button>
      </div>
      <button
        onClick={signInTest}
        style={{ width: "fit-content" }}
        className="login__signInButton"
      >
        Sign In as a Test User
      </button>
    </div>
  );
}

export default Login;
