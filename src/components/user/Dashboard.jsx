import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import './dashboard/dashboard.css';
import UserInfo from "./dashboard/UserInfo";
import SolvedQuestions from "./dashboard/SolvedQuestions";
import Rank from "./dashboard/Rank";
import AllSubmission from "./dashboard/AllSubmission";
import axios from "axios";
import BottomFooter from "./homePageComponent/BottomFooter";
import PieChart from "./dashboard/PieChart";
const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
const userDetailsUrl = import.meta.env.VITE_REACT_APP_GET_USER_DETAILS;
function Dashboard({ setIsLogin }) {
  const { userHandle } = useParams();
  const [qid, setQid] = useState();
  const [totalData, setTotalData] = useState({});
  const [userDetails, setUserDetails] = useState(null);
  const [total, setTotal] = useState(null);
  const [typeQuestion, setTypeQuestion] = useState(null);
  const [questionSolvedByUser, setQuestionSolvedByUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [totalUser, setTotalUser] = useState(null);
  
  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await axios.get(
          `${baseUrl}${userDetailsUrl}/${userHandle}`
        );
        setTotal(response.data.response.total);
        setTypeQuestion(response.data.response.typeQuestions);
        setQuestionSolvedByUser(response.data.response.questionSolvedByUser);
        setUserProfile(Object.entries(response.data.response.userProfile));
        setUserDetails(response.data.response.userDetails);
        setTypeQuestion(response.data.response.typeQuestions);
        setTotalData(response.data.response.totalData);
        setTotalUser(response.data.response.totalData.totalUser);
      } catch (e) {
      }
    }
    getUserInfo();
  }, []);
  let data;
  let easy, medium, hard;
  if (typeQuestion) {
    data = [
      { label: "Easy", value: typeQuestion.easy },
      { label: "Medium", value: typeQuestion.medium },
      { label: "Hard", value: typeQuestion.hard },
    ];
    easy = typeQuestion.easy;
    medium = typeQuestion.medium;
    hard = typeQuestion.hard;
  }
  return (

    <div className="bg-mainbg">
      <div className="px-6 py-2 flex main-div-dashboard">
        <div className=" basis-1/3">
        <UserInfo
          userProfile={userProfile}
          userDetails={userDetails}
          userHandle={userHandle}
          totalUser={totalUser}
          rankNumber={totalData.rank}
          userFullName = {totalData.userFullName}
          setIsLogin={setIsLogin}
        ></UserInfo>
        </div>

        <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-3 basis-2/3 ">
          <div className="flex w-full right-div">
            <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-md pie-chart md:w-fit">
              <PieChart data={data}></PieChart>
            </div>

            <SolvedQuestions
              typeQuestion={typeQuestion}
              total={total}
              totalData={totalData}
            ></SolvedQuestions>

<div>
         
        </div>
          </div>
          <div className="">
          <div className=" bg-navcolor text-white text-center px-4 py-2 font-normal rounded-md text-lg my-2">
            Recent Submission
          </div>

          <AllSubmission
            questionSolvedByUser={questionSolvedByUser}
          ></AllSubmission>
          </div>
        
        </div>

      </div>
      <BottomFooter></BottomFooter>
    </div>
  );
}

export default Dashboard;
