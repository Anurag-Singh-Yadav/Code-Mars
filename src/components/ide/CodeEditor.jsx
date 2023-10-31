import React, { useState } from "react";
import { AiOutlineFullscreen,AiOutlineFullscreenExit } from "react-icons/ai";
import { Editor } from "@monaco-editor/react";
function CodeEditor({ fullScreen, setFullScreen,setLanguages,language,setCode,code }) {
  const languageOptions = [
    { value: "cpp", label: "C++" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "csharp", label: "C#" },
  ];
  return (
    <div className="my-4">
      <div className="flex justify-between mx-3 my-1">
        {fullScreen ? (
          <AiOutlineFullscreenExit onClick={() => setFullScreen(false)} className="cursor-pointer" />
        ) : (
          <AiOutlineFullscreen onClick={() => setFullScreen(true)} className=" cursor-pointer" />
        )}
        <div className="flex">
          <div>Select Language</div>
          <select
            id="language-select"
            value={language}
            onChange={(e) => {setLanguages(e.target.value)}}
            className="text-black bg-[#3cfd80] rounded-md px-3 ml-2"
          >
            {languageOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="bg-[#3cfd80]"
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Editor
        height="80vh"
        language={language}
        theme="vs-dark"
        value={code}
        onChange={(e)=>{setCode(e)}}
        options={{
          inlineSuggest: true,
          fontSize: "16px",
          autoClosingBrackets: true,
          minimap: { scale: 10 },
          scrollBeyondLastLine: false,
        }}
        className="border-[2px] border-white p-1"
      />
    </div>
  );
}

export default CodeEditor;
