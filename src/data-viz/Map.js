import React, { useState, useEffect } from 'react'
import ReactMapGL, { FlyToInterpolator } from 'react-map-gl'
import { easeQuadInOut } from 'd3-ease'
import { MAP_LOCATIONS } from './mapLocations'

const MAPBOX_TOKEN =
  'pk.eyJ1IjoicnVyYWxpbm5vIiwiYSI6ImNqeHl0cW0xODBlMm0zY2x0dXltYzRuazUifQ.zZBovoCHzLIW0wCZveEKzA'

const MAP_PAN_TRANSITION_DURATION = 4000
const VIEWPORT_TRANSITION_PROPERTIES = {
  transitionInterpolator: new FlyToInterpolator(),
  transitionEasing: easeQuadInOut,
  transitionDuration: MAP_PAN_TRANSITION_DURATION,
}

const DEFAULT_VIEWPORT = {
  ...VIEWPORT_TRANSITION_PROPERTIES,
  width: 400,
  height: 400,
}

export const Map = ({ location = MAP_LOCATIONS.michigan }) => {
  const [viewport, setViewport] = useState({
    ...DEFAULT_VIEWPORT,
    ...location,
  })

  useEffect(
    () =>
      setViewport({
        ...DEFAULT_VIEWPORT,
        ...location,
      }),
    [location, setViewport]
  )

  const handleViewportChange = (newViewport) =>
    setViewport({
      ...DEFAULT_VIEWPORT,
      ...newViewport,
    })
  return (
    <div className="map">
      <ReactMapGL
        {...DEFAULT_VIEWPORT}
        {...viewport}
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle={'mapbox://styles/ruralinno/cjxytxnul151q1cq6u96niqs2'}
      />
    </div>
  )
}
