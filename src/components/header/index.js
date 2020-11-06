import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeaderDiv = styled.header`
  width: 100%;
`

const Header = props => {
  const toggleTheme = () => {
    console.log(localStorage.getItem('theme'))
    if (localStorage.getItem('theme') === 'light') {
      props.setTheme('dark')
    } else {
      props.setTheme('light')
    }
  }

  return (
    <HeaderDiv>
      <button onClick={() => toggleTheme()}>Switch</button>
    </HeaderDiv>
  )
}

export default Header
