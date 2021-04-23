import React from 'react'

import { RememberContainer, RememberWaterIcon, RememberWaterDescription, } from './styles'

import waterdropImg from '../../assets/waterdrop.png'

interface RememberProps {
  tip: string
}

export const Remember: React.FC<RememberProps> = ({ tip }) => {
  return (
    <RememberContainer>
      <RememberWaterIcon source={waterdropImg} />

      <RememberWaterDescription>{tip}</RememberWaterDescription>
    </RememberContainer>
  )
}
