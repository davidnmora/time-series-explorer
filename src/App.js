import React, { useState, useMemo } from 'react'
import './App.css'
import 'antd/dist/antd.css'
import { withinExtents } from './TimeSeriesExplorer'
import ScrollytellingContainer from './ScrollytellingContainer'
import Filters from './Filters'
import useCartoData, {
  CARTO_TABLE_NAME,
  FIELDS,
  RATIO_COLUMNS,
  MONTH_COLUMN,
  DISPLAY_NAME_COLUMN,
  YEAR_COLUMN,
  // RURAL_PERCENTAGE_COLUMN,
} from './useCartoData'

const YEAR_COLORS = {
  2018: '#edf8b1',
  2019: '#7fcdbb',
  2020: '#2c7fb8',
}

const YearLegend = () => (
  <div>
    {Object.keys(YEAR_COLORS).map((year) => (
      <div key={year} style={{ backgroundColor: YEAR_COLORS[year] }}>
        {year}
      </div>
    ))}
  </div>
)

const getColor = (d) => YEAR_COLORS[d[YEAR_COLUMN]]

function App() {
  // const data = useCartoData(CARTO_TABLE_NAME, FIELDS)
  const [ratioColumn, setRatioColumn] = useState(RATIO_COLUMNS[0])
  const [filters, setFilters] = useState({
    [MONTH_COLUMN]: [0, 100],
  })

  const onFilterChange = (filterFieldName, newExtent) => {
    console.log(filterFieldName, newExtent)
    setFilters({
      ...filters,
      [filterFieldName]: newExtent,
    })
  }

  return (
    <div className="App">
      <ScrollytellingContainer />
      <Filters filters={filters} onFilterChange={onFilterChange} />
    </div>
  )
}

export default App
