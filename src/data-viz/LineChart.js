import React from 'react'
import { line as d3line } from 'd3-shape'
import { scaleLinear } from 'd3-scale'
import { useTransition, animated } from 'react-spring'
import {
  MONTH_COLUMN,
  TOTAL_SPEND_COVID_TREND,
  YEAR_COLUMN,
} from '../useCartoData'

const COLORS = {
  mystic: '#D8E8E8',
  sinbad: '#A8D0DA',
  sanMarino: '#406D96',
  bluewood: '#2F3A56',
  cinnibar: '#E2474B',
  sunrise: '#dee45e',
}

export const YEAR_COLORS = {
  2018: COLORS.mystic,
  2019: COLORS.sinbad,
  2020: COLORS.sanMarino,
}

const TREND_COLORS = {
  Boost: COLORS.sunrise,
  Plummet: COLORS.cinnibar,
  Equal: COLORS.bluewood,
}

const getLineColor = (lineData) => {
  const aPoint = lineData[0]
  const trend = aPoint[TOTAL_SPEND_COVID_TREND]
  const year = aPoint[YEAR_COLUMN]

  if (year === 2020) {
    return TREND_COLORS[trend]
  }
  return YEAR_COLORS[year]
}

const DIM = {
  width: 300,
  height: 200,
}

const Line = ({ lineData, dataColumn, stroke, ...rest }) => {
  const yScale = scaleLinear().range([DIM.height, 0]).domain([0, 160])

  const xScale = scaleLinear().range([0, DIM.width]).domain([1, 12])

  const pathGenerator = d3line()
    .x((d) => xScale(d[MONTH_COLUMN]))
    .y((d) => yScale(d[dataColumn]))
  const path = pathGenerator(lineData)

  // const props = useSpring({ x: , from: { x: 'black' } })

  return (
    <animated.path
      strokeDasharray={DIM.width}
      d={path}
      stroke={getLineColor(lineData)}
      style={{
        fill: 'none',
        strokeWidth: 2,
      }}
      {...rest}
    />
  )
}

const LineChart = ({ dataColumn, visibleYears, regionDataByYear }) => {
  const _regionDataByYear = [...regionDataByYear.values()].filter(
    ([aDatum]) => !visibleYears || visibleYears.includes(aDatum[YEAR_COLUMN])
  )
  const transitions = useTransition(
    _regionDataByYear,
    ([aDatum]) => aDatum[YEAR_COLUMN],
    {
      from: {
        strokeDashoffset: DIM.width,
        strokeOpacity: 0.8,
      },
      enter: {
        strokeDashoffset: 0,
        strokeOpacity: 1,
      },
      leave: { strokeOpacity: 0 },
    }
  )
  return (
    <div>
      <p>{dataColumn.replace(/_/g, ' ')}</p>
      <svg className="line-chart-svg" style={{ border: '2px solid black' }}>
        <g key="line-group" opacity={1}>
          {transitions.map(({ item, props, key }) => (
            <Line
              key={key}
              dataColumn={dataColumn}
              lineData={item}
              {...props}
            />
          ))}
        </g>
      </svg>
    </div>
  )
}

export default LineChart
