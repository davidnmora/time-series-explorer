import React from 'react'
import { extent as d3extent, max as d3max } from 'd3-array'
import { line as d3line } from 'd3-shape'
import { scaleLinear } from 'd3-scale'
import TransitionablePath from './transitionable-svgs/TransitionablePath'
import { MONTH_COLUMN, TOTAL_SPEND_COLUMN, YEAR_COLUMN } from '../useCartoData'

const YEAR_COLORS = {
  2018: '#edf8b1',
  2019: '#7fcdbb',
  2020: '#2c7fb8',
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
      style={{ stroke: color, fill: 'none' }}
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
            color={YEAR_COLORS[year]}
            lineData={regionYearData.get(year)}
          />
        ))}
      </g>
    </svg>
  )
}

export default LineChart
