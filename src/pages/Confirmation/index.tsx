import React, { useCallback } from 'react'
import { View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import { Button } from '../../components/Button'

import { SafeAreaContainer, SafeAreaContent, Emoji, Title, ConfirmationText } from './styles'

interface RouteParams {
  name: string
}

export const Confirmation: React.FC = () => {
  const { navigate } = useNavigation()

  const { params } = useRoute()

  const { name } = params as RouteParams

  const goToPlantSelect = useCallback(() => {
    navigate('PlantSelect', { name })
  }, [navigate])
  return (
    <SafeAreaContainer>
      <SafeAreaContent>
        <Emoji>😁</Emoji>

        <Title>Prontinho</Title>

        <ConfirmationText>
          Agora vamos começar a cuidar das suas {'\n'}
          plantinhas com muito cuidado.
        </ConfirmationText>

        <View style={{ marginTop: 40 }}>
          <Button text="Começar" onPress={goToPlantSelect} />
        </View>
      </SafeAreaContent>
    </SafeAreaContainer>
  )
}