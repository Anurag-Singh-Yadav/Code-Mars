import React, { useState } from "react";
import PieChart from "./PieChart";
import CircularPercentageGraph from "./CircularPercentageGraph";
import LineProgressTracker from "./LineProgressTracker";


function SolvedQuestions({ typeQuestion, total, totalData }) {
  let data;
  const { totalEasy, totalMedium, totalHard, rank, totalUser } = totalData;
  const percentage = (total / (totalEasy + totalMedium + totalHard)) * 100;

  console.log("total question solved by user", total);
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
    <div className="flex flex-wrap justify-between items-center px-4 bg-navcolor text-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-md">
      <div className="">
        <CircularPercentageGraph percentage={percentage} />
      </div>

      <div className="flex flex-wrap flex-col gap-1  justify-center items-start">
        <LineProgressTracker
          color={"#2cbb5d"}
          type={"Easy"}
          qCount={easy}
          totalQCount={totalEasy}
        ></LineProgressTracker>
        <LineProgressTracker
          color={"#f0ad4e"}
          type={"Medium"}
          qCount={medium}
          totalQCount={totalMedium}
        ></LineProgressTracker>
        <LineProgressTracker
          type={"Hard"}
          color={"#d9534f"}
          qCount={hard}
          totalQCount={totalHard}
        ></LineProgressTracker>
      </div>
    </div>
  );
}

export default SolvedQuestions;
