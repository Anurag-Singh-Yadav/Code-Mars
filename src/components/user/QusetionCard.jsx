import React from "react";

function QusetionCard({
  author,
  title,
  index,
  sample,
  main,
  sampleAnswer,
  difficulty,
  tags,
  mainAnswer,
  userHandler
}) {
  return (
    <div className="flex">
      <div>{index}</div>
      <div>
        <div>{title}</div>
        <div>{tags}</div>
      </div>
      <div>{difficulty}</div>
      <button>Solve it</button>
    </div>
  );
}

export default QusetionCard;
