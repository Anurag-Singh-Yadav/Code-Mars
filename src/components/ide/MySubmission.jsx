import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import SubmissionCard from "./SubmissionCard";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import IdeMobileNavbar from "./IdeMobileNavbar";
const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
const mySubmissionUrl = import.meta.env.VITE_REACT_APP_MY_SUBMISSIONS;
function MySubmission({ qid, currTab, setCurrTab }) {
  const [mySubmission, setMySubmission] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function getMySubmission() {
      const token = Cookies.get("token");
      // console.log(`${baseUrl}${mySubmissionUrl}`);
      try {
        const response = await axios.post(
          `${baseUrl}${mySubmissionUrl}`,
          {
            token: token,
            qid: qid,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setMySubmission(response.data.response);
      } catch (e) {
        if (e.response.data.message.includes("token")) {
          navigate("/login");
          return;
        }
        // console.log(e);
        toast.error("Something Went wrong");
      }
      // console.log(response.data.response);
    }
    getMySubmission();
  }, []);
  return (
    <div>
      {!mySubmission && <Spinner />}

      {
      mySubmission && mySubmission.length == 0 && <div className="flex justify-between"><div>No Submission Yet</div>
      <IdeMobileNavbar currTab={currTab} setCurrTab={setCurrTab} question={question} ></IdeMobileNavbar>
      </div>
      }

      <div>
      <div className="flex justify-between mx-2 items-center">
        <div className="f font-medium font-sans text-2xl">Your Submission</div>
      <IdeMobileNavbar currTab={currTab} setCurrTab={setCurrTab} ></IdeMobileNavbar>
      </div>
      <div className="mt-4 mr-2">
        {mySubmission &&
          mySubmission.length > 0 &&
          mySubmission.map((item, index) => {
            return <SubmissionCard item={item} key={index}></SubmissionCard>;
          })}
      </div>
      </div>
    </div>
  );
}

export default MySubmission;
