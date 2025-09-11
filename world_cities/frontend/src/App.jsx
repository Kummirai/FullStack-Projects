import CorrectAnswer from "./components/CorrectAnswer";
import Header from "./components/Header";
import InputField from "./components/InputField";
import Question from "./components/Question";
import { useState } from "react";

function App() {
  const [answer, setAnswer] = useState("");

  const getAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(answer);
  };

  return (
    <div className="container h-[100vh] flex flex-col p-10 m-auto">
      <Header />
      <div className="mt-[10rem]">
        <Question />
        <InputField
          answer={answer}
          getAnswer={getAnswer}
          handleSubmit={handleSubmit}
        />
      </div>
      <CorrectAnswer />
    </div>
  );
}

export default App;
