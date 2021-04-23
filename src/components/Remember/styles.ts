import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const RememberContainer = styled.View`
  height: 88px;
  width: ${Dimensions.get('window').width - 64}px;
  background-color: ${colors.blue_lighten};

  border-radius: 20px;
  padding-left: 16px;
  margin-top: 32px;

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const RememberWaterIcon = styled.Image``

export const RememberWaterDescription = styled.Text`
  font-family: ${fonts.regular};
  font-size: 15px;
  line-height: 23px;
  text-align: left;
  color: #3D7199;

  max-width: 70%;
  margin-left: 24px;
`

