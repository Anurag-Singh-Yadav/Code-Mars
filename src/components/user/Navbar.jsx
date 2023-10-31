import { useEffect, useState } from "react";
import Avatar from "react-avatar";
import assets from '../../assets/imageExport';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
function Navbar({ isLogin }) {
  const [userHandle, setUserHandle] = useState("");
  const navigate = useNavigate();
  function findUserHandle() {
    setUserHandle(Cookies.get("userHandle"));
  }
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
      <nav className="flex justify-between items-center bg-navcolor text-white px-inlineSection py-1 w-full">
        <div className="flex ml-10 items-center">
          <NavLink to="/">
            <img src={assets.logo} alt="logo" className="w-20" />
          </NavLink>
        </div>
        <div className="flex">
          <NavLink to="/problems" className="px-6">
            Problem
          </NavLink>
          <NavLink to="/contact" className="px-6">
            Contact Us
          </NavLink>
        </div>
        <div className="flex items-center">
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
            <div>
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
