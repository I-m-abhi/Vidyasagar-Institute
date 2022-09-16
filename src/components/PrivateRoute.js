import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import { Navigate,Outlet } from "react-router-dom";

const ProtectedRoute = ({children}) =>{
  const {isUser} =useContext(AuthContext);
  if (!isUser){
    return <Navigate to= '/login' />;
  }
  return children ? children : <Outlet />;
};
export default ProtectedRoute;