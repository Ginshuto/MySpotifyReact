import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'

const Login = () => {
  let history = useHistory()
  useEffect(() => {
    if (window.location.hash !== '') {
      // Créer un item avec l'heure à laquelle le token a été crée, et faire un check à chaque chargement
      localStorage.setItem(
        'token',
        window.location.hash.match(/access_token=([^&]*)/)[1]
      )
      history.push('/playlists')
    }
  }, [])
  const client_ID = '12ebc58d644148119c27df63ef38fc7d'
  const redirect_URI = 'http://localhost:3000'
  const scopes =
    'user-read-private user-read-email playlist-modify playlist-modify-public user-library-read playlist-modify-private'
  const authorizeURL =
    'https://accounts.spotify.com/authorize?client_id=' +
    client_ID +
    '&response_type=token&redirect_uri=' +
    redirect_URI +
    '&scope=' +
    scopes

  function disconnect() {
    // setLogged(false)
    window.location.href = `${window.location.origin}${window.location.pathname}`
  }
  return (
    <div>
      <h1>Welcome to MySpotify !</h1>
      <a href={authorizeURL}>Se connecter à Spotify</a>
    </div>
  )
}

export default Login
