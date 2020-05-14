import React from 'react'
import { useSpring, animated } from 'react-spring'
import { michiganCountyWikipediaData } from './michiganCountyWikipediaData'

const wikipediaURL = (regionName) =>
  michiganCountyWikipediaData[`${regionName} County`].image

export const WikipediaImage = ({ width, height, regionName, isVisible }) => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: isVisible ? 1 : 0 },
  })

  return (
    <animated.span style={props}>
      <animated.img
        src={wikipediaURL(regionName)}
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
        }}
        alt="Prominent location in the county pulled from Wikipedia"
      />
    </animated.span>
  )
}
