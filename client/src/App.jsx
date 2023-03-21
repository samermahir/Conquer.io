import { Provider, useAtom } from "jotai";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import { userAtom } from "./utils/state";

function AppLayout() {

  const [user, setUser] = useAtom(userAtom)
  useEffect(() => {
    fetch('/api/users/me').then(r => r.json()).then(data => {
      setUser(data)
    })
  }, [])
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
}

function App() {
  return (
    <div className="App">
      <Provider>
        <AppLayout />
      </Provider>
    </div>
  );
}

export default App;
