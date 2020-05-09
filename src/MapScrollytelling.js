import React, { useCallback, useState } from 'react'
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
import { MAP_LOCATIONS } from './data-viz/mapLocations'

const STEPS_DATA = [
  {
    location: MAP_LOCATIONS.michigan,
    text: 'Spending was fairly similar across 2018 and 2019',
  },
  {
    location: MAP_LOCATIONS.traverseCity,
    text: 'But COVID changed things.',
  },
  {
    location: MAP_LOCATIONS.michigan,
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

  // const [viewport, setViewport] = useState({
  //   ...DEFAULT_VIEWPORT,
  //   ...location,
  // })
  // const updateViewport = useCallback(
  //   (newViewport) =>
  //     setViewport({
  //       ...DEFAULT_VIEWPORT,
  //       ...newViewport,
  //     }),
  //   []
  // )

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
          <Map location={state.data.location} />
        </ScrollVizContainer>
      </GraphicContainer>
    </div>
  )
}
