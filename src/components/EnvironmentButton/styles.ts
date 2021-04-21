import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

import fonts from '../../styles/fonts'
import colors from '../../styles/colors'

interface EnvironmentButtonProps {
  active: boolean
}

export const EnvironmentButtonContainer = styled(RectButton)<EnvironmentButtonProps>`
  background-color: ${props => props.active ? colors.green_light : colors.shape};
  border-radius: 12px;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const EnvironmentButtonView = styled.View`
  height: 40px;
  width: 76px;
  border-radius: 12px;
  margin-right: 5px;
`

export const EnvironmentButtonText = styled.Text<EnvironmentButtonProps>`
  font-family: ${props => props.active ? fonts.semiBold : fonts.regular};
  font-size: 13px;
  line-height: 23px;
  color: ${props => props.active ? colors.green_dark : colors.heading};
`
