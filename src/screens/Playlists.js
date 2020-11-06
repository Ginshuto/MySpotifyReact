import React, { useState, useEffect } from 'react'

const Playlists = () => {
  const token = localStorage.getItem('token')
  const [playlist, setPlaylist] = useState(null)
  const [refresh, setRefresh] = useState(null)
  const [refreshTracks, setRefreshTracks] = useState(null)
  const [tracks, setTracks] = useState(null)
  const [inputValue, setInputValue] = useState('')
  var myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  myHeaders.append('Accept', 'application/json')
  myHeaders.append('Authorization', 'Bearer ' + token)
  var requestOptions
  requestOptions = {
    method: 'GET',
    headers: myHeaders,
    responseType: 'json'
  }

  function updateTracks(arg) {
    setRefreshTracks(arg)
  }

  function getPlaylists() {
    fetch('https://api.spotify.com/v1/me/playlists', requestOptions)
      .then(res => res.json())
      .then(data => setPlaylist(data))
  }

  useEffect(() => {
    getPlaylists()
  }, [refresh])

  //Update la liste de morceaux quand un morceau est ajouté/supprimé
  useEffect(() => {
    if (localStorage.getItem('playlistName') != null) {
      playlistTracks(
        localStorage.getItem('playlistName'),
        localStorage.getItem('playlistID'),
        localStorage.getItem('userID')
      )
    }
  }, [refreshTracks])

  function playlistTracks(name, id, userID) {
    localStorage.setItem('playlistID', id)
    localStorage.setItem('playlistName', name)
    localStorage.setItem('userID', userID)
    fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, requestOptions)
      .then(res => res.json())
      .then(data => setTracks(data))
  }

  function addPlaylist(playlistName) {
    var userID = localStorage.getItem('userID')
    requestOptions = {
      method: 'POST',
      headers: myHeaders,
      responseType: 'json',
      body: JSON.stringify({
        name: playlistName
      })
    }
    fetch(
      `https://api.spotify.com/v1/users/${userID}/playlists`,
      requestOptions
    )
      .then(res => res.json())
      .then(data => setRefresh(data))
  }

  function enterPressed(event) {
    var code = event.keyCode || event.which
    if (code === 13) {
      addPlaylist(inputValue)
      alert('Playlist créée.')
    }
  }

  return (
    <div>
      <h2> ⮚Mes Playlists :</h2>
      {playlist !== null ? (
        <div>
          <ul>
            {playlist.items.map((element, index) => (
              <li
                title='Cliquez pour afficher les morceaux de la playlist'
                key={index}
                onClick={() =>
                  playlistTracks(element.name, element.id, element.owner.id)
                }
              >
                {element.name}
              </li>
            ))}
          </ul>
          <input
            type='text'
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyPress={e => enterPressed(e)}
          ></input>
          <button onClick={() => addPlaylist(inputValue)}>
            Créer une playlist
          </button>
        </div>
      ) : (
        <div>
          <input
            type='text'
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyPress={e => enterPressed(e)}
          ></input>
          <button onClick={() => addPlaylist(inputValue)}>
            Créer une playlist
          </button>
        </div>
      )}
    </div>
  )
}

export default Playlists
