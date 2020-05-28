import { mapConfig } from './mapConfig'

export const MAP_STEPS = [
  {
    location: mapConfig.mapLocations.michigan,
    text: 'Welcome to Michigan!',
    toggledOffLayers: [
      mapConfig.layers.BREWERIES,
      mapConfig.layers.CHILD_CARE,
      mapConfig.layers.POI,
    ],
  },
  {
    location: mapConfig.mapLocations.traverseCity,
    text: 'This is Traverse City, the heart of Grand Traverse County',
    toggledOffLayers: [
      mapConfig.layers.BREWERIES,
      mapConfig.layers.CHILD_CARE,
      mapConfig.layers.POI,
    ],
  },
  {
    location: mapConfig.mapLocations.traverseCity,
    text: '... and a hotspot for breweries',
    toggledOffLayers: [
      // mapConfig.layers.BREWERIES,
      mapConfig.layers.CHILD_CARE,
      mapConfig.layers.POI,
    ],
  },
  {
    location: mapConfig.mapLocations.traverseCity,
    text: '... and strong childcare to support a thriving workforce',
    toggledOffLayers: [
      // mapConfig.layers.BREWERIES,
      // mapConfig.layers.CHILD_CARE,
      mapConfig.layers.POI,
    ],
  },
  {
    location: mapConfig.mapLocations.isabella,
    text: 'Welcome to Isabella County!',
    toggledOffLayers: [
      mapConfig.layers.BREWERIES,
      mapConfig.layers.CHILD_CARE,
      mapConfig.layers.POI,
    ],
  },
  {
    location: mapConfig.mapLocations.isabella,
    text: '... which sports many POIs.',
    toggledOffLayers: [
      // mapConfig.layers.BREWERIES,
      // mapConfig.layers.CHILD_CARE,
      // mapConfig.layers.POI,
    ],
  },
]
