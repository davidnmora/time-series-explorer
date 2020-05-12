import React, { useState } from 'react'
import { Scrollama, Step } from 'react-scrollama'
import {
  ScrollVizContainer,
  GraphicContainer,
  ScrollContainer,
  StepWrapper,
  StepContent,
} from './styles'
import { LineChartsWithTitle } from './data-viz/LineChartsWithTitle'
import { TRENDS } from './useCartoData'
import { TREND_COLORS } from './data-viz/LineChart'

const STEPS_DATA = [
  {
    visibleYears: [2018, 2019],
    text: 'Spending was fairly similar across 2018 and 2019',
  },
  {
    visibleYears: [2018, 2019, 2020],
    text: 'But COVID changed things.',
  },
  {
    visibleYears: [2018, 2019, 2020],
    text: 'Particularly for rural areas (urban are faded out)',
    ruralPercentLowerBound: 50,
  },
]

export const TimeSeriesScrollytelling = ({ classes, dataByRegion }) => {
  const [state, setState] = useState({ data: STEPS_DATA[0] })
  const [progress, setProgress] = useState(0)

  const onStepEnter = ({ element, data }) => {
    element.style.opacity = 1
    setState({ ...state, data })
  }

  const onStepExit = ({ element }) => {
    element.style.opacity = 0.7
  }

  const onStepProgress = ({ element, progress }) => {
    setProgress(progress)
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
                <span style={{ color: TREND_COLORS[TRENDS.boost] }}>grew</span>{' '}
                during COVID
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
                <span style={{ color: TREND_COLORS[TRENDS.plummet] }}>
                  decreased
                </span>{' '}
                during COVID
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
