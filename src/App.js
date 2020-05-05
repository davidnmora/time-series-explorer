import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import ScrollytellingContainer from './ScrollytellingContainer'
import useCartoData, { CARTO_TABLE_NAME, FIELDS } from './useCartoData'
import ArticleHeader from './ArticleHeader'

function App() {
  const data = useCartoData(CARTO_TABLE_NAME, FIELDS)

  return (
    <div className="App">
      <ArticleHeader />
      <ScrollytellingContainer regionData={data} />
    </div>
  )
}

export default App
