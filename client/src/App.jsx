import { Provider } from "jotai";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";


function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </Provider>
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
