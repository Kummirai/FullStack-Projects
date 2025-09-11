import React from "react";

const InputField = ({ answer, getAnswer, handleSubmit, isCorrect }) => {
  console.log(isCorrect);

  return (
    <div className="flex items-center justify-center my-4">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-[500px] h-[150px] flex flex-col justify-center items-center"
      >
        <input
          type="text"
          autoFocus="true"
          name=""
          id=""
          value={answer}
          onChange={(e) => getAnswer(e)}
          className={`bg-gray-200 block rounded-3xl p-2.5 w-full text-gray-700 mb-5 ${
            isCorrect === "correct"
              ? "border-2 border-green-700"
              : isCorrect === "incorrect"
              ? "border-2 border-red-600"
              : "outline-blue-300"
          }`}
        />
        <button
          className="bg-blue-950 border text-white px-5 py-1 rounded-3xl hover:cursor-pointer hover:bg-transparent hover:text-blue-950
        hover:border border-blue-950"
        >
          Answer
        </button>
      </form>
    </div>
  );
};

export default InputField;
