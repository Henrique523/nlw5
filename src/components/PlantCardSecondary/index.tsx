import { Feather } from '@expo/vector-icons'
import React from 'react'
import { Animated } from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import colors from '../../styles/colors'

import { 
  PlantCardSecondaryRectButton,
  PlantCardSecondaryImage,
  PlantCardSecondaryTitle,
  PlantCardSecondaryHourContainer,
  HourTinyText,
  HourBoldText,
  AnimatedRectButtonView,
  DeleteRectButton,
} from './styles'

interface PlantCardSecondary extends RectButtonProps {
  data: {
    name: string
    photo: string
    hour: string
  }
  handleRemove: () => void
}

export const PlantCardSecondary: React.FC<PlantCardSecondary> = ({ data, handleRemove, ...rest}) => {
  return (
    <Swipeable overshootRight={false} renderRightActions={() => (
      <Animated.View>
        <AnimatedRectButtonView>
          <DeleteRectButton onPress={handleRemove}>
            <Feather name="trash" size={32} color={colors.white} />
          </DeleteRectButton>
        </AnimatedRectButtonView>
      </Animated.View>
    )}>
      <PlantCardSecondaryRectButton {...rest}>
        <PlantCardSecondaryImage uri={data.photo} width={50} height={50} />

        <PlantCardSecondaryTitle>{data.name}</PlantCardSecondaryTitle>

        <PlantCardSecondaryHourContainer>
          <HourTinyText>Regar às</HourTinyText>
          <HourBoldText>{data.hour}</HourBoldText>
        </PlantCardSecondaryHourContainer>
      </PlantCardSecondaryRectButton>
    </Swipeable>
  )
}