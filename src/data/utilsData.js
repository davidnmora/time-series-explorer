import { group as d3group } from 'd3-array'
import config from '../config'

export const round = (num, decimalPlaces) => {
  return +Number(num).toFixed(decimalPlaces)
}

// rounds to visually sensible decimal place
export const smartRound = (num = 0, min = false, max = false) => {
  min = min || num
  max = max || num
  if (Math.abs(min) > 100 || Math.abs(max) > 100) return round(num, 0)
  if (Math.abs(min) < 1 || Math.abs(max) < 1) return round(num, 3)
  if (Math.abs(min) < 10 && Math.abs(max) < 10) return round(num, 2)
  return round(num, 1)
}

// rounds to visually sensible decimal place
export const smartDisplayValue = (num, min, max) => {
  if (typeof num === 'undefined' || num === null) return '-'
  if (typeof num === 'string') return num

  var val = smartRound(num, min || num, max || num)
  if (Math.abs(val) > 1000000000000000)
    return Math.round(val / 100000000000000) / 10.0 + 'Q'
  if (Math.abs(val) > 1000000000000)
    return Math.round(val / 100000000000) / 10.0 + 'T'
  if (Math.abs(val) > 1000000000)
    return Math.round(val / 100000000) / 10.0 + 'B'
  if (Math.abs(val) > 1000000) return Math.round(val / 100000) / 10.0 + 'M'
  if (Math.abs(val) > 1000) return Math.round(val / 100) / 10.0 + 'K'
  if (Math.round(val) !== val) return Math.round(val * 10) / 10

  return val
}

export const nestDataByRegionAndYear = (fetchedData) => {
  return d3group(
    fetchedData,
    (d) => d[config.cartoData.MRLI_FIELDS.REGION_COLUMN],
    (d) => d[config.cartoData.MRLI_FIELDS.YEAR_COLUMN]
  )
}
const getRegion = (regionName, supplementaryCountyData) =>
  supplementaryCountyData.find(({ name }) => name === regionName) || {}

export const wikipediaThumbnailURL = (regionName, supplementaryCountyData) =>
  getRegion(regionName, supplementaryCountyData)[
    config.cartoData.COUNTY_FIELDS.THUMBNAIL
  ]

export const totalPopulation = (regionName, supplementaryCountyData) =>
  smartDisplayValue(
    getRegion(regionName, supplementaryCountyData)[
      config.cartoData.COUNTY_FIELDS.TOTAL_POPULATION
    ]
  )
