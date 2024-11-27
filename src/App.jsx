import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouterConfig from "./routes/Router";
import NavBar from "./components/NavBar";
import Login from "./pages/Login"; 
import HomePage from "./pages/HomePage"; 
import "./styles/reset.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // 사용자 상태 추가

  // 상태 복구 로직
  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (token && savedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(savedUser)); // 저장된 사용자 정보를 복구
    }
  }, []);

  return (
    <Router>
      <NavBar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <Routes>
        <Route
          path="/"
          element={<HomePage user={user} isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/login"
          element={
            <Login setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
          }
        />
        <Route path="*" element={<RouterConfig />} />
      </Routes>
    </Router>
  );
};

export default App;
