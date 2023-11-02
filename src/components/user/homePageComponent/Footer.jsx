import React from "react";
import {toast } from 'react-toastify';
import assets from '../../../assets/imageExport';
import BottomFooter from "./BottomFooter";
const Footer = () => {

  function submitHandler(e){
    e.preventDefault();
    toast.success('Feedback submitted successfully!');
  }

  return (
    <footer className="bg-navcolor  pt-10 sm:mt-10">
      <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          {/* logo */}
          <div className="text-white"><img src={assets.logo} className="w-12"></img></div>
          <div className="my-4">
            <p className="text-white text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              doloribus natus.
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-white font-medium mb-6">
            Links
          </div>
          <a
            href="#"
            className="my-3 block text-white text-sm hover:text-gray-500"
          >
            About
          </a>
          <a
            href="#"
            className="my-3 block text-white text-sm hover:text-gray-500"
          >
            Services
          </a>
          <a
            href="#"
            className="my-3 block text-white text-sm hover:text-gray-500"
          >
            Projects
          </a>
          <a
            href="#"
            className="my-3 block text-white text-sm hover:text-gray-500"
          >
            Contact Us
          </a>
        </div>

        {/* Column 3 */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-white font-medium mb-6">
            Other Links
          </div>
          <a
            href="#"
            className="my-3 block text-white text-sm hover:text-gray-500"
          >
            FAQ
          </a>
          <a
            href="#"
            className="my-3 block text-white text-sm hover:text-gray-500"
          >
            Terms of Use
          </a>
          <a
            href="#"
            className="my-3 block text-white text-sm hover:text-gray-500"
          >
            Privacy Policy
          </a>
        </div>

        <div className="p-5 w-1/2 sm:w-5 md:w-3/12">
          <form className='' onSubmit={submitHandler}>
              <label htmlFor='feedback' className='text-white'>Send us your feedback:</label>
              <textarea id='feedback' className='bg-navcolor text-white p-2 mt-3 border-2 border-white ' placeholder='Enter feedback here...' />
              <input type='submit'  value='Submit' className='text-white block primary-btn py-1 rounded-md px-3'/>
          </form>
        </div>

      </div>

      <BottomFooter/>

    </footer>
  );
};

export default Footer;
