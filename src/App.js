import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  // Track logged-in user
  const [currentUser, setCurrentUser] = useState(null);

  // Login function to update user state
  function login(userData) {
    setCurrentUser(userData.username);
  }

  // Logout function (if needed later)
  function logout() {
    setCurrentUser(null);
  }

  return (
    <div className="app">
      <NavBar currentUser={currentUser} logout={logout} />

      {/* Provide login, currentUser to all child routes via Outlet */}
      <Outlet context={{ login, currentUser }} />
    </div>
  );
}

export default App;