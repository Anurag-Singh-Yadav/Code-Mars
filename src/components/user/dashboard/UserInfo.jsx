import axios from "axios";
import Cookies from "js-cookie";
import Avatar from "react-avatar";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { IoLocationSharp } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Rank from "./Rank";
const userVerification = import.meta.env.VITE_REACT_APP_IS_USER_VERIFICATION;
const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

function UserInfo({
  userProfile,
  userDetails,
  userFullName,
  setIsLogin,
  totalUser,
  userHandle,
  rankNumber,
}) {
  const navigate = useNavigate();
  const [isvalid, setValid] = useState(false);
  useEffect(() => {
    async function checkUserVerification() {
      try {
        const token = Cookies.get("token");
        const response = await axios.post(
          `${baseUrl}${userVerification}`,
          {
            token: token,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const { data } = response;
        if (data.success) {
          if (userHandle === data.user.userHandle) {
            setValid(true);
          }
        }
      } catch (e) {
      }
    }
    checkUserVerification();
  }, []);

  function logOutHandler() {
    Cookies.remove("token");
    Cookies.remove("userHandle");
    setIsLogin(false);
    navigate("/");
  }

  return (
    <div className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-4">
      <div className="justify-between mb-3 md:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-md p-2">

        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-0 items-center">

          <Avatar
            onClick={() => {
              navigate(`/dashboard/${userHandle}`);
            }}
            className="cursor-pointer items-center mr-8 px-2 "
            name={userHandle}
            size="50"
            round="20px"
          ></Avatar>
          <div>
            {userFullName && <div className="font-medium">{userFullName}</div>}
            <div className="underline italic text-navcolor cursor-pointer mb-2 ">
              {userHandle}
            </div>

          </div>
        </div>

        <div className="pr-5 font-medium">
          <Rank rank={rankNumber + 1} totalUser={totalUser}>
            {" "}
          </Rank>
        </div>

      </div>

      {isvalid && userHandle && (
        <div className="flex flex-col  gap-2 my-2  items-center bg-green-0 dark:bg-dark-green-0 text-green-s dark:text-dark-green-s hover:text-green-s dark:hover:text-dark-green-s w-full rounded-lg py-[7px] text-center font-medium">
         
          <NavLink
            to={`/profile/${userHandle}/edit`}
            className="bg-[#90dc72dd] text-[2cbb5d] rounded-md hover:text-[] w-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] py-1 px-2"
          >
            Edit Profile
          </NavLink>

          <button
            className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] w-full px-4 py-1 rounded-md"
            onClick={logOutHandler}
          >
            Log Out
          </button>

        </div>
      )}

      <div className="mt-2">
        {userProfile ? (
          userProfile.map((item, index) => {
            return (
              <div key={index} className="mt-2  font-medium flex flex-col gap-8 py-1 px-3">
                {item[0] != "_id" && item[0] != "__v" && item[1] && (
                  <div className="flex flex-col py-4 items-center px-6">
                    {item[0] === "Country" && (
                      <span>
                        <IoLocationSharp />
                      </span>
                    )}
                    {item[0] === "LinkedIn" && (
                      <span>
                        <a href={item[1]} target="_blank"><BsLinkedin /></a>
                      </span>
                    )}
                    {item[0] === "Github" && (
                      <span>
                        <a href={item[1]} target="_blank"><BsGithub /></a>
                        
                      </span>
                    )}
                    {item[0] === "Twitter" && (
                      <span>
                        <a href={item[1]} target="_blank"><BsTwitter /></a>
                        
                      </span>
                    )}
                    {/* <span className='italic cursor-pointer'>
                      {item[1] ? item[1] : "N/A"}
                    </span> */}
                  </div>
                )}
              </div>
            );
            
          })
        ) : (
          <div>loading</div>
        )}
      </div>

    </div>
  );
}

export default UserInfo;
