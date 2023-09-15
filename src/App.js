import Login from "./Components/Login/Login";
import MainHeader from "./Components/MainHeader/MainHeader";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
function App() {
  const [isLaggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const loggedinInformation = localStorage.getItem("isLoggedIn");
    if (loggedinInformation === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  function loginHandler(email, password) {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  }
  function logoutHandler() {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  }
  return (
    <div>
      <MainHeader isAuthenticated={isLaggedIn} onLogout={logoutHandler} />
      {!isLaggedIn && <Login onLogin={loginHandler} />}
      {isLaggedIn && <Home onLogout={logoutHandler} />}
    </div>
  );
}

export default App;
