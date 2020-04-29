import React, { useEffect, useState } from 'react'
import './App.css'
import moment from 'moment'
import DataFetcher from './DataFetcher'

import TimeSeriesExplorer from './TimeSeriesExplorer'

// Raw data columns
const CARTO_TABLE_NAME = 'mrli_county_commercial_details'
const ORDINAL_COLUMN = 'month'
const YEAR_COLUMN = 'year'
const DATE_STRING_COLUMN = 'date'
const RATIO_COLUMNS = ['total_spend_retail_categories_province_all_origins']
const GROUP_COLUMN = 'geoid'
const FIELDS = [
  GROUP_COLUMN,
  YEAR_COLUMN,
  DATE_STRING_COLUMN,
  ORDINAL_COLUMN,
  ...RATIO_COLUMNS,
]

// Created columns
const GROUP_ID = 'groupId'

const formatData = (fetchedData) => {
  return fetchedData
    .map((d) => ({
      ...d,
      [DATE_STRING_COLUMN]: moment(d[DATE_STRING_COLUMN]),
      [GROUP_ID]: `${d[GROUP_COLUMN]}-${d[YEAR_COLUMN]}`,
    }))
    .sort((a, b) => a[DATE_STRING_COLUMN].diff(b[DATE_STRING_COLUMN]))
}

function App() {
  const [data, setData] = useState([])
  const [ratioColumn, setRatioColumn] = useState(RATIO_COLUMNS[0])

  useEffect(() => {
    // TODO: don't limit to 2019
    DataFetcher.fetchSQL(CARTO_TABLE_NAME, FIELDS, 'WHERE year = 2019').then(
      (fetchedData) => {
        setData(formatData(fetchedData))
      }
    )
  }, [])

  return (
    <div className="App">
      <TimeSeriesExplorer
        data={data}
        ratioColumn={ratioColumn}
        ordinalColumn={ORDINAL_COLUMN}
        groupId={GROUP_ID}
      />
    </div>
  )
}

export default App
