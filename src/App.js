// import logo from "./logo.svg";
// import "./App.css";

import { Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Shared/Navber";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
