import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from "../firebase/firebase";
import { updateDoc, doc } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    error: null,
    loading: false,
  });

  const { email, password, error, loading } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    if (!email || !password) {
      setData({ ...data, error: "All fields are required" });
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      await updateDoc(doc(db, "users", result.user.uid), {
        isOnline: true,
      });
      setData({
        email: "",
        password: "",
        error: null,
        loading: false,
      });
      <Navigate to='/' />;
    } catch (err) {
      setData({ ...data, error: err.message, loading: false });
    }
  };
  const googleProvider = new GoogleAuthProvider()
  const signInWithGoogle = () =>{
  signInWithPopup(auth, googleProvider).then(res => {
  window.alert("Log In With Google Successfully");
  <Navigate to="/" />;
  })
  .catch((error) => {
  window.alert(error.message);
  });
  return;
  }
  return (
    <section>
      <h3>Log into your Account</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input_container">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="input_container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        {error ? <p className="error">{error}</p> : null}
        <div className="btn_container">
          <button className="btn" disabled={loading}>
            {loading ? "Logging in ..." : "Login"}
          </button>
          <div className="text-center">
          <p>or</p>
          <p>Log In With Google  </p>   
          <button type="button" className="btn btn-link btn-floating mx-1">
          <i onClick={signInWithGoogle} className="fab fa-google fa-1x"></i>
          </button>
        </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
