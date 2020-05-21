import React from 'react'
import ResponsiveXYFrame from 'semiotic/lib/ResponsiveXYFrame'
import { StateLevelTimeSeriesChartContainer } from '../../general-ui/styles'

const baseFrameProps = (xLabel, yLabel) => ({
  margin: { left: 80, bottom: 90, right: 10, top: 40 },
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

  responsiveWidth: true,
  responsiveHeight: true,
})

export const StateLevelTimeSeriesChart = ({
  data,
  visibleYears,
  chartAnnotations = [],
  xLabel,
  yLabel,
}) => (
  <StateLevelTimeSeriesChartContainer>
    <ResponsiveXYFrame
      {...baseFrameProps(xLabel, yLabel)}
      xAccessor={'xVal'}
      yAccessor={'yVal'}
      annotations={chartAnnotations}
      lines={data.filter(({ title }) => visibleYears.includes(title))}
    />
  </StateLevelTimeSeriesChartContainer>
)
