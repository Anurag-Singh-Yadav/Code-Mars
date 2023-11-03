import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { BsFullscreen } from "react-icons/bs";
import { BsFullscreenExit } from "react-icons/bs";

function CodeEditor({ full , setFull, code, setCode , language , setLanguage}) {

  console.log(full , setFull, code , language , setLanguage); 

  console.log('rendered :)');

  const changeHandler = (newValue) => {
    setCode(newValue);
  };

  const languageOptions = [
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "csharp", label: "C#" },
    { value: "cpp", label: "C++" },
  ];

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const [fontSize, setFontSize] = useState("16px");

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  return (
    <div className="gap-2 mt-4">
      <div className="flex sm:justify-between flex-col md:flex-row justify-between md:items-center flex-wrap  gap-4 mx-2">
        {full ? (
          <BsFullscreenExit
            onClick={() => setFull(!full)}
            title="Exit full-screen" className=" cursor-pointer"
          />
        ) : (
          <BsFullscreen
            onClick={() => setFull(!full)}
            title="Enter full-screen" className=" cursor-pointer hidden md:block"
          />
        )}

        <div className="flex justify-between">
          <label htmlFor="language-select">Select a language:</label>
          <select
            id="language-select"
            value={language}
            onChange={handleLanguageChange}
            className="text-black bg-[#3cfd80] rounded-md px-3 ml-2"
          >
            {languageOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-[#3cfd80]">
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-between">
          <label htmlFor="font-size-select">Select font size:</label>
          <select
            id="font-size-select"
            value={fontSize}
            onChange={handleFontSizeChange}
            className="text-black bg-[#3cfd80] rounded-md px-3 ml-2"
          >
            <option value="14px">14px</option>
            <option value="16px">16px</option>
            <option value="18px">18px</option>
            <option value="20px">20px</option>
          </select>
        </div>

        </div>

      <Editor
        height="100vh"
        language={language}
        theme="vs-dark"
        value={code}
        onChange={changeHandler}
        options={{
          inlineSuggest: true,
          fontSize: fontSize,
          autoClosingBrackets: true,
          minimap: { scale: 10 },
        }}
        className="border-[1px] border-white p-1  h-[100vh]"
      />
    </div>
  );
}

export default CodeEditor;
