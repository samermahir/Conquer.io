import { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
import CSVUpload from "./components/CSVUpload";
import "./App.css";

function Map({markers}){
  return <>
  <h1> THIS IS MAP</h1>
  {markers.map(m => <div className="marker placeholder">{m.Latitude} {m.Longitude}</div>)}
  </>

}

function App() {
  const [markers, setMarkers] = useState([]);
  return (
    <>

    <CSVUpload setMarkers={setMarkers}/>
    <Map markers={markers}/>
    </>
  );
}

export default App;
