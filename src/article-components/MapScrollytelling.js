import React, { useState } from 'react'
import {
  ScrollVizContainer,
  GraphicContainer,
  ScrollContainer,
  StepWrapper,
  StepContent,
} from '../general-ui/styles'
import { Scrollama, Step } from 'react-scrollama'
import { Map } from '../data-viz/map/Map'
import { MAP_STEPS } from '../mapStepsConfig'

export const MapScrollytelling = () => {
  const [state, setState] = useState({ data: MAP_STEPS[0] })

  const onStepEnter = ({ element, data }) => {
    element.style.opacity = 1
    setState({ ...state, data })
  }

  const onStepExit = ({ element }) => {
    element.style.opacity = 0.7
  }

  return (
    <GraphicContainer>
      <ScrollContainer>
        <ScrollVizContainer>
          <Map
            location={state.data.location}
            toggledOffLayers={state.data.toggledOffLayers}
          />
        </ScrollVizContainer>

        <Scrollama
          onStepEnter={onStepEnter}
          onStepExit={onStepExit}
          offset={0.7}
        >
          {MAP_STEPS.map((stepData, i) => (
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
