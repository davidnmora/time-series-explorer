import React from 'react'
import 'antd/dist/antd.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import { TimeSeriesScrollytelling } from './article-components/TimeSeriesScrollytelling'
import useCartoData from './data/useCartoData'
import ArticleHeader from './article-components/ArticleHeader'
import { Footer } from './article-components/Footer'
import {
  ConclusionText,
  IntroText,
  PostLineChartsText,
  GrandTraverseImageAndText,
  IsabellaImageAndText,
} from './article-components/TextSections'
import { MapScrollytelling } from './article-components/MapScrollytelling'
import config from './config'
import { nestDataByRegionAndYear } from './data/utilsData'

const MRLI_FIELDS_ARRAY = Object.values(config.cartoData.MRLI_FIELDS)

function App() {
  const dataByRegion = useCartoData(
    config.cartoData.MRLI_TIME_SERIES_TABLE,
    MRLI_FIELDS_ARRAY,
    `ORDER BY ${config.cartoData.MRLI_FIELDS.MONTH_COLUMN}`,
    nestDataByRegionAndYear
  )

  return (
    <div className="App">
      <ArticleHeader />

      <IntroText verticalPadding={'0'} />
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
