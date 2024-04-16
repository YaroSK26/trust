import React, { useState, useEffect } from "react";
import questions from "./quizData";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
  }, []);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };
const handleSubmit = () => {
  if (!selectedAnswer) return;

  const isCorrect = currentQuestion.answers.find(
    (a) => a === selectedAnswer
  ).correct;

  if (isCorrect) {
    setFeedback({
      correct: true,
      explanation: currentQuestion.explanation,
    });
  } else {
    setFeedback({
      correct: false,
      explanation: null,
    });
  }
};

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setFeedback(null);
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
  };

  return (
    <div className="flex mi flex-col pt-28 text-[var(--color2)] items-center">
      <h1 className="text-[35px] md:text-[40px] underline text-center mb-8">
        How much do you know?
      </h1>
      {currentQuestion && (
        <div className="flex flex-col items-center justify-center p-4 md:w-[500px]  text-center">
          <p className="text-xl ">{currentQuestion.question}</p>
          <ul className="list-none my-10 grid  md:grid-cols-2  grid-cols-1 gap-6  text-left  m-auto">
            {currentQuestion.answers.map((answer, index) => (
              <li key={index}>
                <button
                  className={`${
                    selectedAnswer === answer ? "text-blue-600" : ""
                  }`}
                  onClick={() => handleAnswerClick(answer)}
                >
                  {index + 1 + "."} &nbsp;
                  {answer.text}
                </button>
              </li>
            ))}
          </ul>
          <button className="button mt-4" onClick={handleSubmit}>
            Submit
          </button>
          {feedback && (
            <div className="pt-12  md:w-[500px] w-[280px] text-center">
              {feedback.correct ? (
                <p className="text-green-500 text-xl">Correct!</p>
              ) : (
                <p className="text-red-500  text-xl">Incorrect.</p>
              )}
              <p>{feedback.explanation}</p>
            </div>
          )}
          {feedback && (
            <button
              className="underline mt-4 gap-2 ml-6 flex"
              onClick={handleNextQuestion}
            >
              Next Question
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
