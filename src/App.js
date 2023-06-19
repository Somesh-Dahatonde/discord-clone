import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import { auth } from "./Firebase";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        // the user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      {user ? (
        <>
          <Sidebar prop={user} />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
