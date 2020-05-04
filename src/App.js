import React, { useState, useMemo } from 'react'
import './App.css'
import 'antd/dist/antd.css'
import LineChart from './data-viz/LineChart'
import ScrollytellingContainer from './ScrollytellingContainer'
import Filters from './Filters'
import useCartoData, {
  CARTO_TABLE_NAME,
  FIELDS,
  RATIO_COLUMNS,
  MONTH_COLUMN,
  DISPLAY_NAME_COLUMN,
  // RURAL_PERCENTAGE_COLUMN,
} from './useCartoData'

function App() {
  const data = useCartoData(CARTO_TABLE_NAME, FIELDS)

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
      {[...data.keys()].map((regionId) => (
        <LineChart key={regionId} regionYearData={data.get(regionId)} />
      ))}

      {/*<ScrollytellingContainer />*/}
      {/*<Filters filters={filters} onFilterChange={onFilterChange} />*/}
    </div>
  )
}

export default App
