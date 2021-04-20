import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'

import { SafeAreaContainer, SafeAreaViewContainer, Title, Image, Subtitle, NextButton, NextButtonIcon } from './styles'

import wateringImg from '../../assets/watering.png'

export const Welcome: React.FC = () => {
  const { navigate } = useNavigation()

  const goToUserIdentification = useCallback(() => {
    navigate('UserIdentification')
  }, [navigate])

  return (
    <SafeAreaContainer>
      <SafeAreaViewContainer>
        <Title>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Title>

        <Image source={wateringImg} resizeMode="contain" />

        <Subtitle>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
        </Subtitle>

        <NextButton activeOpacity={0.7} onPress={goToUserIdentification}>
          <NextButtonIcon name="chevron-right" />
        </NextButton>
      </SafeAreaViewContainer>
    </SafeAreaContainer>
  )
}
