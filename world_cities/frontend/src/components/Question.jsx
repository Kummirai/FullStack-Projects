import React from "react";

const Question = ({ question }) => {
  return (
    <div className="flex justify-center items-center">
      <h2 className="text-2xltext-center text-indigo-950 font-semibold">
        What is the capital of <br></br>
        <span className="text-5xl font-bold "> {question.Country}?</span>
      </h2>
    </div>
  );
};

export default Question;
