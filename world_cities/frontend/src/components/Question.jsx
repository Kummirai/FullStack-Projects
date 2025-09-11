import React from "react";

const Question = ({ question }) => {
  return (
    <div className="flex justify-center items-center">
      <h2 className="text-2xl text-indigo-950 font-semibold">
        What is the capital of {question.Country}?
      </h2>
    </div>
  );
};

export default Question;
