import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import CSVUpload from "./components/CSVUpload";
import "./App.css";
// import Auth from "./components/Auth"
import Map from "./components/Map";


function App() {
  const [markers, setMarkers] = useState([]);
  return (
    <>

    <CSVUpload setMarkers={setMarkers}/>
    <Map markers={markers} />
    </>
  );
}


//Need to move code from above to a new component, and then pass it into this function app below as a route
// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   useEffect

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/auth" element={<Auth />} />
//         {/* <Route path="/" element={<Home />} /> */}
//       </Routes>
//     </BrowserRouter>
//   )
// }

export default App;
