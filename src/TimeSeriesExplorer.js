import React, { useState, useEffect } from 'react'
import moment from 'moment'
import OrdinalFrame from 'semiotic/lib/OrdinalFrame'

const getDefaultBrushExtents = (data, ordinalColumn) =>
  data.reduce(
    (accumulator, row) => ({
      ...accumulator,
      [row[ordinalColumn]]: null,
    }),
    {}
  )

const DEFAULT_OPACITY = 0.8
const FILTERED_OUT_OPACITY = 0.05
const getStyle = (isFilteredOut, color) =>
  isFilteredOut
    ? { strokeOpacity: FILTERED_OUT_OPACITY, fillOpacity: FILTERED_OUT_OPACITY }
    : {
        strokeOpacity: DEFAULT_OPACITY,
        fillOpacity: DEFAULT_OPACITY,
        fill: color,
      }

const getDataPointStyle = (dataPointGroupId, filteredOutGroupIds, color) =>
  getStyle(filteredOutGroupIds.has(dataPointGroupId), color)

const getConnectorClass = (
  connectorLine,
  filteredOutGroupIds,
  groupId,
  getColor
) => {
  const { source, target } = connectorLine
  const d = source || target
  return getStyle(filteredOutGroupIds.has(d[groupId]), getColor && getColor(d))
}

export const withinExtents = (value, extent) =>
  !extent || (value >= extent[0] && value <= extent[1])

const getDefaultFrameProps = (
  ordinalColumn,
  ratioColumn,
  groupId,
  filteredOutGroupIds,
  getColor
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
  style: (d) =>
    getDataPointStyle(d[groupId], filteredOutGroupIds, getColor && getColor(d)),
  connectorStyle: (d) =>
    getConnectorClass(d, filteredOutGroupIds, groupId, getColor),
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
  oLabel: (e) => <text fontSize={12}>{moment.monthsShort(+e - 1)}</text>,
})

export default ({
  data, // NOTE: should be sorted by ordinal column
  ordinalColumn,
  ratioColumn,
  groupId,
  renderKey,
  getColor = null,
}) => {
  const [filterInfo, setFilterInfo] = useState({
    brushExtents: null,
    filteredOutGroupIds: new Set([]),
  })

  const updateFilterInfo = (updates) =>
    setFilterInfo({
      ...filterInfo,
      ...updates,
    })

  useEffect(() => {
    updateFilterInfo({
      brushExtents: getDefaultBrushExtents(data, ordinalColumn),
    })
  }, [data])

  const nonInteractiveFrameProps = getDefaultFrameProps(
    ordinalColumn,
    ratioColumn,
    groupId,
    filterInfo.filteredOutGroupIds,
    getColor
  )

  const onBrushEnd = (newExtent, ordinalValue) => {
    const newBrushExtents = {
      ...filterInfo.brushExtents,
      [ordinalValue]: newExtent,
    }

    // GOAL: for each data point, if it doesn't fit the bounds add its groupId
    const _filterIds = data.reduce((_filteredOutGroupIds, d) => {
      if (!withinExtents(d[ratioColumn], newBrushExtents[d[ordinalColumn]])) {
        _filteredOutGroupIds.add(d[groupId])
      }
      return _filteredOutGroupIds
    }, new Set([]))

    updateFilterInfo({
      brushExtents: newBrushExtents,
      filteredOutGroupIds: _filterIds,
    })
  }

  return (
    <OrdinalFrame
      {...nonInteractiveFrameProps}
      renderKey={renderKey}
      data={data}
      interaction={{
        columnsBrush: true,
        end: onBrushEnd,
        extent: filterInfo.brushExtents,
      }}
    />
  )
}
