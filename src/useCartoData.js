import { useEffect, useState } from 'react'
import { group as d3group } from 'd3-array'
import DataFetcher from './DataFetcher'

// export const
export const CARTO_TABLES = {
  MRLI_TIME_SERIES: 'mrli_county_time_series',
}
// Raw data columns
export const COVID_FIELDS = {
  MONTH_COLUMN: 'month',
  YEAR_COLUMN: 'year',
  TOTAL_SPEND_COVID_TREND: 'retail_status',
  EATING_COVID_TREND: 'eating_status',
  GROCERY_COVID_TREND: 'grocery_status',
  TOTAL_SPEND_COLUMN: 'total_spend_retail_categories_country_all_origins',
  TOTAL_SPEND_EATING: 'total_spend_eating_places_country_all_origins',
  TOTAL_SPEND_GROCERY:
    'total_spend_grocery_and_food_stores_country_all_origins',

  REGION_COLUMN: 'geoid',
  DISPLAY_NAME_COLUMN: 'name',
  RURAL_PERCENTAGE_COLUMN: 'rural_area_pct_usda',
}

export const TRENDS = {
  boost: 'Boost',
  equal: 'Equal',
  plummet: 'Plummet',
}

const formatData = (fetchedData) => {
  return d3group(
    fetchedData,
    (d) => d[COVID_FIELDS.REGION_COLUMN],
    (d) => d[COVID_FIELDS.YEAR_COLUMN]
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
  })

  return data
}

export default useCartoData
