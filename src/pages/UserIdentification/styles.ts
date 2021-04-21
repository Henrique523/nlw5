import styled from 'styled-components/native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

interface TextInputProps {
  focused: boolean
  filled: boolean
}

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`

export const KeyBoardHelper = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`

export const SafeAreaContent = styled.View`
  flex: 1;
  width: 100%;
`

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 54px;
`

export const Emoji = styled.Text`
  font-size: 36px;
  text-align: center;
`

export const FormInputDescription = styled.Text`
  font-family: ${fonts.semiBold};
  font-size: 24px;
  text-align: center;
  color: ${colors.heading};
  line-height: 32px;
  
  max-width: 72%;
  margin-top: 24px;
`

export const UsernameTextInput = styled.TextInput<TextInputProps>`
  width: 100%;
  margin-top: 40px;
  padding: 10px;

  border-bottom-width: 1px;
  border-color: ${props => (props.focused || props.filled) ? colors.green : colors.gray};
  
  font-family: ${fonts.regular};
  font-size: 18px;
  text-align: center;
  color: ${colors.heading};
`
