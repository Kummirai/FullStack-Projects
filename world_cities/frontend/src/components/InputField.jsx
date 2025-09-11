import React from "react";

const InputField = () => {
  return (
    <div className="flex items-center justify-center">
      <form
        action=""
        className="w-[500px] h-[150px] flex flex-col justify-center items-center"
      >
        <input
          type="text"
          name=""
          id=""
          className="block border border-gray-300 rounded-3xl p-2.5 w-full outline-blue-200 text-gray-700 mb-5"
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
