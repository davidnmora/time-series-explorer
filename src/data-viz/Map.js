import React, { useState, useCallback } from 'react'
import ReactMapGL, { FlyToInterpolator } from 'react-map-gl'
import { easeQuadInOut } from 'd3-ease'

const MAPBOX_TOKEN =
  'pk.eyJ1IjoicnVyYWxpbm5vIiwiYSI6ImNqeHl0cW0xODBlMm0zY2x0dXltYzRuazUifQ.zZBovoCHzLIW0wCZveEKzA'

const MAP_PAN_TRANSITION_DURATION = 4000
const VIEWPORT_TRANSITION_PROPERTIES = {
  transitionInterpolator: new FlyToInterpolator(),
  transitionEasing: easeQuadInOut,
  transitionDuration: MAP_PAN_TRANSITION_DURATION,
}

const MICHIGAN = {
  longitude: -84.81596,
  latitude: 44.82781,
  zoom: 6.29,
  pitch: 26.0,
  bearing: 0.0,
}

const DEFAULT_VIEWPORT = {
  ...VIEWPORT_TRANSITION_PROPERTIES,
  width: 400,
  height: 400,
}

export const Map = () => {
  const [viewport, setViewport] = useState({
    ...DEFAULT_VIEWPORT,
    ...MICHIGAN,
  })
  const updateViewport = useCallback(
    (newViewport) =>
      setViewport({
        ...DEFAULT_VIEWPORT,
        ...newViewport,
      }),
    []
  )

  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        onViewportChange={updateViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle={'mapbox://styles/ruralinno/cjxytxnul151q1cq6u96niqs2'}
      />
    </div>
  )
}
