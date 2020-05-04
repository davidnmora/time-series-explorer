import { useEffect, useState } from 'react'
import { group as d3group } from 'd3-array'
import DataFetcher from './DataFetcher'

// Raw data columns
export const CARTO_TABLE_NAME = 'mrli_county_time_series'
export const MONTH_COLUMN = 'month'
export const YEAR_COLUMN = 'year'
// export const RURAL_PERCENTAGE_COLUMN = 'rural_area_pct_ruca'
export const RATIO_COLUMNS = [
  'total_spend_retail_categories_country_all_origins',
]
export const REGION_COLUMN = 'geoid'
export const DISPLAY_NAME_COLUMN = 'name'
export const FIELDS = [
  // TODO: export a single object, COLUMNS
  REGION_COLUMN,
  DISPLAY_NAME_COLUMN,
  YEAR_COLUMN,
  // RURAL_PERCENTAGE_COLUMN,
  MONTH_COLUMN,
  ...RATIO_COLUMNS,
]

// Created columns
export const GROUP_ID = 'groupId'
export const RENDER_KEY = 'renderKey'

const formatData = (fetchedData) => {
  return d3group(
    fetchedData,
    (d) => d[REGION_COLUMN],
    (d) => d[YEAR_COLUMN]
  )
}

const useCartoData = (cartoTableName, fields) => {
  const [data, setData] = useState([])

  useEffect(() => {
    DataFetcher.fetchSQL(
      cartoTableName,
      fields,
      'ORDER BY month'
      // for debug: 'WHERE geoid = 26013 AND month = 2'
    ).then((fetchedData) => {
      setData(formatData(fetchedData))
    })
  }, [])

  return data
}

export default useCartoData
