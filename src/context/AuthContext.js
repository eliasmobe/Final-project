import { useState, useContext, createContext, useMemo } from "react";

const AuthContext = createContext({
  userLogin: {},
  setUserLogin: () => {},
});

export default function AuthContextProvider({ children }) {
  const storage = window.localStorage.getItem("usuario");

  const [userLogin, setUserLogin] = useState(
    storage ? JSON.parse(storage) : null
  );

  const value = useMemo(
    () => ({
      userLogin,
      setUserLogin,
    }),
    [userLogin, setUserLogin]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
