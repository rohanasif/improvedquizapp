import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Question from "./Question";

axios.defaults.baseURL = "http://localhost:8000";

function App() {
  const [questions, setQuestions] = useState([]);
  const [selected, setSelected] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [count, setCount] = useState(1);

  useEffect(() => {
    axios
      .get("/questions")
      .then((res) => setQuestions(res.data))
      .catch((err) => console.log(err));
  }, []);

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return null;
  }

  const { number, text, first, second, third, fourth, correct } =
    currentQuestion;

  const handleClick = (e) => {
    setSelected(e.target.innerText);
  };

  const handleNext = () => {
    setSelected(null);
    if (selected === correct)
      setCorrectAnswers((prevQuantity) => prevQuantity + 1);
    if (currentQuestionIndex === questions.length - 1) {
      return;
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const isNextButtonDisabled = !selected || count > questions.length;

  return (
    <div>
      <Question
        number={number}
        text={text}
        first={first}
        second={second}
        third={third}
        fourth={fourth}
        handleClick={handleClick}
        handleNext={handleNext}
        isNextButtonDisabled={isNextButtonDisabled}
      />
      <div>Score:{(correctAnswers / questions.length) * 100}</div>
    </div>
  );
}

export default App;
