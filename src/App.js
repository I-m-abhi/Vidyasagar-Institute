import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import PrivateRoute from "./components/PrivateRoute";
import PrivateLog from "./components/PrivateLog";

function App() {
  return (
   <>
   <BrowserRouter>
   <Header />
   <Routes>
   <Route element={<PrivateRoute/>}>
      <Route path="/" element={<Home/>}></Route>
      {/* <Route path="/profile" element={<Profile/>}></Route> */}
   </Route>
   <Route element={<PrivateLog/>}>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
   </Route>    
   </Routes>
   </BrowserRouter>
   <Footer />
   </>
  );
}

export default App;
