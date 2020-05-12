import { Paragraph, TextSection } from './styles'
import React from 'react'

export const IntroText = ({ paddingTop }) => (
  <TextSection paddingTop={paddingTop}>
    <Paragraph>
      We all know COVID-19 has radically shifted consumer spending habits.
    </Paragraph>
    <Paragraph>
      But how is this affecting rural areas? And what does it reveal about the
      strengths and the needs of these areas?
    </Paragraph>
    <Paragraph>
      With support and data from Mastercard, we're able to take a near real-time
      look at these questions play out across Michigan.
    </Paragraph>
    <Paragraph>
      To begin, let's take a big picture look at the overall consumer spending
      index of every county in Michigan which experienced a significant change
      in 2020.
    </Paragraph>
  </TextSection>
)

export const TextAreaDemo = () => (
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
