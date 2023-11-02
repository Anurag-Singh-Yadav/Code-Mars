import React, { useState } from 'react';
import OTP from '../OTP';
import assets from '../../assets/imageExport'
import { toast } from 'react-toastify';
import axios, { Axios } from 'axios';
import { useNavigate } from 'react-router';
const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
const resetPass = import.meta.env.VITE_REACT_APP_RESET_PASS;
const ForgetPassword = ({formData,setFormData,setCorrectEmail}) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  async function submitHandler(e){
    e.preventDefault();
    if(formData.password !== formData.confirmPassword){
      toast.error('Password not match!', {
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
    try{
      formData.otp = otp.join("");
      if(formData.otp.length != 6){
        toast.error('Enter all OTP!', {
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
      const response = await axios.post(`${baseUrl}${resetPass}`,formData);
      toast.success('Password Change Successfully', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        navigate('/login');
      return;
    }catch(e){
      const {message} = e.response.data;
      if(message === "Entered OTP is incorrect"){
        toast.error("Please Enter Correct OTP Again",{
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
      toast.error("Please Try Again",{
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setCorrectEmail(false);
        navigate('/account-recovery');
    }
  };

  return (
    <div className="bg-mainbg h-[87vh] pt-1 relative">
      <form
        onSubmit={submitHandler}
        className="flex flex-col loginform min-w-[280px] w-[35%] mx-auto text-white bg-navcolor gap-4"
      >
        <div className="flex pb-2 justify-center gap-4 bg-navcolor items-center">
          <img src={assets.logo} className="w-16" alt="Logo" />
          <div className="font-bold font-sans text-3xl items-baseline">
            Reset Password
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Enter New Password</label>
          <input
            className="w-full shadow appearance-none text-black bg-mainbg border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            id="password"
            value={formData.password}
            placeholder="Enter New Password"
            required
            name="password"
            onChange={changeHandler}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="confirmPassword">Confirm Your Password</label>
          <input
            className="w-full shadow appearance-none text-black bg-mainbg border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            placeholder="Confirm Your Password"
            required
            name="confirmPassword"
            onChange={changeHandler}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="otp">Enter OTP</label>
          <OTP otp={otp} setOtp={setOtp}/>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
