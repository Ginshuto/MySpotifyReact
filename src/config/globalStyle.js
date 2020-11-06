import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
/* You can add global styles to this file, and also import other style files */

body {
  color: ${({ theme }) => theme.fontColor};
  background: linear-gradient(#282828, black) no-repeat center center fixed;
  background-size: cover;
}


* {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

a {
  color: ${({ theme }) => theme.fontColor};
}

.login {
  color: #509BF5;
}

.disconnect {
  text-decoration: underline;
  cursor: pointer;
}

h2,
h3,
h4 {
  color: #1DB954;
  margin-bottom: 5px;
}

a:hover {
  font-weight: bold;
}

ul {
  padding-left: 20px;
}

li {
  list-style: none;
  margin: 5px 0 5px 0;
  cursor: pointer;
  width: fit-content;
}

li::before {
  content: "♪";
  color: #1DB954;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

li:hover {
  font-weight: bold;
}

input {
  margin: 5px 15px 15px 0;
  letter-spacing: 1px;
}

input[type="text"] {
  background-color: #282828;
  color: grey;
  border: 1px solid #1DB954;
  padding: 10px;
  font-weight: bold;
}

button {
  background-color: #1DB954;
  padding: 11px 10px;
  color: white;
  border-radius: 50px;
  border: none;
}

.add,
.delete {
  text-decoration: underline;
}

.add:hover {
  cursor: pointer;
}
`
