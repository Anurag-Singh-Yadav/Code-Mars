import React from 'react'
import assets from '../../../assets/imageExport'
import RenderLetters from './RenderLetters'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
export default function AboutApp() {
  return (
    <div className='bg-mainbg grid-cols-1 md:grid-cols-2 grid'>
      <div className='p pt-20 pl-[20px] md:translate-x-12'>
      <div className=' text-black font-extrabold text-3xl flex flex-wrap sm:h1'>Start your<br/> coding journey </div>
      <RenderLetters></RenderLetters>

      <NavLink to='/problems' className='primary-btn flex sm:text-3xl text-xl w-60 rounded-md py-2 px-4 items-center justify-center mt-20'><div>Get Started</div> <AiOutlineArrowRight></AiOutlineArrowRight></NavLink>

      </div>

      <div className='h1'>
        <img src={assets.aboutLogo}></img>
      </div>
    </div>

    
  )
}
