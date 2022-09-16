import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import { Navigate,Outlet } from "react-router-dom";

const PrivateLog = ({children}) =>{
  const {isUser} =useContext(AuthContext);
  if (isUser){
    return <Navigate to= '/' />;
  }
  return children ? children : <Outlet />;
};
export default PrivateLog;