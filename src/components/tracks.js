import React, { useState, useEffect } from "react";
import Search from "./search";

export default function Tracks(props) {
  const [tracks, setTracks] = useState(props.data);

  // Quand changement de playlist, update tracks avec les nouveaux morceaux
  useEffect(() => {
    setTracks(props.data);
  }, [props.data]);

  function deleteTrack(uri) {
    if (
      window.confirm(
        "Êtes-vous sûr de vouloir supprimer ce morceau de la playlist ?"
      )
    ) {
      var token = localStorage.getItem("token");
      var userID = localStorage.getItem("userID");
      var playlistID = localStorage.getItem("playlistID");
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Authorization", "Bearer " + token);
      var requestOptions = {
        method: "delete",
        headers: myHeaders,
        responseType: "json",
        body: JSON.stringify({
          tracks: [
            {
              uri: uri,
            },
          ],
        }),
      };
      fetch(
        `https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`,
        requestOptions
      )
        .then((res) => res.json())
        .then((data) => props.update(data));
    }
  }

  return (
    <div>
      <h3> ⮚Morceaux de la playlist {props.playlist}: </h3>
      <ul>
        {tracks.items.map((element, index) => (
          <li
            title="Cliquez pour supprimer de la playlist"
            key={index}
            onClick={() => deleteTrack(element.track.uri)}
          >
            {element.track.name} by {element.track.artists[0].name}
          </li>
        ))}
      </ul>
      <Search update={props.update} />
    </div>
  );
}
