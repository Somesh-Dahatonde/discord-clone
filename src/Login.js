import { Button } from "@mui/material";
import { auth, provider } from "./Firebase";
import { signInWithPopup } from "firebase/auth"; // Correct import
import React from "react";
import "./Login.css";

function Login() {
  const signIn = () => {
    alert("DO NOT ENTER IN ANY PERSONAL INFORMATION! This is NOT DISCORD!");
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("User signed in:", user);
        // Handle user information (e.g., store in state or context)
      })
      .catch((error) => alert(error.message));
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
