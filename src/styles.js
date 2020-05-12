// import { animated } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Rubik, sans-serif;
  }
`

const HeadlineSection = styled.section`
  max-width: 950px;
  width: 95%;
  z-index: 100;
  position: relative;
  margin: 144px auto;
`

const Headline = styled.h1`
  font-weight: 900;
  font-size: 64px;
`

const Subtitle = styled.p`
  font-size: 24px;
  font-weight: lighter;
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
  pointer-events: all;
  top: 0;
  width: 100%;
  position: sticky;
  padding: ${(props) => (props.pad ? '36px' : '0')};
  z-index: 0;
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
  pointer-events: none;
  position: relative;
  &:nth-child(2) {
    margin-top: 50vh;
  }
`

const StepWrapper = styled.div`
  position: relative;
  width: 100%;
  //border: 1px dashed lightgray;
  height: 80vh;
  z-index: 10000;
`

const StepContent = styled.div`
  width: 320px;
  margin: 0 auto;
  
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 3px 3px 1px rgba(0,0,0,.11);
  border: 1px solid #d0cccc;
  
  background: white;
}
`

export {
  GlobalStyle,
  HeadlineSection,
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
