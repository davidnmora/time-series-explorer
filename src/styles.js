// import { animated } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'

export const CORI_COLORS = {
  /*main*/
  wheat: '#f2e1b7',
  navy: '#092e39',

  /*Gray scale*/
  lightGray: '#dfdede',
  mediumGray: '#7d7f7e',
  black: '#1e1e1e',

  /*colors*/
  red: '#b62b2c',
  blue: '#04476e',
  maroon: '#551817',
}

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Rubik, sans-serif;
    background-color: ${CORI_COLORS.lightGray};
    color: ${CORI_COLORS.navy};
  }
`

export const HeadlineSection = styled.section`
  max-width: 950px;
  width: 95%;
  z-index: 100;
  position: relative;
  margin: 144px auto;
`

export const Headline = styled.h1`
  font-weight: 900;
  font-size: 64px;
  color: ${CORI_COLORS.navy};
`

export const Subtitle = styled.p`
  font-size: 24px;
  font-weight: lighter;
  color: ${CORI_COLORS.black};
`

export const TextSection = styled.div`
  margin: 0 auto;
  padding-top: 100px;
  max-width: 600px;
  width: 95%;
`

export const Paragraph = styled.p`
  font-weight: 400;
  color: #222;
  font-size: 22px;
  line-height: 1.6;
`

export const LabelText = styled.p`
  font-weight: 100;
  color: #222;
  font-size: 12px;
  padding: 4px;
`

export const MapBorderFade = styled.div`
  position: absolute;
  ${({ bottom }) => (bottom ? 'bottom' : 'top')}: 0px;
  left: 0px;
  width: 100%;
  height: 36px;
  
  background: linear-gradient(${({ bottom }) =>
    bottom ? '0' : '180'}deg, rgba(223,222,222,1) 0%, rgba(223,222,222,0) 100%);
  z-index: 100;
}




`

export const SVGContainer = styled.svg``

export const ScrollVizContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  pointer-events: all;

  display: flex;

  padding: ${({ pad }) => (pad ? '36px' : '0')};
  z-index: 0;
`

export const LineChartsWithTitleContainer = styled.div`
  margin: 36px;
`

export const LineChartSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const GraphicContainer = styled.div`
  display: flex;
  font-family: Rubik, sans-serif;
  justify-content: space-between;
`

export const ScrollContainer = styled.div`
  pointer-events: none;
  position: relative;
  &:nth-child(2) {
    margin-top: 50vh;
  }
`

export const StepWrapper = styled.div`
  position: relative;
  width: 100%;
  //border: 1px dashed lightgray;
  height: 80vh;
  z-index: 10000;
`

export const StepContent = styled.div`
  width: 320px;
  margin: 0 auto;
  
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 3px 3px 1px rgba(0,0,0,.11);
  border: 1px solid #d0cccc;
  
  background: white;
}
`
