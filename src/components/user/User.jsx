import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Dashboard from "./Dashboard";
import Cookies from "js-cookie";
import Home from "./Home";
import Problems from "./Problems";
import UserRequestAddQuestion from "./UserRequestAddQuestion";
import Login from "../Login";
import Navbar from "./Navbar";
import Signup from "../Signup";
import ForgetPassword from "./ForgetPassword";
import RestPassword from "./RestPassword";
import axios from "axios";
import Ide from "../ide/Ide";
import EditProfile from "./EditProfile";
const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
const userVerification = import.meta.env.VITE_REACT_APP_IS_USER_VERIFICATION;
export default function User() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(()=>{
    console.log('i am in useffect');
    async function checkValidToken(token) {
      try {
        const response = await axios.post(`${baseUrl}${userVerification}`, {
          token,
        });
        console.log('logged in :)');
        setIsLogin(true);
      } catch (e) {
        console.log(e);
        console.log("token is not present");
        return;
      }
    }
    const token = Cookies.get("token");
    checkValidToken(token);
  },[isLogin])
  return (
    <div>
      
      <Navbar isLogin={isLogin}></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin}></Login>} />
        <Route path='/reset-Password' element={<ForgetPassword></ForgetPassword>}/>
        <Route path="/account-recovery" element={<RestPassword></RestPassword>}></Route>
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/dashboard/:userHandle" element={<Dashboard setIsLogin={setIsLogin}/>} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/request-questions" element={<UserRequestAddQuestion />} />
        <Route path="/ide/:id" element={<Ide></Ide>}></Route>
        <Route path="/profile/:userHandle/edit" element={<EditProfile></EditProfile>} />
      </Routes>
    </div>
  );
}