import React, { useState } from 'react'
import OrdinalFrame from 'semiotic/lib/OrdinalFrame'

const getDefaultBrushExtents = (data, ordinalColumn) =>
  data.reduce(
    (accumulator, row) => ({
      ...accumulator,
      [row[ordinalColumn]]: null,
    }),
    {}
  )

const getDefaultFrameProps = (ordinalColumn, ratioColumn, groupColumn) => ({
  size: [900, 800],
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
  // style: function (e) {
  //   return { fill: e.color, stroke: 'white', strokeOpacity: 0.5 }
  // },
  // connectorStyle: function (e) {
  // 	return {
  // 		fill: e.source.color,
  // 		stroke: e.source.color,
  // 		strokeOpacity: 0.5,
  // 		fillOpacity: 0.5,
  // 	}
  // },
  axes: [
    {
      orient: 'left',
      tickFormat: (e) => e,
      baseline: false,
      label: { name: ratioColumn },
    },
    {
      tickFormat: (e) => e,
      baseline: false,
      orient: 'right',
    },
  ],
  oLabel: true,
})

export default ({
  data, // NOTE: should be sorted by ordinal column
  ordinalColumn,
  ratioColumn,
  groupColumn,
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
