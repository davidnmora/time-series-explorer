import React from 'react'
import {
  LineChartsWithTitleContainer,
  LineChartSection,
  Subtitle,
} from '../styles'
import { COVID_FIELDS } from '../useCartoData'
import RegionDataSection from './RegionDataSection'

const dataByRegionFilter = (dataByRegion, filterField, match) =>
  [...dataByRegion.keys()].filter(
    (regionId) => dataByRegion.get(regionId).get(2020)[0][filterField] === match
  )

export const LineChartsWithTitle = ({
  dataByRegion,
  title,
  trend,
  visibleYears,
  ruralPercentLowerBound,
}) => (
  <LineChartsWithTitleContainer>
    <Subtitle>{title}</Subtitle>
    <LineChartSection>
      {dataByRegionFilter(
        dataByRegion,
        COVID_FIELDS.TOTAL_SPEND_COVID_TREND,
        trend
      ).map((regionId) => (
        <RegionDataSection
          key={regionId}
          visibleYears={visibleYears}
          regionDataByYear={dataByRegion.get(regionId)}
          ruralPercentLowerBound={ruralPercentLowerBound || 0}
        />
      ))}
    </LineChartSection>
  </LineChartsWithTitleContainer>
)
