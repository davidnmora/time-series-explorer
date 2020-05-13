import React, { useState } from 'react'
import { Scrollama, Step } from 'react-scrollama'
import {
  ScrollVizContainer,
  GraphicContainer,
  ScrollContainer,
  StepWrapper,
  StepContent,
  ColoredText,
} from './styles'
import { LineChartsWithTitle } from './data-viz/LineChartsWithTitle'
import { TRENDS } from './useCartoData'
import { YEAR_COLORS } from './colors'
import { TREND_COLORS } from './colors'

const STEPS_DATA = [
  {
    visibleYears: [],
    text:
      "Let's explore the yearly changes in consumer spending (relative to the national average) in Michigan counties. We'll focus just on counties who's consumer spending sharply changed in 2020, relative to the national average.",
  },
  {
    visibleYears: [2018],
    text: (
      <>
        This is the overall consumer spending index across{' '}
        <ColoredText color={YEAR_COLORS['2018']}>2018</ColoredText> and from
        January to December.
      </>
    ),
  },
  {
    visibleYears: [2018, 2019],
    text: (
      <>
        Overall consumer spending changed little between{' '}
        <ColoredText color={YEAR_COLORS['2018']}>2018</ColoredText> and{' '}
        <ColoredText color={YEAR_COLORS['2019']}>2019</ColoredText>.
      </>
    ),
  },
  {
    visibleYears: [2018, 2019, 2020],
    text: (
      <>
        As COVID struck, counties saw unprecedented relative{' '}
        <ColoredText color={TREND_COLORS[TRENDS.boost]}>growth</ColoredText> and{' '}
        <ColoredText color={TREND_COLORS[TRENDS.plummet]}>decrease</ColoredText>
        .
      </>
    ),
  },
  {
    visibleYears: [2018, 2019, 2020],
    text: (
      <>
        Removing urban counties, we see that most relative{' '}
        <ColoredText color={TREND_COLORS[TRENDS.boost]}>growth</ColoredText>{' '}
        happened in rural counties, with two notable exceptions:{' '}
        <ColoredText color={TREND_COLORS[TRENDS.plummet]}>
          Grand Traverse & Isabella county
        </ColoredText>
        .
      </>
    ),
    ruralPercentLowerBound: 50,
  },
]

export const TimeSeriesScrollytelling = ({ classes, dataByRegion }) => {
  const [state, setState] = useState({ data: STEPS_DATA[0] })
  // const [progress, setProgress] = useState(0)

  const onStepEnter = ({ element, data }) => {
    element.style.opacity = 1
    setState({ ...state, data })
  }

  const onStepExit = ({ element }) => {
    element.style.opacity = 0.7
  }

  const onStepProgress = ({ element, progress }) => {
    // setProgress(progress)
  }

  if (![...dataByRegion.keys()].length) return null

  return (
    <GraphicContainer>
      <ScrollContainer>
        <ScrollVizContainer pad>
          <LineChartsWithTitle
            dataByRegion={dataByRegion}
            title={
              <>
                Counties that{' '}
                <ColoredText color={TREND_COLORS[TRENDS.boost]}>
                  grew
                </ColoredText>{' '}
                during COVID-19
              </>
            }
            trend={TRENDS.boost}
            ruralPercentLowerBound={state.data.ruralPercentLowerBound}
            visibleYears={state.data.visibleYears}
          />
          <LineChartsWithTitle
            dataByRegion={dataByRegion}
            title={
              <>
                Counties that{' '}
                <ColoredText color={TREND_COLORS[TRENDS.plummet]}>
                  decreased
                </ColoredText>{' '}
                during COVID-19
              </>
            }
            trend={TRENDS.plummet}
            ruralPercentLowerBound={state.data.ruralPercentLowerBound}
            visibleYears={state.data.visibleYears}
          />
        </ScrollVizContainer>

        <Scrollama
          onStepEnter={onStepEnter}
          onStepExit={onStepExit}
          progress
          onStepProgress={onStepProgress}
          offset={0.5}
        >
          {STEPS_DATA.map((stepData, i) => (
            <Step data={stepData} key={i}>
              <StepWrapper>
                <StepContent>
                  <p>{stepData.text}</p>
                </StepContent>
              </StepWrapper>
            </Step>
          ))}
        </Scrollama>
      </ScrollContainer>
    </GraphicContainer>
  )
}
