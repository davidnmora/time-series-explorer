import React, { useState, useEffect } from 'react'
import OrdinalFrame from 'semiotic/lib/OrdinalFrame'

const getDefaultBrushExtents = (data, ordinalColumn) =>
  data.reduce(
    (accumulator, row) => ({
      ...accumulator,
      [row[ordinalColumn]]: null,
    }),
    {}
  )

const withinExtents = (value, extent) =>
  !extent || (value >= extent[0] && value <= extent[1])

const getDefaultFrameProps = (
  ordinalColumn,
  ratioColumn,
  groupId,
  filteredOutGroupIds
) => ({
  size: [900, 800],
  margin: { left: 40, top: 50, bottom: 75, right: 120 },
  type: {
    type: 'point',
    r: function () {
      return 5
    },
  },
  connectorType: (e) => e[groupId],
  oAccessor: ordinalColumn,
  rAccessor: ratioColumn,
  rExtent: [0],
  style: (d) => {
    return filteredOutGroupIds.has(d[groupId])
      ? { fill: 'black', fillOpacity: 0.05 }
      : { fill: 'black' }
  },
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
  groupId,
  renderKey,
}) => {
  const [brushExtents, setBrushExtents] = useState(null)
  const [filteredOutGroupIds, setFilteredOutGroupIds] = useState(new Set([]))
  useEffect(() => {
    setBrushExtents(getDefaultBrushExtents(data, ordinalColumn))
  }, [data])

  console.log(brushExtents, filteredOutGroupIds)

  const nonInteractiveFrameProps = getDefaultFrameProps(
    ordinalColumn,
    ratioColumn,
    groupId,
    filteredOutGroupIds
  )

  const onBrushEnd = (newExtent, ordinalValue) => {
    const newBrushExtents = {
      ...brushExtents,
      [ordinalValue]: newExtent,
    }
    setBrushExtents(newBrushExtents)
    // GOAL: for each data point, if it doesn't fit the bounds add its groupId
    const _filterIds = data.reduce((_filteredOutGroupIds, d) => {
      if (!withinExtents(d[ratioColumn], newBrushExtents[d[ordinalColumn]])) {
        _filteredOutGroupIds.add(d[groupId])
      }
      return _filteredOutGroupIds
    }, new Set([]))

    setFilteredOutGroupIds(_filterIds)
  }
  console.log('UPDATE!!!')
  return (
    <OrdinalFrame
      {...nonInteractiveFrameProps}
      renderKey={renderKey}
      data={data}
      interaction={{
        columnsBrush: true,
        end: onBrushEnd,
        extent: brushExtents,
      }}
    />
  )
}
