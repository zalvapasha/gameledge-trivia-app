import React, { useState, useEffect } from "react";
import data from "../utils/dummy.json";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const shuffleAnswer = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const decodeHTMLEntities = (str) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = str;
    return tempElement.textContent || tempElement.innerText;
  };

  useEffect(() => {
    setQuestion(data[index]);
    const allAnswers = [
      data[index].correct_answer,
      ...data[index].incorrect_answers,
    ];
    setAnswers(shuffleAnswer(allAnswers));
  }, [index]);

  const handleAnswer = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
    } else {
      navigate("/quiz/result");
    }
  };

  const colorClasses = [
    "bg-blue-600",
    "bg-red-600",
    "bg-orange-600",
    "bg-green-600",
  ];

  const renderQuestion = () => {
    if (question.type === "multiple") {
      return (
        <div className="w-full grid grid-cols-2 grid-rows-2 size-1/2 gap-5">
          {answers.map((answer, id) => (
            <button
              key={id}
              onClick={() => handleAnswer(answer)}
              className={`${
                colorClasses[id % colorClasses.length]
              } rounded-[20px]`}
            >
              {answer}
            </button>
          ))}
        </div>
      );
    } else if (question.type === "boolean") {
      return (
        <div className="w-full grid grid-cols-2 h-1/2 gap-5">
          <button
            onClick={handleAnswer}
            className="bg-green-600 rounded-[20px]"
          >
            True
          </button>
          <button onClick={handleAnswer} className="bg-red-600 rounded-[20px]">
            False
          </button>
        </div>
      );
    }
  };

  return (
    <>
      <div className="h-1/4">
        <div className="progress-bar">
          <div className="progress-bar-fill"></div>
        </div>
      </div>
      <div className="w-full h-1/4 flex justify-center items-center">
        <h1 className="text-center px-10">
          {decodeHTMLEntities(question.question)}
        </h1>
      </div>
      {renderQuestion()}
    </>
  );
};

export default Quiz;
