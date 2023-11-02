import axios from 'axios';
import React, { useEffect, useState } from 'react'

// all questions that are requested by the user render here in admin pages
const baseurl = import.meta.env.VITE_REACT_APP_BASE_URL;
const questionsUrl = import.meta.env.VITE_REACT_APP_getAllRequestedQuestions;
export default function Requested() {
  const [reqestedQuestions,setRequestedQuestions] = useState(null);
  useEffect(()=>{
    
    async function fetchQuestions(){
        try{
            const response = await axios.get(`${baseurl}${questionsUrl}`);
            setRequestedQuestions(response);
        }catch(e){
        }
    }

    fetchQuestions();
  },[])

  return (
    <div>
      
    </div>
  )
}
