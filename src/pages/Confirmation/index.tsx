import React from 'react'
import { View } from 'react-native'

import { Button } from '../../components/Button'

import { SafeAreaContainer, SafeAreaContent, Emoji, Title, ConfirmationText } from './styles'

export const Confirmation: React.FC = () => {
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
          <Button text="Começar" />
        </View>
      </SafeAreaContent>
    </SafeAreaContainer>
  )
}