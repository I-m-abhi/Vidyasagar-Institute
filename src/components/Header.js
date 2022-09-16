import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { AuthContext } from "../context/auth";
import {Navigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [alert,setAlert] = useState (true);
  const { isUser } = useContext(AuthContext);
  const logout = () =>{
    signOut(auth);
    setAlert (false);
    window.alert( <h1>'Log Out Successfully'</h1> );
    <Navigate to='/login' />;
  };
  
  return (
    <>
    <nav>
      
        <Link to="/">Vidyasagar Institute</Link>
        <Link to="/">About Us</Link>
        <Link to="/">Contact Us</Link>
      
     
      <div>
        {isUser ? (
          <>
            <Link to="/profile">Profile</Link>
            <button className="btn" onClick={logout}>
              Logout
            </button>
            {/* {alert ?  window.alert('lgout') : null} */}
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
    </>
  );
};

export default Header;