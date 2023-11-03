import React, { useState } from "react";
import ForgetPassword from "./ForgetPassword";
import assets from "../../assets/imageExport";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
const baseurl = import.meta.env.VITE_REACT_APP_BASE_URL;
const sendresetopt = import.meta.env.VITE_REACT_APP_SEND_OTP_RESET_PASS;
export default function RestPassword() {
  const navigate = useNavigate();
  const [isCorrectEmail,setCorrectEmail] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "",confirmPassword:""});

  function changeHandler(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function submitHandler(e) {
    e.preventDefault();
    try{
        const response = await axios.post(`${baseurl}${sendresetopt}`,formData);
        setCorrectEmail(true);
        toast.success("OPT successfully Send",{
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });

    }catch(e){
      const {message} = e.response.data;
      if(message === "Account not found"){
        toast.info("User Not Exist",{
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          navigate('/');
          return;  
      } 
      toast.error("Error Occourred,Please try Again",{
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        return;  
    }

    

  }
  return (
    <div className="bg-mainbg h-[87vh] pt-1 relative">
      {!isCorrectEmail ? (<form
        onSubmit={submitHandler}
        className="flex flex-col loginform lg:w-[35%] md:w-[50%] py-4 sm:w-[65%] w-[90%] mx-auto px-5 text-white bg-navcolor gap-4"
      >
        <div className="flex pb-2 justify-center gap-4 bg-navcolor items-center">
          <img src={assets.logo} className="w-16"></img>
          <div className=" font-normal sm:font-bold font-sans text-2xl sm:text-3xl items-baseline">
            Account Recovery
          </div>
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
        <div>
        <button 
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
        </div>
      </form>) : (<ForgetPassword formData={formData} setCorrectEmail={setCorrectEmail} changeHandler={changeHandler} setFormData={setFormData}></ForgetPassword>)}
    </div>
  );
}
