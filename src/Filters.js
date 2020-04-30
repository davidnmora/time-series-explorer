import React from 'react'
import { Slider } from 'antd'

const RangeSlider = ({ title, value, onChange }) => (
  <div className="range-slider field-filter-container">
    <h3>{title}</h3>
    <Slider
      range
      tooltipVisible={true}
      defaultValue={value}
      onAfterChange={(newExtent) => onChange(newExtent)}
    />
  </div>
)

export default ({ filters, onFilterChange }) => {
  return (
    <div>
      <h2>Filters</h2>
      {Object.keys(filters).map((filterFieldName) => (
        <RangeSlider
          title={filterFieldName}
          value={filters[filterFieldName]}
          onChange={(newExtent) => onFilterChange(filterFieldName, newExtent)}
        />
      ))}
    </div>
  )
}
