import CorrectAnswer from "./components/CorrectAnswer";
import Header from "./components/Header";
import InputField from "./components/InputField";
import Question from "./components/Question";

function App() {
  return (
    <div className="container h-[100vh] flex flex-col p-10 m-auto">
      <Header />
      <div className="mt-[10rem]">
        <Question />
        <InputField />
      </div>
      <CorrectAnswer />
    </div>
  );
}

export default App;
