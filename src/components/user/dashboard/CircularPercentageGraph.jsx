import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularPercentageGraph = ({ percentage }) => {
  console.log(percentage);
  return (
    <div className="circular-graph w-[70%] pt-5 pl-6">
      <CircularProgressbar
        value={percentage}
        text={`${!percentage ? 0 :percentage}%`}
        styles={buildStyles({
          textColor: '#ffffff', // Text color
          pathColor: `#007BFF`, // Circular path color
          trailColor: '#f0f0f0', // Background color
        })}
      />
      <div className="text-center  mt-3">Total Solved</div>
    </div>
  );
};

export default CircularPercentageGraph;
