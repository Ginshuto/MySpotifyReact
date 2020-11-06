import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from '../screens/Login'
import Playlists from '../screens/Playlists'

const RouterConfig = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/playlists' component={Playlists} />
        <Route path='/' component={Login} />
      </Switch>
    </Router>
  )
}

export default RouterConfig
