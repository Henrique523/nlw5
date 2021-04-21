import React from 'react'

import { LoadContainer, LottieAnimated } from './styles'

import loadAnimation from '../../assets/plant-recolor.json'

export const Load: React.FC = () => {
  return (
    <LoadContainer>
      <LottieAnimated source={loadAnimation} autoPlay loop />
    </LoadContainer>
  )
}
