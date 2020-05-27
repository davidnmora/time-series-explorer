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
import { MAP_LOCATIONS } from '../data-viz/map/mapLocations'
import config from '../config'

const STEPS_DATA = [
  {
    location: MAP_LOCATIONS.michigan,
    text: 'Welcome to Michigan',
    toggledOffLayers: [
      config.map.layers.data.BREWERIES,
      config.map.layers.data.CHILD_CARE,
      config.map.layers.basemap.POI,
    ],
  },
  {
    location: MAP_LOCATIONS.traverseCity,
    text: '... home of Grand Traverse County',
    toggledOffLayers: [
      config.map.layers.data.BREWERIES,
      config.map.layers.data.CHILD_CARE,
      // config.map.layers.basemap.POI,
    ],
  },
  {
    location: MAP_LOCATIONS.isabella,
    text: '... and Isabella county.',
    toggledOffLayers: [
      // config.map.layers.data.BREWERIES,
      // config.map.layers.data.CHILD_CARE,
      config.map.layers.basemap.POI,
    ],
  },
]

export const MapScrollytelling = () => {
  const [state, setState] = useState({ data: STEPS_DATA[0] })

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
