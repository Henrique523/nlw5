import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import { 
  PlantCardSecondaryRectButton,
  PlantCardSecondaryImage,
  PlantCardSecondaryTitle,
  PlantCardSecondaryHourContainer,
  HourTinyText,
  HourBoldText,
} from './styles'

interface PlantCardSecondary extends RectButtonProps {
  data: {
    name: string
    photo: string
    hour: string
  }
}

export const PlantCardSecondary: React.FC<PlantCardSecondary> = ({ data, ...rest}) => {
  return (
    <PlantCardSecondaryRectButton {...rest}>
      <PlantCardSecondaryImage uri={data.photo} width={50} height={50} />

      <PlantCardSecondaryTitle>{data.name}</PlantCardSecondaryTitle>

      <PlantCardSecondaryHourContainer>
        <HourTinyText>Regar às</HourTinyText>
        <HourBoldText>{data.hour}</HourBoldText>
      </PlantCardSecondaryHourContainer>
    </PlantCardSecondaryRectButton>
  )
}