import React, { useState } from 'react'
import {
  ScrollVizContainer,
  GraphicContainer,
  ScrollContainer,
  StepWrapper,
  StepContent,
  Subtitle,
} from './styles'
import { Scrollama, Step } from 'react-scrollama'
import { Map } from './data-viz/Map'

const STEPS_DATA = [
  {
    viewport: {},
    text: 'Spending was fairly similar across 2018 and 2019',
  },
  {
    viewport: {},
    text: 'But COVID changed things.',
  },
  {
    viewport: {},
    text: 'Particularly for rural areas (urban are faded out)',
    ruralPercentLowerBound: 50,
  },
]

export const MapScrollytelling = () => {
  const [state, setState] = useState({ data: STEPS_DATA[0] })
  const [progress, setProgress] = useState(0)

  const onStepEnter = ({ element, data }) => {
    element.style.backgroundColor = 'lightgoldenrodyellow'
    setState({ ...state, data })
  }

  const onStepExit = ({ element }) => {
    element.style.backgroundColor = '#fff'
  }

  const onStepProgress = ({ element, progress }) => {
    setProgress(progress)
  }

  return (
    <div>
      <GraphicContainer>
        <ScrollContainer>
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
                    {stepData === state.data && (
                      <p>{Math.round(progress * 100)}%</p>
                    )}
                  </StepContent>
                </StepWrapper>
              </Step>
            ))}
          </Scrollama>
        </ScrollContainer>

        <ScrollVizContainer>
          <Map />
        </ScrollVizContainer>
      </GraphicContainer>
    </div>
  )
}
