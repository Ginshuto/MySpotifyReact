import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/login";

function App() {
  useEffect(() => {
    localStorage.removeItem("playlistName");
    localStorage.removeItem("playlistID");
    const timer = setTimeout(() => {
      window.alert("Le token d'accès a expiré, vous allez être déconnecté.");
      window.location.href = `${window.location.origin}${window.location.pathname}`;
    }, 3500000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Welcome to MySpotify !</h1>
      <Login />
    </div>
  );
}

export default App;
