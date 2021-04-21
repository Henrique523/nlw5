import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import { PlantCardPrimaryRectButton, PlantCardPrimaryImage, PlantCardPrimaryText } from './styles'

interface PlantCardPrimary extends RectButtonProps {
  data: {
    name: string
    photo: string
  }
}

export const PlantCardPrimary: React.FC<PlantCardPrimary> = ({ data, ...rest}) => {
  return (
    <PlantCardPrimaryRectButton {...rest}>
      <PlantCardPrimaryImage uri={data.photo} width={70} height={70} />
      <PlantCardPrimaryText>{data.name}</PlantCardPrimaryText>
    </PlantCardPrimaryRectButton>
  )
}