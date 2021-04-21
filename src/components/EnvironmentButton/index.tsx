import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import { EnvironmentButtonContainer, EnvironmentButtonView, EnvironmentButtonText } from './styles'

interface EnvironmentButtonProps extends RectButtonProps {
  title: string
  active?: boolean
}

export const EnvironmentButton: React.FC<EnvironmentButtonProps> = ({ title, active = false, ...rest }) => {
  return (
    <EnvironmentButtonView>
      <EnvironmentButtonContainer active={active} {...rest}>
        <EnvironmentButtonText active={active}>{title}</EnvironmentButtonText>
      </EnvironmentButtonContainer>
    </EnvironmentButtonView>
  )
}
