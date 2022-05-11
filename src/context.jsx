import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "./helper";


export const UsernameContext = createContext(null);

export function UsernameProvider({ children }) {
  const initialState = []

  const [userName, setUserName] = useState(() => getLocalStorage("userName", initialState));
  const [activeUser, setActiveUser] = useState(() => getLocalStorage("activeUser", ''))
  useEffect(() => {
    setLocalStorage("userName", userName);
    setLocalStorage("activeUser", activeUser);
  }, [activeUser, userName]);

  return (
    <UsernameContext.Provider
      value={[
        userName,
        setUserName,
        activeUser,
        setActiveUser
      ]}
    >
      {children}
    </UsernameContext.Provider>
  );
}
