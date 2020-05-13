import React from 'react'
import { TextSection } from './styles'
import mastercardLogo from './mastercard-logo.png'
import coriLogo from './cori-logo-black.png'

export const Footer = () => (
  <TextSection style={{ height: 160 }}>
    <img
      src={mastercardLogo}
      alt="MasterCard Center for Inclusive Growth"
      style={{ width: 240, marginRight: 72 }}
    />
    <img
      src={coriLogo}
      alt="Center on Rural Innovation"
      style={{ width: 180 }}
    />
  </TextSection>
)
