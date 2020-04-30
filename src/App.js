import React, { useState, useMemo } from 'react'
import './App.css'
import 'antd/dist/antd.css'
import TimeSeriesExplorer, { withinExtents } from './TimeSeriesExplorer'
import Filters from './Filters'
import useCartoData, {
  CARTO_TABLE_NAME,
  FIELDS,
  RATIO_COLUMNS,
  ORDINAL_COLUMN,
  DISPLAY_NAME_COLUMN,
  YEAR_COLUMN,
  GROUP_ID,
  RENDER_KEY,
  RURAL_PERCENTAGE_COLUMN,
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
  const [filters, setFilters] = useState({
    [RURAL_PERCENTAGE_COLUMN]: [0, 100],
  })

  const onFilterChange = (filterFieldName, newExtent) => {
    console.log(filterFieldName, newExtent)
    setFilters({
      ...filters,
      [filterFieldName]: newExtent,
    })
  }

  const filteredData = useMemo(
    () =>
      data.filter(
        (d) =>
          !Object.keys(filters).some(
            (filterFieldName) =>
              !withinExtents(d[filterFieldName], filters[filterFieldName])
          )
      ),
    [data, filters]
  )

  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        <TimeSeriesExplorer
          title={`Filterable time series of ${ratioColumn} for ${Object.keys(
            YEAR_COLORS
          ).join(', ')}`}
          data={filteredData}
          ratioColumn={ratioColumn}
          ordinalColumn={ORDINAL_COLUMN}
          displayNameColumn={DISPLAY_NAME_COLUMN}
          groupId={GROUP_ID}
          renderKey={RENDER_KEY}
          getColor={getColor}
        />
        <YearLegend />
      </div>
      <Filters filters={filters} onFilterChange={onFilterChange} />
    </div>
  )
}

export default App
