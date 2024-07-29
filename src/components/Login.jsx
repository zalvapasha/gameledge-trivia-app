import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleStart = () => {
    navigate("/quiz");
  };

  return (
    <>
      <h2 className="text-7xl font-Patrick font-bold mb-4 text-white">
        Gameledge
      </h2>
      <input
        type="text"
        placeholder="Enter your username"
        className="w-5/6 border-2 text-center border-gray-300 rounded-md p-2 m-2 placeholder:text-center placeholder:text-"
      />
      <button
        onClick={handleStart}
        className="border-2 border-gray-300 rounded-md px-8 py-1 m-3 text-2xl text-white font-Patrick"
      >
        Start
      </button>
    </>
  );
};

export default Login;
