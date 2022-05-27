// import logo from "./logo.svg";
// import "./App.css";

import { Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Shared/Navber";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RequireAuth from "./Pages/Login/RequireAuth";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import Users from "./Pages/Dashboard/Users";

import AllProducts from "./Pages/Dashboard/AllProducts";
import AddProduct from "./Pages/Dashboard/AddProduct";
import { ToastContainer } from "react-toastify";
import Home from "./Pages/Home/Home";
import MyProfile from "./Pages/Dashboard/MyProfile";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="allproducts" element={<AllProducts></AllProducts>}></Route>

        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          {/* <Route index element={<MyAllOrder></MyAllOrder>}></Route> */}

          {/* <Route path="review" element={<MyReview></MyReview>}></Route> */}
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>

          <Route
            path="user"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addProduct"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
