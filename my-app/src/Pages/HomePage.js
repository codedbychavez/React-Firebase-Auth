import "./HomePage.css";
import usePersistedState from "../Custom/PersistedState";

import { signOut } from "firebase/auth";

const HomePage = (props) => {
  const [userLoggedIn, setUserLoggedIn] = usePersistedState("user", {});

  const auth = props.auth;

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        alert("You are now signed out");
        setUserLoggedIn({});
        window.location.pathname = "/auth";
      })
      .catch((error) => {
        alert("An error ocurred");
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={handleSignOut}>Sign out!</button>
    </div>
  );
};

export default HomePage;
