import { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
import CSVUpload from "./components/CSVUpload";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  // //test api call for proxy

  // useEffect(() => {
  //   fetch("/api/test")
  //     .then((r) => r.json())
  //     .then((data) => console.log(data));
  // }, []);
  return (
    <CSVUpload />
  );
}

export default App;
