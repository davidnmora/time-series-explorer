import React from 'react'
import { HeadlineSection, Headline, Subtitle } from '../general-ui/styles'

const ArticleHeader = () => (
  <>
    <HeadlineSection>
      <Headline>COVID-19 & rural Michigan consumer spending</Headline>
      <Subtitle>
        How COVID is shifting the landscape of rural spending in surprising
        ways, and what it means for long-term resilience.
      </Subtitle>
      Visual design, dataviz, story and code by David Mora for{' '}
      <a href="https://ruralinnovation.us/">The Center on Rural Innovation</a>{' '}
      <div style={{ marginTop: 12, fontSize: 8 }}>
        Note: actual data has been replaced with comparable placeholders
      </div>
    </HeadlineSection>
  </>
)

export default ArticleHeader
