import React, { useCallback, useState } from 'react'
import { Platform, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { 
  SafeAreaContainer,
  SafeAreaContent,
  Emoji,
  Form,
  FormInputDescription,
  UsernameTextInput,
  KeyBoardHelper,
} from './styles'

import { Button } from '../../components/Button'
import colors from '../../styles/colors'

export const UserIdentification: React.FC = () => {
  const { navigate } = useNavigation()

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState('')

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
    setIsFilled(!!name)
  }, [isFocused, isFilled, name])
  
  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [isFocused])

  const handleInputChange = useCallback((value: string) => {
    setName(value)
  }, [])

  const goToConfirmation = useCallback(() => {
    navigate('Confirmation', { name })
  }, [navigate])

  return (
    <SafeAreaContainer>
      <KeyBoardHelper behavior={Platform.OS === 'ios'? 'padding' : 'height'}>
        <SafeAreaContent>
          <Form>
            <Emoji>
              {isFilled ? '😆' : '😀'}
            </Emoji>

            <FormInputDescription>
              Como podemos chamar você?
            </FormInputDescription>

            <UsernameTextInput 
              placeholder="Digite um nome" 
              placeholderTextColor={isFocused ? colors.green : "#ADB3AF"}
              focused={isFocused}
              filled={isFilled}
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
            />

            <View style={{ marginTop: 40 }}>
            <Button text="Confirmar" disabled={!name} onPress={goToConfirmation} />
            </View>
            
          </Form>
        </SafeAreaContent>
      </KeyBoardHelper>
    </SafeAreaContainer>
  )
}
