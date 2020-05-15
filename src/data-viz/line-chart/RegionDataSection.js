import React from 'react'
import LineChart from './LineChart'
import { LabelText } from '../../general-ui/styles'
import { COVID_FIELDS } from '../../data/useCartoData'
import { totalPopulation2017 } from '../../data/michiganCountyWikipediaData'

const {
  DISPLAY_NAME_COLUMN,
  TOTAL_SPEND_COLUMN,
  TOTAL_SPEND_COVID_TREND,
  // EATING_COVID_TREND,
  // GROCERY_COVID_TREND,
  // TOTAL_SPEND_EATING,
  // TOTAL_SPEND_GROCERY,
  RURAL_PERCENTAGE_COLUMN,
} = COVID_FIELDS

const DATA_COLUMNS = [
  { numeric: TOTAL_SPEND_COLUMN, trend: TOTAL_SPEND_COVID_TREND },
  // { numeric: TOTAL_SPEND_EATING, trend: EATING_COVID_TREND },
  // { numeric: TOTAL_SPEND_GROCERY, trend: GROCERY_COVID_TREND },
]

const RegionDataSection = ({
  regionDataByYear,
  dataColumns = DATA_COLUMNS,
  visibleYears = null,
  ruralPercentLowerBound = 0,
}) => {
  const aYearDatum = regionDataByYear.get(
    (visibleYears && visibleYears[0]) || 2020
  )[0]
  const regionName = aYearDatum[DISPLAY_NAME_COLUMN]
  const show = aYearDatum[RURAL_PERCENTAGE_COLUMN] >= ruralPercentLowerBound
  return (
    <div style={{ opacity: show ? '1' : '0.1', paddingTop: 12 }}>
      <LabelText>{regionName}</LabelText>
      <LabelText gray>{totalPopulation2017(regionName)}</LabelText>
      <div style={{ display: 'flex' }}>
        {dataColumns.map((dataColumn) => (
          <LineChart
            key={`${regionName}-${dataColumn.numeric}`}
            regionName={regionName}
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
