import React from 'react'
import 'antd/dist/antd.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import { TimeSeriesScrollytelling } from './article-components/TimeSeriesScrollytelling'
import { StateLevelTimeSeriesScrollytelling } from './article-components/StateLevelTimeSeriesScrollytelling'
import useCartoData from './data/useCartoData'
import ArticleHeader from './article-components/ArticleHeader'
import { Footer } from './article-components/Footer'
import {
  ConclusionText,
  IntroText,
  PostLineChartsText,
  GrandTraverseImageAndText,
  IsabellaImageAndText,
  TransitionOutOfStateWideChartText,
} from './article-components/TextSections'
import { MapScrollytelling } from './article-components/MapScrollytelling'
import { dataConfig } from './dataConfig'
import { getShapedDataSets } from './data/utilsData'

const MRLI_FIELDS_ARRAY = Object.values(dataConfig.MRLI_FIELDS)

function App() {
  const { dataByRegion, stateMonthlyAveragesByYear } = useCartoData(
    dataConfig.MRLI_TIME_SERIES_TABLE,
    MRLI_FIELDS_ARRAY,
    `ORDER BY ${dataConfig.MRLI_FIELDS.MONTH_COLUMN}`,
    getShapedDataSets,
    {}
  )

  return (
    <div className="App">
      <ArticleHeader />

      <IntroText verticalPadding={'0'} />

      <StateLevelTimeSeriesScrollytelling
        stateMonthlyAveragesByYear={stateMonthlyAveragesByYear}
      />
      <TransitionOutOfStateWideChartText verticalPadding={'48px'} />

      <TimeSeriesScrollytelling dataByRegion={dataByRegion} />
      <PostLineChartsText />

      <GrandTraverseImageAndText />
      <IsabellaImageAndText />
      <MapScrollytelling />

      <ConclusionText />
      <Footer />
    </div>
  )
}

export default App
