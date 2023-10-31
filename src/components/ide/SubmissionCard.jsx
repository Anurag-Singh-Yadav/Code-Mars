import React from "react";

function SubmissionCard({ item }) {
  const {verdict, date} = item;
  let vClass = "correct";
  if (verdict.includes("Wrong")) vClass = "wrong";

  return (
    <div
      className={`flex flex-col px-3 py-1 ${vClass} shadow-md shadow-[#b59b9b] text-black rounded-md border-[2px]`}
    >
      <div className="font-bold">{verdict}</div>
      <div className="text-right">
        Submitted on: {new Date(date).toLocaleDateString()}
      </div>
    </div>
  );
}

export default SubmissionCard;
