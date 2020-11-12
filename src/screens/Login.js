import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const LoginLink = styled.a`
  display: inline-block;
  text-align: center;
  width: 70%;
  margin: 25px 15% 0 15%;
  box-sizing: border-box;
  color: white;
  background-color: #1db954;
  text-decoration: none;
  padding: 11px 10px;
  border-radius: 50px;
`

const Login = props => {
  let history = useHistory()
  const internet = navigator.onLine
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

  useEffect(() => {
    if (window.location.hash !== '') {
      localStorage.setItem(
        'token',
        window.location.hash.match(/access_token=([^&]*)/)[1]
      )
      props.setToken(localStorage.getItem('token'))
      history.push('/playlists')
    } else {
      localStorage.removeItem('token')
    }
  }, [])

  return (
    <LoginContainer>
      <h1>Bienvenue sur MySpotify !</h1>
      {!internet ? (
        <p>
          Vous êtes actuellement hors connexion. Veuillez vous connecter à
          Internet.
        </p>
      ) : (
        <LoginLink href={authorizeURL}>Se connecter à Spotify</LoginLink>
      )}
    </LoginContainer>
  )
}

export default Login
