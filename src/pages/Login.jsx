import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/searchProduct");
  };

 
  const handleGoogleLogin = () => {
  alert("Demo login only. OAuth not implemented.");
};


  const handleFacebookLogin = () => {
    alert("Demo login only. OAuth not implemented.");
  };

  return (
    <div className="login">
      <img
        className="login__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        alt="Amazon"
      />

      <div className="login__container">
        <h1>Sign in</h1>

        <form onSubmit={handleSubmit}>
          <label>Email or mobile phone number</label>
          <input type="email" placeholder="Enter email or phone" required />

          <button className="login__signInButton" type="submit">
            Continue
          </button>
        </form>

        <p className="login__terms">
          By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>

        <div className="login__divider">
          <span>or</span>
        </div>

        <button
          className="login__googleButton"
          onClick={handleGoogleLogin}
        >
          Continue with Google
        </button>

        <button
          className="login__facebookButton"
          onClick={handleFacebookLogin}
        >
          Continue with Facebook
        </button>
      </div>
    </div>
  );
}

export default Login;
