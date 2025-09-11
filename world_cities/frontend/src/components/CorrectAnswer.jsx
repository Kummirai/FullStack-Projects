import React from "react";

const CorrectAnswer = ({ question, showAnswer }) => {
  return (
    <div className="flex items-center justify-center">
      {!showAnswer ? (
        ""
      ) : (
        <p className="text-5xl text-[#44647c]">{question["Capital City"]}</p>
      )}
    </div>
  );
};

export default CorrectAnswer;
