import React from "react";
import { csvFunction } from "../utils/csvfunction.js";


const CSVUpload = ({setMarkers}) => {

  const markers = () => {
    csvFunction(setMarkers)
  }
  return (
    <div>
      <input type="file" id="uploadfile" accept=".csv"></input>
      <button onClick={() => markers()} id="uploadfile">
        Upload File
      </button>
      <h2>If you need a template, please download <a href="https://docs.google.com/spreadsheets/d/1uXEmve_ChTv3w5yqDQH0fF-3yyruKvZeqq01coq7AyA/edit?usp=sharing" download><span>here</span></a> </h2>
      
    </div>
  );
};

export default CSVUpload;
