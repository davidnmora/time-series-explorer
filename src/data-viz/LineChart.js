import React from 'react'
import { line as d3line } from 'd3-shape'
import { scaleLinear } from 'd3-scale'
import { animated, useTransition } from 'react-spring'
import { LabelText, SVGContainer } from '../styles'
import { COVID_FIELDS } from '../useCartoData'
import { TREND_COLORS, YEAR_COLORS } from '../colors'

const { MONTH_COLUMN, YEAR_COLUMN } = COVID_FIELDS

const getLineColor = (lineData, dataColumn) => {
  const aPoint = lineData[0]
  const year = aPoint[YEAR_COLUMN]

  if (year === 2020) {
    const trend = aPoint[dataColumn.trend]
    return TREND_COLORS[trend]
  }
  return YEAR_COLORS[year]
}

const DEFAULT_DIMENSIONS = {
  width: 144,
  height: 80,
}

const Line = ({ lineData, dataColumn, stroke, scale, ...rest }) => {
  const pathGenerator = d3line()
    .x((d) => scale.x(d[MONTH_COLUMN]))
    .y((d) => scale.y(d[dataColumn.numeric]))
  const path = pathGenerator(lineData)

  // const props = useSpring({ x: , from: { x: 'black' } })

  return (
    <animated.path
      d={path}
      stroke={getLineColor(lineData, dataColumn)}
      style={{
        fill: 'none',
        strokeWidth: 2,
      }}
      {...rest}
    />
  )
}

const LineChart = ({
  dataColumn,
  visibleYears,
  regionDataByYear,
  title = false,
  dimensions = DEFAULT_DIMENSIONS,
}) => {
  const _regionDataByYear = [...regionDataByYear.values()].filter(
    ([aDatum]) => !visibleYears || visibleYears.includes(aDatum[YEAR_COLUMN])
  )
  const transitions = useTransition(
    _regionDataByYear,
    ([aDatum]) => aDatum[YEAR_COLUMN],
    {
      from: {
        strokeDashoffset: dimensions.width,
        strokeOpacity: 0.8,
      },
      enter: {
        strokeDashoffset: 0,
        strokeOpacity: 1,
      },
      leave: { strokeOpacity: 0 },
    }
  )
  const scale = {
    x: scaleLinear().range([0, dimensions.width]).domain([1, 12]),
    y: scaleLinear().range([dimensions.height, 0]).domain([0, 160]),
  }

  return (
    <div>
      {title && <LabelText>{dataColumn.numeric.replace(/_/g, ' ')}</LabelText>}
      <SVGContainer
        height={`${dimensions.height}px`}
        width={`${dimensions.width}px`}
      >
        <g key="line-group" opacity={1}>
          {transitions.map(({ item, props, key }) => (
            <Line
              key={key}
              dataColumn={dataColumn}
              lineData={item}
              scale={scale}
              strokeDasharray={dimensions.width}
              {...props}
            />
          ))}
        </g>
      </SVGContainer>
    </div>
  )
}

export default LineChart
