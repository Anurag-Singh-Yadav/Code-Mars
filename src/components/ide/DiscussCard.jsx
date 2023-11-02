import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
const deletePostUrl = import.meta.env.VITE_REACT_APP_DELETE_DISCUSSION;
function DiscussCard({ data,temp,setTemp,currTab,setCurrTab }) {
  const { title, body, date, userHandle, _id } = data;
  const user = Cookies.get("userHandle");
    async function deletePost(){
        try{
            const token = Cookies.get("token");
            const response = await axios.post(
              `${baseUrl}${deletePostUrl}`,
              {
                token,
                _id:_id
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            setTemp(!temp);
        }catch(e){
            toast.error('Something Went Wrong, Please Try again!!');
        }
    }
  return (
    <div className="flex flex-col px-3 py-1 unsolved shadow-md shadow-[#b59b9b] text-black rounded-md">
      <div className="font-bold">{title}</div>
      <div className="font-600">{body}</div>
      <div className="flex justify-between items-center">
      {
          user===userHandle && <div className="cursor-pointer" onClick={deletePost}><AiFillDelete/></div>
      }
        <div>
          <div className="text-right">
            Posted by:{" "}
            <span className="font-[600] text-[#4a9c49] underline italic">
              {userHandle}
            </span>
          </div>
          <div className="text-right">
            Posted on: {new Date(date).toLocaleDateString()}
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default DiscussCard;
