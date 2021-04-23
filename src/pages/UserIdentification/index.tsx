import React, { useCallback, useState } from 'react'
import { Platform, View, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

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

  const goToConfirmation = useCallback(async () => {
    try {
      await AsyncStorage.setItem('@plantmanager:user', name)
      navigate('Confirmation', { 
        title: 'Prontinho',
        subTitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
        buttonTitle: 'Começar',
        icon: 'smile',
        nextScreen: 'PlantSelect',
      })
    } catch {
      Alert.alert('Ocorreu um erro ao salvar seu nome. 😢')
    }
  }, [navigate, name])

  return (
    <SafeAreaContainer>
      <KeyBoardHelper behavior={Platform.OS === 'ios'? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              <Button text="Confirmar" enabled={!!name} onPress={goToConfirmation} />
              </View>
              
            </Form>
          </SafeAreaContent>
        </TouchableWithoutFeedback>
      </KeyBoardHelper>
    </SafeAreaContainer>
  )
}
