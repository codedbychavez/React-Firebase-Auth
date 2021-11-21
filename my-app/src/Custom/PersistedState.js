import React, { useEffect } from "react";
const usePersistedState = (key, defaultValue) => {
  const [state, setState] = React.useState(
    () => JSON.parse(localStorage.getItem(key)) || defaultValue
  );
  useEffect(() => {
    console.log("Setting key");
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};
export default usePersistedState;
