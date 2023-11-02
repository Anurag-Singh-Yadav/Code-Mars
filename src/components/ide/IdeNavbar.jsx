import React from "react";


function IdeNavbar({ setCurrTab, currTab }) {
  return (
      <div className="hidden md:flex justify-between items-center px-6 pt-3">
        <div
          onClick={() => setCurrTab("description")}
          className={`f font-semibold cursor-pointer py-2 px-5 rounded-md ${
            currTab === "description"
              ? "active"
              : "hover:bg-gray-500 hover:text-white"
          }`}
        >
          Description
        </div>
        <div
          onClick={() => setCurrTab("discuss")}
          className={`f font-semibold cursor-pointer py-2 px-5 rounded-md ${
            currTab === "discuss"
              ? "active"
              : "hover:bg-gray-500 hover:text-white"
          }`}
        >
          Discuss
        </div>
        <div
          onClick={() => setCurrTab("mySubmission")}
          className={`f font-semibold cursor-pointer py-2 px-5 rounded-md ${
            currTab === "mySubmission"
              ? "active"
              : "hover:bg-gray-500 hover:text-white"
          }`}
        >
          My Submission
        </div>
      </div>

  );
}

export default IdeNavbar;
