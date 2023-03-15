import React from "react";
import { csvFunction } from "../utils/csvfunction.js";
import { markerColor } from "../utils/marker";



const CSVUpload = ({setMarkers}) => {

  const markers = () => {
    csvFunction(setMarkers)
    markerColor(setMarkers)
  }
  return (
    <div>
      <input type="file" id="uploadfile" accept=".csv"></input>
      <button onClick={() => markers()} id="uploadfile">
        Upload File
      </button>
      <h2>If you need a template, please download <a href="../public/template.csv" download><span>here</span></a> </h2>
      
    </div>
  );
};

export default CSVUpload;
