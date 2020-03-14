import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap');
  *{
    font-family: 'IBM Plex Sans', sans-serif;
  }
  body{
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height:100vh;
    text-align: center;
    background-color: #f7f7f7;
  }
  h1{
    margin: 0;
    margin-bottom: .5rem;
  }
  .equals{
    font-weight: bold;
    font-size: 2rem;
  }
`;