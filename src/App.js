import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import ScrollytellingContainer from './ScrollytellingContainer'
import useCartoData, { CARTO_TABLES, COVID_FIELDS } from './useCartoData'
import ArticleHeader from './ArticleHeader'

function App() {
  const dataByRegion = useCartoData(
    CARTO_TABLES.MRLI_TIME_SERIES,
    Object.values(COVID_FIELDS)
  )

  return (
    <div className="App">
      <ArticleHeader />
      <ScrollytellingContainer dataByRegion={dataByRegion} />
    </div>
  )
}

export default App
