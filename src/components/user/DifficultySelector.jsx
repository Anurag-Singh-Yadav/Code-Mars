import React from 'react';

const DifficultySelector = ({ selectedDifficulty, onDifficultyChange }) => {
  const difficulties = ['easy', 'medium', 'hard'];

  return (
    <div className='flex flex-col'>
      <label>Select Difficulty:</label>
      <div className='flex gap-2'>
      {difficulties.map((difficulty) => (
        <div key={difficulty} className="flex items-center">
          <input
            type="radio"
            id={difficulty}
            value={difficulty}
            checked={selectedDifficulty === difficulty}
            onChange={() => onDifficultyChange(difficulty)}
          />
          <label htmlFor={difficulty} className="ml-2">
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </label>
        </div>
      ))}
      </div>
    </div>
  );
};

export default DifficultySelector;
