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
const REGION_COLUMN = 'geoid'
const FIELDS = [
  REGION_COLUMN,
  YEAR_COLUMN,
  DATE_STRING_COLUMN,
  ORDINAL_COLUMN,
  ...RATIO_COLUMNS,
]

// Created columns
const GROUP_ID = 'groupId'
const RENDER_KEY = 'renderKey'

const formatData = (fetchedData) => {
  return fetchedData
    .map((d) => ({
      ...d,
      [DATE_STRING_COLUMN]: moment(d[DATE_STRING_COLUMN]),
      [GROUP_ID]: `${d[REGION_COLUMN]}-${d[YEAR_COLUMN]}`,
      [RENDER_KEY]: `${d[REGION_COLUMN]}-${d[DATE_STRING_COLUMN]}`,
    }))
    .sort((a, b) => a[DATE_STRING_COLUMN].diff(b[DATE_STRING_COLUMN]))
}

const YEAR_COLORS = {
  2018: '#edf8b1',
  2019: '#7fcdbb',
  2020: '#2c7fb8',
}

const getColor = (d) => YEAR_COLORS[d[YEAR_COLUMN]]

function App() {
  const [data, setData] = useState([])
  const [ratioColumn, setRatioColumn] = useState(RATIO_COLUMNS[0])

  useEffect(() => {
    DataFetcher.fetchSQL(
      CARTO_TABLE_NAME,
      FIELDS
      // for debug: 'WHERE geoid = 26013 AND month = 2'
    ).then((fetchedData) => {
      setData(formatData(fetchedData))
    })
  }, [])

  return (
    <div className="App">
      <div>
        {Object.keys(YEAR_COLORS).map((year) => (
          <div style={{ backgroundColor: YEAR_COLORS[year] }}>{year}</div>
        ))}
      </div>
      <TimeSeriesExplorer
        data={data}
        ratioColumn={ratioColumn}
        ordinalColumn={ORDINAL_COLUMN}
        groupId={GROUP_ID}
        renderKey={RENDER_KEY}
        getColor={getColor}
      />
    </div>
  )
}

export default App
