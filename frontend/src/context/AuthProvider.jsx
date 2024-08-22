import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const initialAuthUser = (() => {
    try {
      const user = localStorage.getItem("Users");
      return user ? JSON.parse(user) : undefined;
    } catch (error) {
      console.error("Error parsing user data from localStorage", error);
      return undefined;
    }
  })();

  const [authUser, setAuthUser] = useState(initialAuthUser);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
