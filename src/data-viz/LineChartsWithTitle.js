import React from 'react'
import {
  LineChartsWithTitleContainer,
  LineChartSection,
  Subtitle,
  LabelText,
} from '../general-ui/styles'
import { COVID_FIELDS } from '../data/useCartoData'
import RegionDataSection from './RegionDataSection'

const dataByRegionFilter = (dataByRegion, filterField, match) =>
  [...dataByRegion.keys()].filter(
    (regionId) => dataByRegion.get(regionId).get(2020)[0][filterField] === match
  )

export const LineChartsWithTitle = ({
  dataByRegion,
  title,
  subtitle,
  trend,
  visibleYears,
  ruralPercentLowerBound,
}) => (
  <LineChartsWithTitleContainer>
    <Subtitle marginBottom="0">{title}</Subtitle>
    <LabelText gray>{subtitle}</LabelText>
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
