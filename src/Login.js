import { Button } from "@mui/material";
import { auth, provider } from "./Firebase";
import React from "react";
import "./Login.css";

function Login() {
  const signIn = () => {
    // Google Login
    alert("DO NOT ENTER IN ANY PERSONAL INFORMATION! This is NOT DISCORD!");
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://www.drupal.org/files/project-images/discord_logo_0.png"
          alt="Discord Logo"
        />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
