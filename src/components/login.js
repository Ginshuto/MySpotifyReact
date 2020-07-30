import React, { useState, useEffect } from "react";
import Playlists from "./playlists";

export default function Login() {
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    if (window.location.hash !== "") {
      setLogged(true);
      localStorage.setItem(
        "token",
        window.location.hash.match(/access_token=([^&]*)/)[1]
      );
    } else {
      localStorage.removeItem("token");
      setLogged(false);
    }
  }, []);
  var client_ID = "12ebc58d644148119c27df63ef38fc7d";
  var redirect_URI = "http://localhost:3000";
  var scopes =
    "user-read-private user-read-email playlist-modify playlist-modify-public user-library-read playlist-modify-private";
  var authorizeURL =
    "https://accounts.spotify.com/authorize?client_id=" +
    client_ID +
    "&response_type=token&redirect_uri=" +
    redirect_URI +
    "&scope=" +
    scopes;

  function disconnect() {
    setLogged(false);
    window.location.href = `${window.location.origin}${window.location.pathname}`;
  }

  return (
    <div>
      {!logged ? (
        <a href={authorizeURL}>Se connecter à Spotify</a>
      ) : (
        <div>
          <p className="disconnect" onClick={() => disconnect()}>
            Se déconnecter de Spotify
          </p>
          <Playlists />
        </div>
      )}
    </div>
  );
}
