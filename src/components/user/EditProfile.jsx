import Cookies from 'js-cookie';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'

function EditProfile() {
  const navigate = useNavigate();
  useEffect(()=>{
    const userHandle = Cookies.get("userHandle");
    const token = Cookies.get("token");
    if(!userHandle){
      navigate('/login');
    }
  },[])

  return (
    <div>
    </div>
  ) 
}

export default EditProfile
