import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body{
    width:100vw;
    height: 100vh;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    font-family:Montserrat;

    background:linear-gradient(${props => props.theme.colors.background}, ${props => props.theme.colors.background_1});;
    color:${props => props.theme.colors.text};
  }

`
