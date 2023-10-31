import React from 'react';
import './Card.css';  // Import the CSS file for styling

function Card({ title, description, icon, link }) {
    console.log(link);
  return (
    <div className='flex flex-col justify-between items-center bg-navcolor rounded-lg border-2 border-b-4 text-white font-sens hover:scale-105 transition duration-500 py-1 px-2 background-shadow'>
      <div className='image-container flex justify-center items-center'>
        <img className='image md:p-6' src={icon} alt={title} />
      </div>
      <div className='font font-serif font-bold text-2xl py-2 px-4'>{title}</div>
      <div className='py-2 px-4 font-sans'>{description}</div>
      <a className='primary-btn items-center py-2 px-4 rounded-md font-serif font-semibold text-xl' href={link} target='_blank' rel='noopener noreferrer'>Learn more</a>
    </div>
  );
}

export default Card;
