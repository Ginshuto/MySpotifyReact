import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from '../screens/Login'
import Playlists from '../screens/Playlists'
import PlaylistTracks from '../screens/PlaylistTracks'
import Header from '../components/header'

const RouterConfig = props => {
  return (
    <Router>
      <Header
        setTheme={props.setTheme}
        token={props.token}
        setToken={props.setToken}
      />
      <Switch>
        <Route exact path='/playlists' component={Playlists} />
        <Route path='/playlists/:id' component={PlaylistTracks} />
        <Route path='/' component={() => <Login setToken={props.setToken} />} />
      </Switch>
    </Router>
  )
}

export default RouterConfig
