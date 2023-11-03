import { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { RxCross1 } from "react-icons/rx";
import assets from "../../assets/imageExport";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
function Navbar({ isLogin }) {
  const [userHandle, setUserHandle] = useState("");
  const navigate = useNavigate();
  function findUserHandle() {
    setUserHandle(Cookies.get("userHandle"));
  }

  const [toggleBtn, setToggleBtn] = useState(false);

  useEffect(() => {
    findUserHandle();
  });
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/" && !isLogin && (
        <div className="banner-text">
          In the kingdom of code, you are the ruler of your creations. Welcome!
        </div>
      )}
      <nav className="flex justify-between items-center bg-navcolor text-white px-inlineSection py-1 mt-0">
        <div className="flex ml-10 items-center">
          <NavLink to="/">
            <img src={assets.logo} alt="logo" className="w-20" />
          </NavLink>
        </div>

        <div className="relative flex justify-between items-center gap-3 sm:hidden">

          <div>
            {
              !isLogin && <div><NavLink
              to="/login"
              className="px-4 py-2 bg-white text-navcolor rounded-lg"
            >
              Log In
            </NavLink></div>
}
            {
              isLogin && <button onClick={() => {
                navigate(`/dashboard/${userHandle}`);
              }}>Dashboard</button>
            }
            
          </div>

          <button
            className="text-white focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              setToggleBtn(!toggleBtn);
            }}
          >
            <svg
              className="h-8 w-8 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {location.pathname === "/" ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5H21V7H3V5ZM3 11H21V13H3V11ZM3 17H21V19H3V17Z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6H20V8H4V6ZM4 12H20V14H4V12ZM4 18H20V20H4V18Z"
                />
              )}
            </svg>
          </button>

          {toggleBtn && (
            <div className="absolute right-1 z-20 w-fit  text-black bg-white p-2 border border-gray-300 rounded flex flex-col space-y-2 mt-2">
              <div className="flex justify-around top-2 gap-3">
                <div className="w-fit flex gap-2 flex-col">
                  <NavLink to="/problems" className="px-6" onClick={()=>{setToggleBtn(!toggleBtn)}}>
                    Problem
                  </NavLink>
                  <NavLink to="/contact" className="px-6" onClick={()=>{setToggleBtn(!toggleBtn)}}>
                    Contact
                  </NavLink>
                </div>
                <div>
                  <RxCross1 onClick={()=>{setToggleBtn(!toggleBtn)}} />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="hidden sm:flex">
          <NavLink to="/problems" className="px-6">
            Problem
          </NavLink>
          <NavLink to="/contact" className="px-6">
            Contact Us
          </NavLink>
        </div>
        <div className="items-center hidden sm:flex">
          {!isLogin ? (
            <div className="space-x-3 hidden md:flex">
              <NavLink
                to="/login"
                className="px-4 py-2 bg-white text-navcolor rounded-lg"
              >
                Log In
              </NavLink>
              <NavLink
                to="/signup"
                className="px-4 py-2 bg-slate-500 text-white rounded-lg"
              >
                Sign Up
              </NavLink>
            </div>
          ) : (
            <div className="hidden sm:flex">
              <Avatar
                onClick={() => {
                  navigate(`/dashboard/${userHandle}`);
                }}
                className="cursor-pointer mr-8"
                name={userHandle}
                size="50"
                round="20px"
              ></Avatar>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
