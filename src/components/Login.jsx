import axios from "axios";
import assets from '../assets/imageExport';
import "./Login.css";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const baseurl = import.meta.env.VITE_REACT_APP_BASE_URL;
const loginAdmin = import.meta.env.VITE_REACT_APP_LOGINADMIN;
const loginUser = import.meta.env.VITE_REACT_APP_LOGINUSER;

export default function Login({setIsLogin}) {
  
  const navigate = useNavigate();
  const [isUser, setUser] = useState("Student");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleOptionChange = (event) => {
    setUser(event.target.value);
  };
  function changeHandler(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function submitHandler(e) {
    e.preventDefault();
    if (isUser === "Admin") {
      console.log("i am admin");
      try {
        const response = await axios.post(`${baseurl}${loginAdmin}`, formData);
        const token = response.data.token; // Assuming the token is in response.data.token
        
        console.log(response);
        Cookies.set("token", token);
        setIsLogin(true);
        navigate('/');
      } catch (e) {

      }
    } else if (isUser === "Student") {
      console.log("i am Student");
      try {
        const response = await axios.post(`${baseurl}${loginUser}`, formData);
        console.log("User login response:", response);
        const token = response.data.token; // Assuming the token is in response.data.token
        const userHandle = response.data.user.userHandle;
        // console.log(token);
        Cookies.set("userHandle", userHandle);
        Cookies.set("token", token);
        setIsLogin(true);
        navigate('/');
      } catch (e) {
        console.log("error in login", e.response.data);
        const message = e.response.data.message;
        if(message === "User doesn't exist"){
          toast.info("Please Signup first",{
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          navigate('/signup');
          return;
        }
        toast.error('Wrong password',{
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        retunr;
      }
    }
  }

  async function forgotPassword(e) {}

  return (
    <div className="bg-mainbg h-[87vh] pt-1 relative">
      <form
        onSubmit={submitHandler}
        className="flex flex-col loginform w-[35%] mx-auto text-white bg-navcolor gap-4"
      >
        <div className="flex pb-2 justify-center gap-4 bg-navcolor items-center">
          <img src={assets.logo} className="w-16"></img>
          <div className=" font-bold font-sans text-3xl items-baseline">
            Log In
          </div>
        </div>
        <div className="flex gap-10">
          <label className="cursor-pointer">
            <input
              type="radio"
              value="Admin"
              checked={isUser === "Admin"}
              onChange={handleOptionChange}
            />
            Admin
          </label>
          <label className="cursor-pointer">
            <input
              type="radio"
              value="Student"
              checked={isUser === "Student"}
              onChange={handleOptionChange}
            />
            Student
          </label>
        </div>

        <div className="flex flex-col gap-1 ">
          <label htmlFor="email">Enter Your Email</label>
          <input
            className="w-full shadow appearance-none text-black bg-mainbg border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            value={formData.email}
            placeholder="Enter your email address"
            required
            name="email"
            onChange={changeHandler}
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <label htmlFor="password">Enter Your Password</label>
          <input
            className="w-full shadow appearance-none text-black bg-mainbg border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            id="password"
            value={formData.password}
            placeholder="Enter your password"
            required
            name="password"
            onChange={changeHandler}
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
          <NavLink
            to="/account-recovery"
            className="text-right block cursor-pointer text-mainbg"
            onClick={forgotPassword}
          >
            <i>Forgot Password ?</i>
          </NavLink>
        </div>
      </form>
    </div>
  );
}
