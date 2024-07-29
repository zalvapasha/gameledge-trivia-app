import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import QuizPage from "../pages/QuizPage";
import ResultPage from "../pages/ResultPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quiz/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
