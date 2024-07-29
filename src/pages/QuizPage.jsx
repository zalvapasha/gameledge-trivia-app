import React from "react";
import Quiz from "../components/Quiz";

const QuizPage = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-3xl h-screen mx-auto p-4">
      <div className="flex flex-col justify-center items-end bg-white rounded-[40px] h-full max-h-[1000px] w-full p-5">
        <Quiz />
      </div>
    </div>
  );
};

export default QuizPage;
