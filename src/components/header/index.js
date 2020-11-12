import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeaderDiv = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Header = props => {
  const history = useHistory()
  console.log('history', history)
  const toggleTheme = () => {
    console.log(localStorage.getItem('theme'))
    if (localStorage.getItem('theme') === 'light') {
      props.setTheme('dark')
    } else {
      props.setTheme('light')
    }
  }

  useEffect(() => {
    props.setToken(localStorage.getItem('token'))
  }, [history.location.pathname])

  const disconnect = () => {
    localStorage.removeItem('token')
    props.setToken(null)
    history.push('/')
  }

  return (
    <HeaderDiv>
      <button onClick={() => toggleTheme()}>Changer de thème</button>
      {props.token ? (
        <button onClick={disconnect}>Déconnexion</button>
      ) : (
        <div></div>
      )}
    </HeaderDiv>
  )
}

Header.propTypes = {
  setTheme: PropTypes.func.isRequired
}

export default Header
