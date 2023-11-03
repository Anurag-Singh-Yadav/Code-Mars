import React from 'react';
import './Card.css';  // Import the CSS file for styling

function Card({ title, description, icon, link }) {
  return (
    <div className='flex flex-col justify-between items-center bg-white rounded-lg border-2 border-b-4 text-black font-sens hover:scale-105 transition duration-500 py-1 px-2 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
      <div className='image-container py-2 flex justify-center items-center'>
        <img className='image md:p-6' src={icon} alt={title} />
      </div>
      <div className='font font-serif font-bold text-2xl py-2 px-4'>{title}</div>
      <div className='py-2 px-4 font-sans text-gray-700'>{description}</div>
      <a className='bg-navcolor text-white my-2 items-center py-2 px-4 rounded-md font-serif font-semibold text-xl hover:bg-mainbg hover:text-black ' href={link} target='_blank' rel='noopener noreferrer'>Learn more</a>
    </div>
  );
}

export default Card;
