import axios from "axios";
import assets from '../assets/imageExport';
import React, { useState } from "react";
import { toast } from "react-toastify";
import AccountVerification from "./user/AccountVerification";
import { useNavigate } from 'react-router-dom';
const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
const sendopt = import.meta.env.VITE_REACT_APP_SEND_OTP;
const isUserExist = import.meta.env.VITE_REACT_APP_IS_USER_EXIST;

const Signup = () => {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState({ email: "",userHandle:"",confirmPassword:"",password:""});

  const [issubmitted, setIssubmitted] = useState(false);
  function changleHandler(e){
    const {name, value} = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function handleSubmit (e){
    
    e.preventDefault();
    setDisabled(true);
    if(formData.password !== formData.confirmPassword){
      toast.error('Password not Match!', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setDisabled(false);
      return;
    }
    try{
    const {email} = formData;
    const check = await axios.post(`${baseUrl}${isUserExist}`, formData); 
    const response = await axios.post(`${baseUrl}${sendopt}`, {email});
    setIssubmitted(true);
  }catch(e){
    setDisabled(false);
    toast.info('User already exist!');
    navigate('/login');
    return;
    }
  };

  return (
    <div className="bg-mainbg h-[87vh] py-1">
      {
        (issubmitted ) ?(<AccountVerification setDisabled={setDisabled} formData={formData} setIssubmitted={setIssubmitted}></AccountVerification>):(<form 
          onSubmit={handleSubmit}
          className="max-w-md signup  mx-auto mt-5 bg-navcolor rounded-lg text-white"
        >
          <div className="flex justify-center  gap-4 mt-5 pt-4 bg-navcolor items-center">
            <img src={assets.logo} className="w-16"></img>
            <div className=" font-bold font-sans text-3xl items-baseline">Sign Up</div>
          </div>
          <div className="flex flex-col gap-2 py-4  px-8">
            <label htmlFor="userHandle" className="block ">
              User Handle:
            </label>
            <input
            name="userHandle"
              type="text"
              id="userHandle"
              value={formData.userHandle}
              placeholder="Enter your user handle"
              onChange={changleHandler}
              required
              className="shadow text-black bg-mainbg appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label htmlFor="email" className="block ">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              placeholder="Enter your email address"
              onChange={changleHandler}
              required
              className="shadow appearance-none text-black bg-mainbg border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label htmlFor="password" className="block  ">
              Password:
            </label>
            <input
            name="password"
              type="password"
              id="password"
              value={formData.password}
              placeholder="Enter your password"
              onChange={changleHandler}
              required
              className="shadow appearance-none text-black bg-mainbg border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label htmlFor="confirmPassword" className="block">
              Confirm Password:
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              placeholder="Confirm your password"
              onChange={changleHandler}
              required
              className="shadow appearance-none text-black bg-mainbg border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              Sign Up
            </button>
          </div>
        </form>)
      }
    </div>
  );
};

export default Signup;
