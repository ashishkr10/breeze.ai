import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("id")) {
      navigate("/");
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
