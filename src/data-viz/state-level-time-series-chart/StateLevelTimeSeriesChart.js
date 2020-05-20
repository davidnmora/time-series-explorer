import React from 'react'
import ResponsiveXYFrame from 'semiotic/lib/ResponsiveXYFrame'

const frameProps = (xLabel, yLabel) => ({
  margin: { left: 80, bottom: 90, right: 10, top: 40 },
  xAccessor: 'xVal',
  yAccessor: 'yVal',
  lineStyle: (d) => ({
    stroke: d.color,
    strokeWidth: 2,
    fill: 'none',
  }),
  axes: [
    {
      orient: 'left',
      label: yLabel,
    },
    {
      orient: 'bottom',
      label: { name: xLabel, locationDistance: 55 },
    },
  ],
})

export const StateLevelTimeSeriesChart = ({
  data,
  visibleYears,
  xLabel,
  yLabel,
}) => (
  <div style={{ height: '80vh', width: '80vw', margin: 'auto' }}>
    <ResponsiveXYFrame
      {...frameProps(xLabel, yLabel)}
      lines={data.filter(({ title }) => visibleYears.includes(title))}
    />
  </div>
)
