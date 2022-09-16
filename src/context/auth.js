import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const AuthContext =createContext();

const AuthProvider = ({ children }) => {
  const [isUser, setisUser] = useState ({});
    useEffect (() =>{
        onAuthStateChanged (auth, (user) =>{
            if (user) {
                setisUser (user);
            }else {
                setisUser (null);
            }
        });
    },[]);
  return (
    <AuthContext.Provider value={{ isUser }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
