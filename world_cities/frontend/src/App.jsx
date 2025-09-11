import CorrectAnswer from "./components/CorrectAnswer";
import Header from "./components/Header";
import InputField from "./components/InputField";
import Question from "./components/Question";
import { useEffect, useState } from "react";

function App() {
  const [answer, setAnswer] = useState("");
  const [countries, setCountries] = useState([]);
  const [question, setQuestion] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);

  const getAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const nextQuestion = () => {
    setTimeout(() => {}, 4000);
    const index = Math.floor(Math.random() * countries.length);
    setQuestion(countries[index]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.length !== 0) {
      if (answer === question["Capital City"]) {
        setScore((prev) => prev + 1);
        nextQuestion();
      } else {
        console.log(`Answer is incorrect!`);
        if (score > 0) {
          setScore((prev) => prev - 1);
        }
        nextQuestion();
      }
    } else {
      return;
    }

    setTimeout(() => {
      setShowAnswer(true);
    }, 1000);

    setTimeout(() => {
      setShowAnswer(false);
    }, 2000);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/");
      const data = await response.json();
      setCountries(data);
      const index = Math.floor(Math.random() * data.length);
      setQuestion(data[index]);
    };

    fetchData();
  }, []);

  return (
    <div className="container h-[100vh] flex flex-col p-10 m-auto">
      <Header score={score} />
      <div className="mt-[10rem] my-bg-blur flex flex-col items-center w-[fit-content] shadow-2xl p-10 px-16 rounded-2xl m-auto">
        <Question question={question} />
        <InputField
          answer={answer}
          getAnswer={getAnswer}
          handleSubmit={handleSubmit}
        />
        <CorrectAnswer question={question} showAnswer={showAnswer} />
      </div>
    </div>
  );
}

export default App;
