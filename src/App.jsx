import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouterConfig from "./routes/Router";
import NavBar from "./components/NavBar";
import Login from "./pages/Login"; 
import HomePage from "./pages/HomePage"; 
import "./styles/reset.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); 

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
