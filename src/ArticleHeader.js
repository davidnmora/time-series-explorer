import React from 'react'
import { HeadlineSection, Headline, Subtitle } from './styles'
import mastercardLogo from './mastercard-logo.png'

const ArticleHeader = () => (
  <>
    <HeadlineSection>
      <Headline>COVID-19 & rural Michigan consumer spending</Headline>
      <Subtitle>
        How COVID is shifting the landscape of rural spending in surprising
        ways, and what it means for long-term resilience.
      </Subtitle>
      by{' '}
      <a href="https://ruralinnovation.us/">The Center on Rural Innovation</a>{' '}
      <div style={{ marginTop: 24 }}>
        <div style={{ marginBottom: 16 }}>In partnership with</div>
        <img
          src={mastercardLogo}
          alt="MasterCard Center for Inclusive Growth"
          style={{ width: 240 }}
        />
      </div>
    </HeadlineSection>
  </>
)

export default ArticleHeader
