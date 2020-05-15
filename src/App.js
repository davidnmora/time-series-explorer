import React from 'react'
import 'antd/dist/antd.css'
import { TimeSeriesScrollytelling } from './article-components/TimeSeriesScrollytelling'
import useCartoData, { CARTO_TABLES, COVID_FIELDS } from './data/useCartoData'
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

const COVID_FIELDS_ARRAY = Object.values(COVID_FIELDS)

function App() {
  const dataByRegion = useCartoData(
    CARTO_TABLES.MRLI_TIME_SERIES,
    COVID_FIELDS_ARRAY
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
