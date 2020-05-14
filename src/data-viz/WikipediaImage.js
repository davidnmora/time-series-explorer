import React from 'react'
import { CountyImage } from '../styles'
import { michiganCountyWikipediaData } from './michiganCountyWikipediaData'

const wikipediaURL = (regionName) =>
  michiganCountyWikipediaData[`${regionName} County`].image

export const WikipediaImage = ({ regionName, isVisible }) => (
  <CountyImage
    src={wikipediaURL(regionName)}
    isVisible={isVisible}
    alt="Prominent location in the county pulled from Wikipedia"
  />
)
