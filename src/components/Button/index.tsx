import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { ButtonContainer, ButtonText } from './styles'

interface ButtonProps extends Omit<TouchableOpacityProps, 'style'> {
  text: string
}

export const Button: React.FC<ButtonProps> = ({ text,  ...rest }) => {
  return (
    <ButtonContainer activeOpacity={0.7} {...rest}>
      <ButtonText>
        {text}
      </ButtonText>
    </ButtonContainer>
  )
}
