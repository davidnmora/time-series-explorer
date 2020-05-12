import React from 'react'
import 'antd/dist/antd.css'
import { TimeSeriesScrollytelling } from './TimeSeriesScrollytelling'
import useCartoData, { CARTO_TABLES, COVID_FIELDS } from './useCartoData'
import ArticleHeader from './ArticleHeader'
import { TextAreaDemo, IntroText } from './TextArea'
import { MapScrollytelling } from './MapScrollytelling'

function App() {
  const dataByRegion = useCartoData(
    CARTO_TABLES.MRLI_TIME_SERIES,
    Object.values(COVID_FIELDS)
  )

  return (
    <div className="App">
      <ArticleHeader />
      <IntroText paddingTop={'0'} />
      <TimeSeriesScrollytelling dataByRegion={dataByRegion} />
      <TextAreaDemo />
      <MapScrollytelling />
      <TextAreaDemo />
    </div>
  )
}

export default App
