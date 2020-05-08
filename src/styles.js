// import { animated } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 48px;
    font-family: Rubik, sans-serif;
  }
`

const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  //position: fixed;
  //top: 0;
  //right: 0;
  width: 100%;
  z-index: auto;
  font-family: Rubik, sans-serif;
  font-size: 20px;
  padding: 20px;
  background-color: white;
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

const TextSection = styled.div`
  margin: 0 auto;
  padding-top: 100px;
  max-width: 600px;
  width: 95%;
`

const Paragraph = styled.p`
  font-weight: 400;
  color: #222;
  font-size: 22px;
  line-height: 1.6;
`

const LabelText = styled.p`
  font-weight: 100;
  color: #222;
  font-size: 8px;
  padding: 4px;
`

const SVGContainer = styled.svg``

const ScrollVizContainer = styled.div`
  //display: flex;
  flex-wrap: wrap;
  top: 48px;
  width: 100%;
  position: sticky;
  align-self: flex-start;
`

const LineChartSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const GraphicContainer = styled.div`
  display: flex;
  font-family: Rubik, sans-serif;
  justify-content: space-between;
`

const ScrollContainer = styled.div`
  flex-basis: 35%;
  &:first-child {
    margin-top: 50vh;
  }
`

const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px dashed lightgray;
  height: 80vh;
`

const StepContent = styled.div`
  border: 1px solid #333;
  padding: 24px;
`

export {
  GlobalStyle,
  NavBarContainer,
  Headline,
  Subtitle,
  TextSection,
  Paragraph,
  LabelText,
  SVGContainer,
  ScrollVizContainer,
  LineChartSection,
  GraphicContainer,
  ScrollContainer,
  StepWrapper,
  StepContent,
}
