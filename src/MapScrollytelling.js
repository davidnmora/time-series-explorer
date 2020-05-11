import React, { useState } from 'react'
import {
  ScrollVizContainer,
  GraphicContainer,
  ScrollContainer,
  StepWrapper,
  StepContent,
} from './styles'
import { Scrollama, Step } from 'react-scrollama'
import { Map } from './data-viz/Map'
import { MAP_LOCATIONS } from './data-viz/mapLocations'

const STEPS_DATA = [
  {
    location: MAP_LOCATIONS.michigan,
    text: 'Welcome to Michigan',
  },
  {
    location: MAP_LOCATIONS.traverseCity,
    text: '... home of Traverse City',
  },
  {
    location: MAP_LOCATIONS.marquette,
    text: '... and Marquette!',
    ruralPercentLowerBound: 50,
  },
]

export const MapScrollytelling = () => {
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
                    {/*{stepData === state.data && (*/}
                    {/*<p>{Math.round(progress * 100)}%</p>*/}
                    {/*)}*/}
                  </StepContent>
                </StepWrapper>
              </Step>
            ))}
          </Scrollama>
        </ScrollContainer>

        <ScrollVizContainer>
          <Map location={state.data.location} />
        </ScrollVizContainer>
      </GraphicContainer>
    </div>
  )
}
