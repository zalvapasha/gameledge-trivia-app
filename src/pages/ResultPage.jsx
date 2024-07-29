import React from "react";

const ResultPage = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-3xl h-screen mx-auto p-4">
      <div className="flex flex-col justify-center items-end bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-600 to-indigo-500 rounded-[40px] h-full max-h-[1000px] w-full p-5">
        <div className="flex justify-center items-center w-full h-1/2">
          <svg class="transform -rotate-90 w-72 h-72">
            <circle
              cx="145"
              cy="145"
              r="120"
              stroke="currentColor"
              stroke-width="30"
              fill="transparent"
              class="text-white"
            />

            <circle
              cx="145"
              cy="145"
              r="120"
              stroke="currentColor"
              stroke-width="30"
              fill="transparent"
              class="text-blue-500 "
            />
          </svg>
        </div>
        <div className="w-full h-1/2">
          <table class="w-full h-1/2 text-2xl">
            <tbody>
              <tr>
                <td>The Sliding Mr. Bones</td>
                <td>Malcolm Lockyer</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
