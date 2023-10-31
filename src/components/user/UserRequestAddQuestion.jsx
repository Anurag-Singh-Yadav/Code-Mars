import React, { useState } from "react";
import InputField from "./InputField";
import DifficultySelector from "./DifficultySelector";
import axios from "axios";
import { toast } from "react-toastify";
const baseurl = import.meta.env.VITE_REACT_APP_BASE_URL;
const userReqToAdd = import.meta.env.VITE_REACT_APP_USERREQUESTTOADD;
const UserRequestAddQuestion = () => {
  const [cnt, setCnt] = useState(3);
  const [tags,setTags] = useState("");
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    sample: "",
    constraints: "",
    sampleAnswer: "",
    description: "",
    difficulty: "",
    main: [""],
    mainAnswer: [""],
    tags:[""],
  });

  const changeHandler = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  function descriptionChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value  
    });
  }
  

  const [selectedDifficulty, setSelectedDifficulty] = useState("medium");

  const handleDifficultyChange = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  const renderInputFields = () => {
    const inputFields = [];
    for (let i = 0; i < cnt; i++) {
      inputFields.push(
        <div key={i}>
          <div>Main TestCase {i+1}</div>
          <InputField
          type="text"
          label={`Question ${i + 1}`}
          placeHolder={`Question ${i + 1}`}
          value={formData.main[i] || ""}
          onChange={(name, value) => {
            const newMain = [...formData.main];
            newMain[i] = value;
            setFormData({ ...formData, main: newMain });
          }}
        />
          <InputField
          type='text'
          label={`Main Answer ${i+1}`}
          placeHolder={`Main Answer ${i+1}`}
          value={formData.mainAnswer[i] || ""}
          onChange={(name, value) => {
            const newMainAnswer = [...formData.mainAnswer];
            newMainAnswer[i] = value;
            setFormData({ ...formData, mainAnswer: newMainAnswer });
          }}
          />
        </div>
      );
    }
    return inputFields;
  };

  async function submitHandler(e){
    e.preventDefault();
    
    try{ 
      formData.difficulty = selectedDifficulty;
      console.log(formData);
      const response = await axios.post('http://localhost:4000/admin/pushDirect',formData)
      console.log(response);
      toast.success("Question Added Successfully");
    }catch(e){
      console.log(e.message);
      toast.error("Error in Adding Question");
    }
  }

  return (
    <div className="flex flex-col justify-center">
      <form className="flex flex-col justify-center mx- auto gap-3 mx-auto pt-3  w-2/4">
        <InputField 
          heading="Your Name"
          type="text"
          label="author"
          value={formData.author}
          onChange={changeHandler}
          placeHolder="Enter Your Name"
        />
        <InputField
          heading="Enter Question Title"
          type="text"
          label="title"
          value={formData.title}
          onChange={changeHandler}
          placeHolder="Question Title"
        />
        <DifficultySelector
          selectedDifficulty={selectedDifficulty}
          onDifficultyChange={handleDifficultyChange}
        />
          <label htmlFor="description">Question Description</label>
          <textarea id="description" type='text' name="description" value={formData.description} placeholder="Enter Question Description" onChange={descriptionChange}></textarea>
          <InputField
          heading="Constraints"
          type='text'
          label="constraints"
          placeHolder="Constraints"
          value={formData.constraints}
          onChange={changeHandler}
          >
          </InputField>
        <InputField
          heading="Enter Sample Testcase"
          type="text"
          label="sample"
          placeHolder="Sample testcase"
          value={formData.sample}
          onChange={changeHandler}
        />
          
        <InputField
          heading="Enter Sample Answer"
          type="text"
          label="sampleAnswer"
          value={formData.sampleAnswer}
          placeHolder="Sample testcase Answer"
          onChange={changeHandler}
        />
        <p>Tags: 
          <div>
            {
              formData.tags.map((tag,index)=>{
                return <span key={index} className="bg-gray-200 rounded-full px-2 py-1 mx-1">{tag}</span>
              })
            }
          </div>
          </p>
        <label htmlFor="tags">Tags</label>
        <input
        id="tags"
        placeholder="Enter the tags of questions"
        value= {tags}
        onChange={(e)=>{setTags(e.target.value)}}
        ></input>
        <button onClick={(e)=>{
          e.preventDefault();
          formData.tags.push(tags);
          setTags("");
        }}>Add tags</button>
        {renderInputFields()}
        
      </form>
      <div className="flex justify-center gap-40 py-4 ">
        <button onClick={()=>{setCnt(cnt + 1)}}>Add More testcase</button>
        <button onClick={()=>{if(cnt > 3)setCnt(cnt - 1)}}>Remove testcase</button>
        <button onClick={submitHandler}>Submit</button>
      </div>
    </div>
  );
};

export default UserRequestAddQuestion;
