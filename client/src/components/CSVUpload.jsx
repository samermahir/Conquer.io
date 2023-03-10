import React from "react";
import { csvFunction } from "../utils/csvfunction.js";

const CSVUpload = ({setMarkers}) => {
  return (
    <div>
      <input type="file" id="uploadfile" accept=".csv"></input>
      <button onClick={() => csvFunction(setMarkers)} id="uploadfile">
        Upload File
      </button>
    </div>
  );
};

export default CSVUpload;
