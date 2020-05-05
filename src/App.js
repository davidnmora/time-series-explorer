import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import ScrollytellingContainer from './ScrollytellingContainer'
import useCartoData, { CARTO_TABLE_NAME, FIELDS } from './useCartoData'
import ArticleHeader from './ArticleHeader'

function App() {
  const dataByRegion = useCartoData(CARTO_TABLE_NAME, FIELDS)

  return (
    <div className="App">
      <ArticleHeader />
      <ScrollytellingContainer dataByRegion={dataByRegion} />
    </div>
  )
}

export default App
