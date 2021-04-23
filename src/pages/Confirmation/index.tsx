import React, { useCallback } from 'react'
import { View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import { Button } from '../../components/Button'

import { SafeAreaContainer, SafeAreaContent, Emoji, Title, ConfirmationText } from './styles'

interface Params {
  title: string
  subTitle: string
  buttonTitle: string
  icon: 'smile' | 'hug'
  nextScreen: string
}

const emojis = {
  hug: '🤗',
  smile: '🙂',
}

export const Confirmation: React.FC = () => {
  const { navigate } = useNavigation()
  const { params } = useRoute()

  const { title, subTitle, buttonTitle, icon, nextScreen } = params as Params

  const goToPlantSelect = useCallback(() => {
    navigate(nextScreen)
  }, [navigate, nextScreen])
  return (
    <SafeAreaContainer>
      <SafeAreaContent>
        <Emoji>{emojis[icon]}</Emoji>

        <Title>{title}</Title>

        <ConfirmationText>{subTitle}</ConfirmationText>

        <View style={{ marginTop: 40 }}>
          <Button text={buttonTitle} onPress={goToPlantSelect} />
        </View>
      </SafeAreaContent>
    </SafeAreaContainer>
  )
}