import React from "react";
import IdeMobileNavbar from "./IdeMobileNavbar";

function ProblemDescription({ question,obj,currTab,setCurrTab }) {
  const { title, description, sample, sampleAnswer, author, difficulty } =
    question;
    const {
        customInput,
        setCustomInput,
        customOutput,
      } = obj;
  return (
    <div className="my-6 flex flex-col gap-1">
      <div className="flex justify-between items-center">
      <div className="t text-2xl font-serif font-bold">{title}</div>
      <div className="md:hidden">
        <IdeMobileNavbar currTab={currTab}setCurrTab={setCurrTab} ></IdeMobileNavbar>
      </div>
      </div>
      <div>Author : {author}</div>
      <span className={`text-sm px-2 py-1 w-fit rounded-md ${difficulty}`}>{difficulty}</span>
      <div className="font-medium">{description}</div>
      <div className="font-semibold">Sample input</div>
      <div>{sample}</div>
      <div className="font-semibold">Sample Output</div>
      <div>{sampleAnswer}</div>
      <form className="w-full pr-3">
        <label htmlFor="custom-input">Custom Input</label>
        <textarea id="custom-Input" onChange={(e)=>{setCustomInput(e.target.value)}} className="p-2 block border min-h-[100px] w-[100%]" value={customInput}></textarea>
        <label htmlFor="custom-output">Custom Output</label>
        <div id="custom-output"  className="p-2 block border min-h-[100px] w-full" >{customOutput}</div>
      </form>
    </div>
  ); 
}

export default ProblemDescription;
