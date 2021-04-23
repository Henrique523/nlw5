import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import { ButtonContainer, ButtonText } from './styles'

interface ButtonProps extends RectButtonProps {
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
