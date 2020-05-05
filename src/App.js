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

  return (
    <div className="App">
      <ScrollytellingContainer regionData={data} />
      {/*<Filters filters={filters} onFilterChange={onFilterChange} />*/}
    </div>
  )
}

export default App
