// import { animated } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 48px;
    font-family: Rubik, sans-serif;
  }
`

const NavBarContainer = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  z-index: auto;
  :1 ;
  font-family: Rubik, sans-serif;
  font-size: 20px;
  padding: 20px;
`

const Headline = styled.h1`
  font-weight: 900;
  text-align: center;
  font-size: 48px;
  margin: 110px 0px 10px;
`

const Subtitle = styled.p`
  margin: 0px;
  text-align: center;
  font-size: 24px;
  color: rgb(136, 136, 136);
`

export { GlobalStyle, NavBarContainer, Headline, Subtitle }
