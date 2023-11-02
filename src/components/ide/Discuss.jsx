import axios from "axios";
import React, { useEffect, useState } from "react";
import DiscussCard from "./DiscussCard";
import Spinner from "./Spinner";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import IdeMobileNavbar from "./IdeMobileNavbar";
const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
const getDiscussUrl = import.meta.env.VITE_REACT_APP_DESCUSSION;
const postDiscussUrl = import.meta.env.VITE_REACT_APP_POST_DISCUSSION;
function Discuss({ qid,currTab,setCurrTab }) {
    const navigate = useNavigate();
  const [body, setBody] = useState(null);
  const [temp,setTemp] = useState(false);
  const [wantPost, setWantPost] = useState(false);
  useEffect(() => {
    async function getDiscuss() {
      const response = await axios.get(`${baseUrl}${getDiscussUrl}/${qid}`);
      //   console.log(response);
      setBody(response.data.response);
    }
    
    getDiscuss();
  }, [temp]);

  const [formData, setFormData] = useState({ title: "", body: "" });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function submitHandler(e) {
    e.preventDefault();
    try {
      console.log(formData);
      const token = Cookies.get("token");
      const response = await axios.post(
        `${baseUrl}${postDiscussUrl}`,
        {
          token,
          qid,
          title: formData.title,
          body: formData.body,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response);
      toast.success("Post Successfully");
      setWantPost(false);
      setTemp(!temp);
    } catch (e) {
      console.log(e);
      if (e.response?.data?.message?.includes("decoding")) {
        navigate("/login");
      }
      toast.warning("Something Went Wrong, Please Try again!!");
      console.error(e);
    }
  }

  return (
    <div>
      {wantPost && (
        <div className="mt-6">
          <form action="" className="">
            <div className="flex flex-col gap-4 mb-3">
              <label htmlFor="title">Title</label>
              <input
                className="py-2 px-4"
                id="title"
                name="title"
                placeholder="Enter the Title"
                onChange={handleChange}
                value={formData.title}
              ></input>
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="body">Description</label>
              <input
                className="py-2 px-4"
                id="body"
                name="body"
                placeholder="Enter the Description"
                onChange={handleChange}
                value={formData.body}
              ></input>
            </div>
            <button
              className="bg-navcolor text-white rounded-md py-2 px-4 mt-2 mr-1"
              onClick={submitHandler}
            >
              Submit
            </button>
          </form>
        </div>
      )}

      {!wantPost && (
        <div className="flex justify-between mx-2 pt-2">
          <div className="mt-6 mb-3">
          Want to share your idea?{" "}
          <button
            className="cursor-pointer bg-navcolor text-white py-1 px-4 rounded-md"
            onClick={(e) => {
              e.preventDefault();
              setWantPost(true);
            }}
          >
            Post
          </button>
        </div>
        <IdeMobileNavbar currTab={currTab} setCurrTab={setCurrTab}></IdeMobileNavbar>
        </div>
      )}

      {!body && <Spinner />}

      {body && body.length == 0 && <div>No Discussion Yet</div>}

      <div className="mt-6 flex flex-col gap-2 mr-2">
        {body &&
          body.length > 0 &&
          body.map((item, index) => {
            return <DiscussCard data={item} temp={temp} setTemp={setTemp} key={index}></DiscussCard>;
          })}
      </div>
    </div>
  );
}

export default Discuss;
