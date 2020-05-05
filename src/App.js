import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import ScrollytellingContainer from './ScrollytellingContainer'
import useCartoData, { CARTO_TABLE_NAME, FIELDS } from './useCartoData'

function App() {
  const data = useCartoData(CARTO_TABLE_NAME, FIELDS)

  return (
    <div className="App">
      <ScrollytellingContainer regionData={data} />
    </div>
  )
}

export default App
