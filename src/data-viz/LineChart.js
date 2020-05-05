import React from 'react'
import { line as d3line } from 'd3-shape'
import { scaleLinear } from 'd3-scale'
import TransitionablePath from './transitionable-svgs/TransitionablePath'
import {
  MONTH_COLUMN,
  TOTAL_SPEND_COLUMN,
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

const YEAR_COLORS = {
  2018: COLORS.mystic,
  2019: COLORS.sinbad,
  2020: COLORS.sanMarino,
}

const TREND_COLORS = {
  Boost: COLORS.sunrise,
  Plummet: COLORS.cinnibar,
  Equal: COLORS.bluewood,
}

const getLineColor = (points, year) => {
  const aPoint = points[0]
  if (year === 2020 && aPoint) {
    return TREND_COLORS[aPoint[TOTAL_SPEND_COVID_TREND]]
  }
  return YEAR_COLORS[year]
}

const DIM = {
  width: 300,
  height: 200,
}

const Line = ({ lineData, color }) => {
  const yScale = scaleLinear().range([DIM.height, 0]).domain([0, 160])

  const xScale = scaleLinear().range([0, DIM.width]).domain([1, 12])

  const pathGenerator = d3line()
    .x((d) => xScale(d[MONTH_COLUMN]))
    .y((d) => yScale(d[TOTAL_SPEND_COLUMN]))
  const path = pathGenerator(lineData)
  return (
    <TransitionablePath
      style={{ stroke: color, fill: 'none', strokeWidth: 2 }}
      className={`line`}
      d={path}
    />
  )
}

const LineChart = ({ regionYearData }) => {
  return (
    <svg className={'radarPolygonGroup'} style={{ border: '2px solid black' }}>
      <g key={`polygon-group`} opacity={1}>
        {[...regionYearData.keys()].map((year) => (
          <Line
            key={year}
            color={getLineColor(regionYearData.get(year), year)}
            lineData={regionYearData.get(year)}
          />
        ))}
      </g>
    </svg>
  )
}

export default LineChart
