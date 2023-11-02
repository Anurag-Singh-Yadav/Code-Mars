import React, { useState } from "react";
import OTP from "../OTP";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
const signup = import.meta.env.VITE_REACT_APP_IS_SIGN_UP;


function AccountVerification({ formData ,setIssubmitted}) {
  const [disabled, setDisabled] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();
  async function clickHandler(e) {
    e.preventDefault();
    setDisabled(true);
    try {
      const enteredOtp = otp.join("");
      formData.otp = enteredOtp;
      const response = await axios.post(`${baseUrl}${signup}`, formData);
      navigate('/login');
    } catch (e) {
      const { data } = e.response;
      setDisabled(false);
      if (data.message === "Entered OTP is incorrect") {
        toast.error("Please Enter correct OTP");
        return;
      }
      setIssubmitted(false);
      navigate("/signup");
    }
  }
  return (
    <div className="flex flex-col loginform w-[35%] mx-auto text-white bg-navcolor gap-4">
      <div className="flex pb-2 justify-center gap-4 bg-navcolor items-center">
        <img src="codemars.png" className="w-16"></img>
        <div className=" font-bold font-sans text-3xl items-baseline">
          Account Verification
        </div>
      </div>
      <div>
        <div>Verify your identity with the OTP in your Email.</div>
        <OTP otp={otp} setOtp={setOtp} />
      </div>
      <button
        onClick={clickHandler}
        className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        Create Account
      </button>
    </div>
  );
}

export default AccountVerification;
