import React from "react";
import { csvFunction } from "../utils/csvfunction.js";


const CSVUpload = ({setMarkers}) => {

  const markers = () => {
    csvFunction(setMarkers)
  }
  return (
    <div>
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="large_size">Upload your file </label>
      <input class="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="uploadfile" type="file" accept=".csv"></input>
      <button onClick={() => markers()} id="uploadfile" type="button" class="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-sky-500 hover:bg-sky-700 focus:ring-sky-800">
          Upload file
          <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
      <h2>If you need a template, please download <a href="https://docs.google.com/spreadsheets/d/1uXEmve_ChTv3w5yqDQH0fF-3yyruKvZeqq01coq7AyA/edit?usp=sharing" download><span className="text-sky-300">here</span></a> </h2>
      
    </div>
  );
};

export default CSVUpload;

