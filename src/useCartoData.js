import { useEffect, useState } from 'react'
import DataFetcher from './DataFetcher'
import moment from 'moment'

// Raw data columns
export const CARTO_TABLE_NAME = 'mrli_county_commercial_details'
export const ORDINAL_COLUMN = 'month'
export const YEAR_COLUMN = 'year'
export const DATE_STRING_COLUMN = 'date'
export const RURAL_PERCENTAGE_COLUMN = 'rural_area_pct_ruca'
export const RATIO_COLUMNS = [
  'total_spend_retail_categories_province_all_origins',
]
export const REGION_COLUMN = 'geoid'
export const FIELDS = [
  REGION_COLUMN,
  YEAR_COLUMN,
  DATE_STRING_COLUMN,
  RURAL_PERCENTAGE_COLUMN,
  ORDINAL_COLUMN,
  ...RATIO_COLUMNS,
]

// Created columns
export const GROUP_ID = 'groupId'
export const RENDER_KEY = 'renderKey'

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

const useCartoData = (cartoTableName, fields) => {
  const [data, setData] = useState([])

  useEffect(() => {
    DataFetcher.fetchSQL(
      cartoTableName,
      fields
      // for debug: 'WHERE geoid = 26013 AND month = 2'
    ).then((fetchedData) => {
      setData(formatData(fetchedData))
    })
  }, [])

  return data
}

export default useCartoData
