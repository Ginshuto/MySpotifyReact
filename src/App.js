import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { themeLight, themeDark } from './config/themes'
import RouterConfig from './config/RouterConfig'
import { GlobalStyle } from './config/globalStyle'
import Header from './components/header'

function App() {
  const themeValue = localStorage.getItem('theme')
  const [theme, setTheme] = useState(themeValue ? themeValue : 'dark')
  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.removeItem('playlistName')
    localStorage.removeItem('playlistID')
    const timer = setTimeout(() => {
      window.alert("Le token d'accès a expiré, vous allez être déconnecté.")
      window.location.href = `${window.location.origin}${window.location.pathname}`
    }, 3500000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
      <GlobalStyle />
      <Header setTheme={setTheme} />
      <RouterConfig />
    </ThemeProvider>
  )
}

export default App
