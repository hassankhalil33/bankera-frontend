import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [jwt, setJWT] = useState("");
  const [username, setUsername] = useState("");

  const userData = {
    jwt,
    setJWT,
    username,
    setUsername
  }

  return (
    <UserContext.Provider value={userData} >
      {children}
    </UserContext.Provider>
  )
};
