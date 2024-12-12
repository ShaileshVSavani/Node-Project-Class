import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  const login = () => {
    localStorage.setItem("loggedIn", "true");
    setIsLoggedIn(true); // Update state
  };

  const logout = () => {
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false); // Update state
  };

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("loggedIn") === "true");
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
