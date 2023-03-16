import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CSVUpload from "./components/CSVUpload";
import "./App.css";
import Map from "./components/Map";
import Title from "./components/Title";
import Legend from "./components/Legend";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
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
