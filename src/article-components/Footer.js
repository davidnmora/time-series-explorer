import React from 'react'
import { TextSection } from '../general-ui/styles'

import coriLogo from '../images/cori-logo-black.png'

export const Footer = () => (
  <TextSection style={{ height: 160 }}>
    <img
      src={coriLogo}
      alt="Center on Rural Innovation"
      style={{ width: 180, padding: 8 }}
    />
  </TextSection>
)
