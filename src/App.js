import React, { useState } from 'react'
import './App.css'
import TimeSeriesExplorer from './TimeSeriesExplorer'
import Filters from './Filters'
import useCartoData, {
  CARTO_TABLE_NAME,
  FIELDS,
  RATIO_COLUMNS,
  ORDINAL_COLUMN,
  YEAR_COLUMN,
  GROUP_ID,
  RENDER_KEY,
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
  const data = useCartoData(CARTO_TABLE_NAME, FIELDS)
  const [ratioColumn, setRatioColumn] = useState(RATIO_COLUMNS[0])

  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        <TimeSeriesExplorer
          data={data}
          ratioColumn={ratioColumn}
          ordinalColumn={ORDINAL_COLUMN}
          groupId={GROUP_ID}
          renderKey={RENDER_KEY}
          getColor={getColor}
        />
        <YearLegend />
      </div>
      <Filters />
    </div>
  )
}

export default App
