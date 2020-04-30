import React from 'react'
import { Slider } from 'antd'

const RangeSlider = ({ title, value, onChange }) => (
  <div>
    <h3>{title}</h3>
    <Slider range value={value} onChange={onChange} />
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
          onChange={onFilterChange}
        />
      ))}
    </div>
  )
}
