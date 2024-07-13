import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState();
  const [user, setUser] = useState({});

  const userData = {
    accessToken,
    setAccessToken,
    user,
    setUser
  }

  return (
    <UserContext.Provider value={userData} >
      {children}
    </UserContext.Provider>
  )
};
