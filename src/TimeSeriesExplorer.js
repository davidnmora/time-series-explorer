import React, { useState } from 'react'
import OrdinalFrame from 'semiotic/lib/OrdinalFrame'

const DATA = [
  { name: 'New York', color: '#ac58e5', year: 2015, value: 17.2 },
  { name: 'Las Vegas', color: '#E0488B', year: 2015, value: 13.9 },
  { name: 'San Diego', color: '#9fd0cb', year: 2015, value: 16.1 },
  { name: 'Denver', color: '#e0d33a', year: 2015, value: 26.6 },
  { name: 'Oakland', color: '#7566ff', year: 2015, value: 37.2 },

  { name: 'New York', color: '#ac58e5', year: 2011, value: 17.9 },
  { name: 'Las Vegas', color: '#E0488B', year: 2011, value: 18.7 },
  { name: 'San Diego', color: '#9fd0cb', year: 2011, value: 18.9 },
  { name: 'Denver', color: '#e0d33a', year: 2011, value: 27.4 },
  { name: 'Oakland', color: '#7566ff', year: 2011, value: 30.5 },
]

const getDefaultBrushExtents = (data, ordinalColumn) =>
  data.reduce(
    (accumulator, row) => ({
      ...accumulator,
      [row[ordinalColumn]]: null,
    }),
    {}
  )

const getDefaultFrameProps = (ordinalColumn, ratioColumn, groupColumn) => ({
  size: [500, 450],
  margin: { left: 40, top: 50, bottom: 75, right: 120 },
  type: {
    type: 'point',
    r: function () {
      return 5
    },
  },
  connectorType: (e) => e[groupColumn],
  oAccessor: ordinalColumn,
  rAccessor: ratioColumn,
  rExtent: [0],
  style: function (e) {
    return { fill: e.color, stroke: 'white', strokeOpacity: 0.5 }
  },
  // connectorStyle: function (e) {
  // 	return {
  // 		fill: e.source.color,
  // 		stroke: e.source.color,
  // 		strokeOpacity: 0.5,
  // 		fillOpacity: 0.5,
  // 	}
  // },
  title: '% of Adults Who Binge Drink',
  axes: [
    {
      orient: 'left',
      tickFormat: function (e) {
        return e + '%'
      },
      baseline: false,
      label: { name: 'Adults Who Binge Drink' },
    },
    {
      tickFormat: (e) => e + '%',
      baseline: false,
      orient: 'right',
    },
  ],
  oLabel: true,
})

export default ({
  data = DATA, // NOTE: should be sorted by ordinal column
  ordinalColumn = 'year',
  ratioColumn = 'value',
  groupColumn = 'name',
}) => {
  const nonInteractiveFrameProps = getDefaultFrameProps(
    ordinalColumn,
    ratioColumn,
    groupColumn
  )
  const defaultBrushExtents = getDefaultBrushExtents(data, ordinalColumn)
  const [brushExtents, setBrushExtents] = useState(defaultBrushExtents)
  return (
    <OrdinalFrame
      {...nonInteractiveFrameProps}
      data={data}
      interaction={{
        columnsBrush: true,
        end: (newExtent, fieldName) => {
          setBrushExtents({
            ...brushExtents,
            [fieldName]: newExtent,
          })
        },
        extent: brushExtents,
      }}
    />
  )
}
