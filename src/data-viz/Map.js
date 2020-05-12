import React, { useState, useEffect } from 'react'
import ReactMapGL, { FlyToInterpolator, NavigationControl } from 'react-map-gl'
import { easeQuadInOut } from 'd3-ease'
import { MAP_LOCATIONS } from './mapLocations'
import { MapBorderFade } from '../styles'

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
  width: '100vw',
  height: '100vh',
}

export const MAP_DEFAULT_SETTINGS = {
  dragPan: true,
  dragRotate: false,
  scrollZoom: false,
  touchZoom: false,
  touchRotate: true,
  keyboard: false,
  doubleClickZoom: true,
  minZoom: 3,
  maxZoom: 24, // Note: this IS the maximum possible zoom
}

const navStyle = {
  position: 'absolute',
  bottom: 76,
  right: 0,
  padding: '10px',
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
    <div className="map" style={{ position: 'relative' }}>
      <MapBorderFade />
      <ReactMapGL
        {...MAP_DEFAULT_SETTINGS}
        {...DEFAULT_VIEWPORT}
        {...viewport}
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle={'mapbox://styles/ruralinno/cjxytxnul151q1cq6u96niqs2'}
      >
        <div style={navStyle}>
          <NavigationControl showCompass={false} />
        </div>
      </ReactMapGL>
      <MapBorderFade bottom />
    </div>
  )
}
