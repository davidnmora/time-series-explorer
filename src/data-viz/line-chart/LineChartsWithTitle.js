import React from 'react'
import {
  LineChartsWithTitleContainer,
  LineChartSection,
  Subtitle,
  LabelText,
} from '../../general-ui/styles'
import { dataConfig } from '../../dataConfig'
import RegionDataSection from './RegionDataSection'

const dataByRegionFilter = (dataByRegion, filterField, match) =>
  [...dataByRegion.keys()].filter(
    (regionId) => dataByRegion.get(regionId).get(2020)[0][filterField] === match
  )

export const LineChartsWithTitle = ({
  supplementaryCountyData,
  dataByRegion,
  title,
  subtitle,
  trend,
  visibleYears,
  ruralPercentLowerBound,
}) => (
  <LineChartsWithTitleContainer>
    <Subtitle marginBottom="0">{title}</Subtitle>
    <LabelText gray hideOnMobile>
      {subtitle}
    </LabelText>
    <LineChartSection>
      {dataByRegionFilter(
        dataByRegion,
        dataConfig.MRLI_FIELDS.TOTAL_SPEND_COVID_TREND,
        trend
      ).map((regionId) => (
        <RegionDataSection
          key={regionId}
          supplementaryCountyData={supplementaryCountyData}
          visibleYears={visibleYears}
          regionDataByYear={dataByRegion.get(regionId)}
          ruralPercentLowerBound={ruralPercentLowerBound || 0}
        />
      ))}
    </LineChartSection>
  </LineChartsWithTitleContainer>
)
