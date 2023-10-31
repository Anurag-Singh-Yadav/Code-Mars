import React, { useEffect, useState } from "react";
import IdeNavbar from "./IdeNavbar";
import ProblemDescription from "./ProblemDescription";
import CodeEditor from "./CodeEditor";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import Loading from "../user/Loading";
import Spinner from "./Spinner";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import MySubmission from "./MySubmission";
import Discuss from "./Discuss";
const getQuestion = import.meta.env.VITE_REACT_APP_GET_QUESTION;
const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
const runCode = import.meta.env.VITE_REACT_APP_CODE_OUTPUT;
const submitCode = import.meta.env.VITE_REACT_APP_SUBMIT_CODE;
function Ide() {
  const navigate = useNavigate();
  const id = useParams();
  const [currTab, setCurrTab] = useState("description");
  const [showSpinner, setShowSpinner] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [language, setLanguage] = useState("cpp");
  const [code, setCode] = useState("");
  const [question, setQuestion] = useState(null);
  const [customInput, setCustomInput] = useState('');
  const [customOutput, setCustomOutput] = useState('');
  const [title,setTitle] = useState('');
  async function fetchQuestion(id) {
    console.log(`${baseUrl}${getQuestion}/${id.id}`);
    console.log(id.id);
    const response = await axios.get(`${baseUrl}${getQuestion}/${id.id}`);
    setQuestion(response.data.question);
    setCustomInput(response.data.question.sample);
    // console.log(response.data.question);
    setTitle(response.data.question.title);
  }
  const obj = {
    customInput,
    setCustomInput,
    customOutput,
    setCustomOutput,
  };

  useEffect(() => {
    fetchQuestion(id);
  }, []);

  async function runHandler() {
    setShowSpinner(true);
    try {
      const token = Cookies.get("token");
      // if(!token){
      //   toast.info('Please Login to run the code');
      //   navigate('/login');
      //   return;
      // }
      const lang = (language === "cpp") ? "c_cpp" : language;
      const response = await axios.post(`${baseUrl}${runCode}`, {
        language:lang,
        code,
        input:customInput,
        token
      });
      console.log(response.data);
      setShowSpinner(false);
      setCustomOutput(response.data.message.output);
    } catch (e) {
      setShowSpinner(false);
      if(e.response?.data?.message?.includes('decoding')){
      navigate('/login');
      toast.info("Please Login to run the code");
      return;
      }
      toast.warning('Internal Server Error!!');
      console.error(e);
    }
  }

  async function submitHandler() {
    setShowSpinner(true);
    try{
      const token = Cookies.get("token");
      if(token === undefined){
        return;
      }
      const lang = (language === "cpp") ? "c_cpp" : language;
      const res = await axios.post(`${baseUrl}${runCode}`, {
        language:lang,
        code,
        input:customInput,
        token
      });
      let errorCheck = res.data.message.output.includes("error") || res.data.message.output.includes("Error") || res.data.message.output.includes("ERROR");
      console.log(res.data.message.output);

      if(errorCheck){
        setShowSpinner(false);
        toast.error('Compilation Error or Run-Time Error');
        return;
      }
      
      const response = await axios.post(`${baseUrl}${submitCode}`, {
        language:lang,
        code,
        input:customInput,
        output:customOutput,
        qid:id.id,
        token,
        title,
      });
      setShowSpinner(false);
      setCurrTab('mySubmission');
      // console.log(response.data);
      const verdict = response.data.verdict;
      console.log(verdict);
    }catch(e){
      setShowSpinner(false);
      console.error(e);
    }

  }

  return (
    <div className="px-4 pl-6 mb-4">
      {!question && <Loading />}
      {question && (
        <div>
          {fullScreen ? (
            <div>
              <CodeEditor
                fullScreen={fullScreen}
                setFullScreen={setFullScreen}
                setLanguages={setLanguage}
                language={language}
                setCode={setCode}
                code={code}
              ></CodeEditor>
            </div>
          ) : (
            <div className="grid grid-cols-2">
              <div className="">
                <IdeNavbar setCurrTab={setCurrTab} currTab={currTab}></IdeNavbar>
                
                {
                  currTab == "description" && 
                    <ProblemDescription question={question} obj={obj}></ProblemDescription>
                }
                

                {currTab == 'mySubmission' && 
                <MySubmission qid={id.id}></MySubmission>}

                 {currTab == "discuss" && <Discuss qid={id.id}></Discuss> }

              </div>
              <div>
                <CodeEditor
                  fullScreen={fullScreen}
                  setFullScreen={setFullScreen}
                  setLanguages={setLanguage}
                  language={language}
                  setCode={setCode}
                  code={code}
                ></CodeEditor>
                <div className="flex justify-between items-center mr-1">
                  <button onClick={runHandler} className="easy text-white py-1 px-3 rounded-md">Run Code</button>
                  <button onClick={submitHandler} className="bg-navcolor text-white py-1 px-3 rounded-md">Submit Code</button>
                </div>
                  {
                    showSpinner && <Spinner></Spinner>
                  }
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Ide;
