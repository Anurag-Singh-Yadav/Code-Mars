import React, { useState } from "react";
import "./ProblemCart.css";
import { useNavigate, useParams } from "react-router-dom";

function ProblemCart({ question, showTags, index }) {
  const navigate = useNavigate();
 let solvedBg = "unsolved";
 if(question.isSolved){
    solvedBg = "solved";
 }
  const clickHandler = (event) => {
    navigate(`/ide/${question._id}`);
  };

  return (
    <div
      className={`flex justify-between px-4 py-2 question-card ${solvedBg} rounded-md shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]`}
    >
      <div className="flex gap-4 items-center">
        <p>{index + 1})</p>
        <p className="font-bold text-xl">{question.title}</p>
        <p className={`${question.difficulty} rounded-md text-sm px-2 py-1`}>{question.difficulty}</p>
        {showTags && (
          <div className="flex gap-2 text-sm text-white">
            {question.tags.map((obj, index) => {
              return (
                index < 10 && (
                  <p
                    key={index}
                    className="rounded-lg bg-navcolor text-white text-sm px-1 py-[.5px]"
                  >
                    {obj}
                  </p>
                )
              );
            })}
          </div>
        )}
      </div>
      <div className="flex justify-center items-center">
        <button
          className="bg-[#3a9b33] text-white px-3 py-1 border-[2px] border-black rounded-2xl font-[600] hover:bg-[#2a6826] ml-2"
          onClick={clickHandler}
        >
          Solve
        </button>
      </div>
    </div>
  );
}

export default ProblemCart;