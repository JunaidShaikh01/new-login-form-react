import Login from "./Components/Login/Login";
import MainHeader from "./Components/MainHeader/MainHeader";
import { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
function App() {
  const [isLaggedIn, setIsLoggedIn] = useState(false);

  function loginHandler(email, password) {
    setIsLoggedIn(true);
  }
  function logoutHandler() {
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
