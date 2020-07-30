import React, { useState } from "react";
import SearchResult from "./searchResult";

export default function Search(props) {
  const [inputValue, setInputValue] = useState("");
  const [tracks, setTracks] = useState(null);
    
  function searchTrack(trackName) {
    var token = localStorage.getItem("token");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      responseType: "json",
    };
    fetch(
      `https://api.spotify.com/v1/search?q=${trackName}&type=track&limit=15`,
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => setTracks(data));
  }

  function enterPressed(event){
    var code = event.keyCode || event.which;
    if(code === 13){
        searchTrack(inputValue);
    }
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e)=>enterPressed(e)}
      ></input>
      <button onClick={() => searchTrack(inputValue)}>
        Chercher un morceau à ajouter
      </button>
      {tracks !== null ? <SearchResult data={tracks} search={inputValue} update={props.update}/> : <div></div>}
    </div>
  );
}
