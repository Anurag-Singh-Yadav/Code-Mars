import axios from "axios";
import React, { useEffect, useState } from "react";
import ProblemCart from "./ProblemCart";
import Loading from "./Loading";
import ProblemsNavBar from "./ProblemsNavBar";
import Cookies from "js-cookie";
import BottomFooter from "./homePageComponent/BottomFooter";

const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
const getAllQuesAPI = import.meta.env.VITE_REACT_APP_ALL_QUESIONS;

function Problems() {
  const [allQues, setallQues] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [maxiIndex, setMaxiIndex] = useState(0);
  const [nextDisable, setNextDisable] = useState(false);
  const [preDisable, setPreDisable] = useState(true);
  
  const itemsPerPage = 10;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const questionList = allQues || [];
  const visibleItems = questionList.slice(startIndex, endIndex);

  const handleShowMore = () => {
  
    setCurrentPage(currentPage + 1);
    if ((currentPage + 2) * 10 >= maxiIndex) {
      setNextDisable(true);
    }
    setPreDisable(false);
  };

  const handleShowPrevious = () => {
    
    setCurrentPage(currentPage - 1);
    if (!(currentPage-1)) {
      setPreDisable(true);
    }
    setNextDisable(false);
  };

  async function getQues() {
    const userHandle = Cookies.get("userHandle");
    console.log(userHandle);
    const response = await axios.post(`${baseUrl}${getAllQuesAPI}`, {
      userHandle: userHandle,
    });
    const data = response.data.questionsList;
    setallQues(data);
    setMaxiIndex(data.length - 1);
  }

  useEffect(() => {
    getQues();
  }, []);

  const [showTags, setShowTags] = useState(false);

  return (
    <div className="bg-mainbg">
      {!allQues && <Loading />}
      {allQues && (
        
        <div className="bg-mainBg mt-0">
          <ProblemsNavBar showTags={showTags} setShowTags={setShowTags} />
          <div className="flex flex-col p-4 bg-mainBg min-h-[100vh] gap-2 px-2 sm:px-9 ">
            {visibleItems.map((question, index) => (
              <ProblemCart
                question={question}
                index={index + startIndex}
                key={index}
                showTags={showTags}
              />
            ))}
          </div>
        </div>
      )}
      <div className="flex justify-between mx-9 mb-3 items-center">
        <button
          className={`shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] px-4 py-2 ${
            preDisable ? "cursor-not-allowed" : ""
          }`}
          onClick={handleShowPrevious}
          disabled={preDisable}
        >
          Previous
        </button>
        <button
          className={`shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] px-4 py-2 ${
            nextDisable ? "cursor-not-allowed" : ""
          }`}
          onClick={handleShowMore}
          disabled={nextDisable}
        >
          Next
        </button>
      </div>
      <BottomFooter></BottomFooter>
    </div>
  );
}

export default Problems;
