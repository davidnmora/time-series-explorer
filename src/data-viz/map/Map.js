import React, { useState, useEffect, useCallback, useRef } from 'react'
import axios from 'axios'
import produce from 'immer'
import ReactMapGL, {
  FlyToInterpolator /*NavigationControl*/,
} from 'react-map-gl'
import { easeQuadInOut } from 'd3-ease'
import { MAP_LOCATIONS } from './mapLocations'
import { MapBorderFade } from '../../general-ui/styles'
import { useResizeListener } from './useResizeListener'
import config from '../../config'

const MAP_PAN_TRANSITION_DURATION = 4000
const VIEWPORT_TRANSITION_PROPERTIES = {
  transitionInterpolator: new FlyToInterpolator(),
  transitionEasing: easeQuadInOut,
  transitionDuration: MAP_PAN_TRANSITION_DURATION,
}

const DEFAULT_VIEWPORT = {
  ...VIEWPORT_TRANSITION_PROPERTIES,
  width: window.innerWidth,
  height: window.innerHeight,
}

export const MAP_DEFAULT_SETTINGS = {
  dragPan: false,
  dragRotate: false,
  scrollZoom: false,
  touchZoom: false,
  touchRotate: false,
  keyboard: false,
  doubleClickZoom: false,
  minZoom: 3,
  maxZoom: 24, // Note: this IS the maximum possible zoom
}

const navStyle = {
  position: 'absolute',
  bottom: 76,
  right: 0,
  padding: '10px',
}

const layerOpacityProps = {
  fill: ['fill-opacity'],
  line: ['line-opacity'],
  circle: ['circle-opacity', 'circle-stroke-opacity'],
  symbol: ['icon-opacity', 'text-opacity'],
  raster: ['raster-opacity'],
  'fill-extrusion': ['fill-extrusion-opacity'],
}

const getMap = (mapRef) => {
  return mapRef.current ? mapRef.current.getMap() : null
}

export const Map = ({
  location = MAP_LOCATIONS.michigan,
  toggledOffLayers = [],
}) => {
  const [viewport, setViewport] = useState({
    ...DEFAULT_VIEWPORT,
    ...location,
  })

  const mapRef = useRef()

  useEffect(
    () =>
      setViewport({
        ...DEFAULT_VIEWPORT,
        ...location,
      }),
    [location, setViewport]
  )

  const [mapboxStyleJSON, setMapboxStyleJSON] = useState(null)
  useEffect(() => {
    axios
      .get(
        `https://api.mapbox.com/styles/v1/ruralinno/${config.map.MAPBOX_STYLE_ID}?access_token=${config.map.MAPBOX_API_KEY}`
      )
      .then(({ data }) => setMapboxStyleJSON(data))
  }, [])

  // useEffect(() => {
  //   const map = getMap(mapRef)
  //   debugger
  //   if (map) {
  //     map.getStyle().layers.forEach((layer) => {
  //       const opacityProps = layerOpacityProps[layer.type]
  //       if (layer.id in toggledOffLayers) {
  //         // hide
  //       } else {
  //         // show
  //       }
  //     })
  //   }
  //   // toggle layers
  //   // const layers = map.getStyle().layers
  // }, [toggledOffLayers])

  const handleViewportChange = useCallback(
    (newViewport = {}) =>
      setViewport({
        ...DEFAULT_VIEWPORT,
        ...viewport,
        ...newViewport,
        width: window.innerWidth,
        height: window.innerHeight,
      }),
    [viewport]
  )

  const resizeListener = useCallback(() => handleViewportChange(), [
    handleViewportChange,
  ])
  useResizeListener(resizeListener)

  if (!mapboxStyleJSON) return null

  return (
    <div className="map" style={{ position: 'relative' }}>
      <MapBorderFade />
      <ReactMapGL
        {...MAP_DEFAULT_SETTINGS}
        {...DEFAULT_VIEWPORT}
        {...viewport}
        ref={mapRef}
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={config.map.MAPBOX_API_KEY}
        mapStyle={mapboxStyleJSON}
      >
        <div style={navStyle}>
          {/*<NavigationControl showCompass={false} />*/}
        </div>
      </ReactMapGL>
      <MapBorderFade bottom />
    </div>
  )
}
