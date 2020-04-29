import React, { useEffect, useState } from 'react'
import './App.css'
import DataFetcher from './DataFetcher'

import TimeSeriesExplorer from './TimeSeriesExplorer'

const ORDINAL_COLUMN = 'date'
const RATIO_COLUMNS = ['total_spend_retail_categories_province_all_origins']
const GROUP_COLUMN = 'geoid'

function App() {
  const [data, setData] = useState([])
  const [ratioColumn, setRatioColumn] = useState(RATIO_COLUMNS[0])

  useEffect(() => {
    DataFetcher.fetchSQL(
      'mrli_county_commercial_details',
      ['geoid', 'month', 'year', ORDINAL_COLUMN, ...RATIO_COLUMNS],
      'LIMIT 100'
    ).then((fetchedData) => {
      console.log(fetchedData)
      setData(fetchedData)
    })
  }, [])

  return (
    <div className="App">
      <TimeSeriesExplorer
        data={data}
        ratioColumn={ratioColumn}
        ordinalColumn={ORDINAL_COLUMN}
        groupColumn={GROUP_COLUMN}
      />
    </div>
  )
}

export default App
