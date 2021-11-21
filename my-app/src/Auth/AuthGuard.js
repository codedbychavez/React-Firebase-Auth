import React from "react";

import usePersistedState from "../Custom/PersistedState";

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (error) {
    return null;
  }
};

const IsLoggedIn = () => {
  try {
    const user = usePersistedState("user");
    const userObj = user[0];

    if (userObj) {
      const decodedJWT = parseJwt(userObj.stsTokenManager.accessToken);

      if (decodedJWT.exp * 1000 < Date.now()) {
        return false;
      } else {
        return true;
      }
    }
  } catch (error) {
    //   console.log(error);
    return false;
  }
};

export default IsLoggedIn;
