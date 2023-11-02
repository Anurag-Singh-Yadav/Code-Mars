import React from 'react'

import { useState, useEffect } from 'react';

function RenderLetters() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  const textToPrint = "with CodeMars :)";

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < textToPrint.length && !reverse) {
        setText((prevText) => prevText + textToPrint.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      } else if (index > 0 && reverse) {
        setText((prevText) => prevText.slice(0, -1));
        setIndex((prevIndex) => prevIndex - 1);
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setReverse((prevReverse) => !prevReverse);
        }, 500);
      }
    }, reverse ? 25 : 100);

    return () => clearInterval(intervalId);
  }, [index, reverse, textToPrint]);

  return (
    <div>
      <p className='font-extrabold h1 mt-7 h-10 text-navcolor'>{text}</p>
    </div>
  );
}

export default RenderLetters