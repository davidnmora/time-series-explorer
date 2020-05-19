import { useEffect, useState } from 'react'
import { group as d3group } from 'd3-array'
import DataFetcher from './DataFetcher'
import config from '../config'

const formatData = (fetchedData) => {
  return d3group(
    fetchedData,
    (d) => d[config.cartoData.MRLI_FIELDS.REGION_COLUMN],
    (d) => d[config.cartoData.MRLI_FIELDS.YEAR_COLUMN]
  )
}

const useCartoData = (cartoTableName, fields) => {
  const [data, setData] = useState([])

  useEffect(() => {
    DataFetcher.fetchSQL(
      cartoTableName,
      fields,
      `ORDER BY ${config.cartoData.MRLI_FIELDS.MONTH_COLUMN}`
      // for debug: 'WHERE geoid = 26013 AND month = 2'
    ).then((fetchedData) => {
      setData(formatData(fetchedData))
    })
  }, [cartoTableName, fields])

  return data
}

export default useCartoData
