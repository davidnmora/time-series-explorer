import React from 'react'
import LineChart from './LineChart'
import {
  DISPLAY_NAME_COLUMN,
  TOTAL_SPEND_COLUMN,
  TOTAL_SPEND_EATING,
  TOTAL_SPEND_GROCERY,
} from '../useCartoData'

const DATA_COLUMNS = [
  TOTAL_SPEND_COLUMN,
  TOTAL_SPEND_EATING,
  TOTAL_SPEND_GROCERY,
]

const RegionDataSection = ({
  regionDataByYear,
  dataColumns = DATA_COLUMNS,
  visibleYears = null,
}) => {
  const regionName = regionDataByYear.get(
    (visibleYears && visibleYears[0]) || 2020
  )[0][DISPLAY_NAME_COLUMN]
  return (
    <div>
      <p>{regionName}</p>
      <div style={{ display: 'flex' }}>
        {dataColumns.map((dataColumn) => (
          <LineChart
            key={`${regionName}-${dataColumn}`}
            dataColumn={dataColumn}
            visibleYears={visibleYears}
            regionDataByYear={regionDataByYear}
          />
        ))}
      </div>
    </div>
  )
}

export default RegionDataSection
