import React from 'react'
import LineChart from './LineChart'
import { LabelText } from '../styles'
import { COVID_FIELDS } from '../useCartoData'

const {
  DISPLAY_NAME_COLUMN,
  TOTAL_SPEND_COLUMN,
  TOTAL_SPEND_COVID_TREND,
  EATING_COVID_TREND,
  GROCERY_COVID_TREND,
  TOTAL_SPEND_EATING,
  TOTAL_SPEND_GROCERY,
} = COVID_FIELDS

const DATA_COLUMNS = [
  { numeric: TOTAL_SPEND_COLUMN, trend: TOTAL_SPEND_COVID_TREND },
  { numeric: TOTAL_SPEND_EATING, trend: EATING_COVID_TREND },
  { numeric: TOTAL_SPEND_GROCERY, trend: GROCERY_COVID_TREND },
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
      <LabelText>{regionName}</LabelText>
      <div style={{ display: 'flex' }}>
        {dataColumns.map((dataColumn) => (
          <LineChart
            key={`${regionName}-${dataColumn.numeric}`}
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
