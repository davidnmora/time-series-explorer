import React from 'react'
import 'antd/dist/antd.css'
import ScrollytellingContainer from './ScrollytellingContainer'
import useCartoData, { CARTO_TABLES, COVID_FIELDS } from './useCartoData'
import ArticleHeader from './ArticleHeader'
import { TextSection, Paragraph } from './styles'

const TextAreaDemo = () => (
  <TextSection>
    <Paragraph>
      In publishing and graphic design, Lorem ipsum is a placeholder text
      commonly used to demonstrate the visual form of a document or a typeface
      without relying on meaningful content. In publishing and graphic design,
      Lorem ipsum is a placeholder text commonly used to demonstrate the visual
      form of a document or a typeface without relying on meaningful content.
    </Paragraph>
    <Paragraph>
      In publishing and graphic design, Lorem ipsum is a placeholder text
      commonly used to demonstrate the visual form of a document or a typeface
      without relying on meaningful content. In publishing and graphic design,
      Lorem ipsum is a placeholder text commonly used to demonstrate the visual
      form of a document or a typeface without relying on meaningful content. In
      publishing and graphic design, Lorem ipsum is a placeholder text commonly
      used to demonstrate the visual form of a document or a typeface without
      relying on meaningful content.
    </Paragraph>
    <Paragraph>
      In publishing and graphic design, Lorem ipsum is a placeholder text
      commonly used to demonstrate the visual form of a document or a typeface
      without relying on meaningful content.
    </Paragraph>
  </TextSection>
)

function App() {
  const dataByRegion = useCartoData(
    CARTO_TABLES.MRLI_TIME_SERIES,
    Object.values(COVID_FIELDS)
  )

  return (
    <div className="App">
      <ArticleHeader />

      <TextAreaDemo />

      <ScrollytellingContainer dataByRegion={dataByRegion} />

      <TextAreaDemo />
    </div>
  )
}

export default App
