import React from 'react'
import 'antd/dist/antd.css'
import { TimeSeriesScrollytelling } from './TimeSeriesScrollytelling'
import useCartoData, { CARTO_TABLES, COVID_FIELDS } from './useCartoData'
import ArticleHeader from './ArticleHeader'
import { TextAreaDemo } from './TextArea'
import { Map } from './Map'

function App() {
  const dataByRegion = useCartoData(
    CARTO_TABLES.MRLI_TIME_SERIES,
    Object.values(COVID_FIELDS)
  )

  return (
    <div className="App">
      <ArticleHeader />

      <Map />

      <TextAreaDemo />

      <TimeSeriesScrollytelling dataByRegion={dataByRegion} />

      <TextAreaDemo />
    </div>
  )
}

export default App
