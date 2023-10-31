import React from 'react'
import assets from '../../../assets/imageExport'
import RenderLetters from './RenderLetters'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
export default function AboutApp() {
  return (
    <div className='bg-mainbg grid-cols-2 grid'>
      <div className='p pt-20 pl-[20px] translate-x-12'>
      <div className=' text-black font-extrabold h1 flex flex-wrap'>Start your<br/> coding journey </div>
      <RenderLetters></RenderLetters>

      <NavLink to='/problems' className='primary-btn flex text-3xl w-[40%] rounded-md py-2 px-4 items-center justify-center mt-20'><div>Get Started</div> <AiOutlineArrowRight></AiOutlineArrowRight></NavLink>

      </div>

      <div className='h1'>
        <img src={assets.aboutLogo}></img>
      </div>
    </div>

    
  )
}
