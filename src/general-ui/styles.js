// import { animated } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'
import { CORI_COLORS } from './colors'

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
  @media only screen and (max-width: 800px) {
    margin: 24px auto;
  }
`

export const Headline = styled.h1`
  font-weight: 900;
  font-size: 64px;
  letter-spacing: -1px;
  line-height: 1.2;
  color: ${CORI_COLORS.navy};

  @media only screen and (max-width: 800px) {
    font-size: 36px;
  }
`

export const Subtitle = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: ${CORI_COLORS.black};
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`}

  @media only screen and (max-width: 800px) {
    font-size: 16px;
  }
`

export const TextSection = styled.div`
  margin: 0 auto;
  padding: ${({ verticalPadding }) =>
      verticalPadding ? `${verticalPadding}` : '0'}
    0;
  @media only screen and (max-width: 800px) {
    padding: 12px 0;
  }
  max-width: 600px;
  width: 95%;
`

export const Paragraph = styled.p`
  font-weight: 100;
  color: ${CORI_COLORS.black};
  font-size: 16px;
  line-height: 1.6;
`

export const LabelText = styled.span`
  font-weight: 100;
  color: ${({ gray }) => (gray ? CORI_COLORS.mediumGray : CORI_COLORS.black)};
  font-size: ${({ gray }) => (gray ? '11' : '12')}px;
  padding-right: 4px;
`

export const ColoredText = styled.span`
  color: ${({ color }) => `${color}`};
`

export const FullBleedImage = styled.img`
  width: 100vw;
  margin: 36px 0;
`

export const MapBorderFade = styled.div`
  position: absolute;
  ${({ bottom }) => (bottom ? 'bottom' : 'top')}: 0px;
  left: 0px;
  width: 100%;
  height: 36px;

  background: linear-gradient(
    ${({ bottom }) => (bottom ? '0' : '180')}deg,
    rgba(223, 222, 222, 1) 0%,
    rgba(223, 222, 222, 0) 100%
  );
  z-index: 100;
`

export const WikipediaImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1000ms;
`

export const SVGContainer = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
`

export const ScrollVizContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  pointer-events: all;

  display: flex;

  padding: ${({ pad }) => (pad ? '36px' : '0')};
  @media only screen and (max-width: 800px) {
    padding: 0;
  }
  z-index: 0;
`

export const LineChartsWithTitleContainer = styled.div`
  margin: 36px;
  @media only screen and (max-width: 800px) {
    margin: 0;
  }
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
  ${({ width }) => (width ? `width: ${width}; margin: auto;` : '')}
`

export const StepWrapper = styled.div`
  position: relative;
  width: 100%;
  //border: 1px dashed lightgray;
  height: 80vh;
  &:nth-child(2) {
    margin-top: -25vh;
  }
  &:last-child {
    margin-bottom: 50vh;
  }
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
  
  @media only screen and (max-width: 800px) {
    width: 90vw;
    margin: 0;
    margin-left: 5vw;
  }
}
`
