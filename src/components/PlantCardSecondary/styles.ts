import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const PlantCardSecondaryRectButton = styled(RectButton)`
  width: 100%;
  padding: 25px 10px;
  border-radius: 20px;
  
  flex-direction: row;
  align-items: center;
  background-color: ${colors.shape};
  margin: 5px 0;
`

export const PlantCardSecondaryImage = styled(SvgFromUri)``

export const PlantCardSecondaryTitle = styled.Text`
  flex: 1;
  font-family: ${fonts.semiBold};
  font-size: 17px;
  line-height: 23px;
  color: ${colors.heading};

  margin-left: 10px;
`

export const PlantCardSecondaryHourContainer = styled.View`
  align-items: flex-end;
`

export const HourTinyText = styled.Text`
  font-family: ${fonts.regular};
  font-size: 13px;
  line-height: 20px;
  text-align: right;
  color: ${colors.body};
`

export const HourBoldText = styled.Text`
  font-family: ${fonts.medium};
  font-size: 13px;
  line-height: 20px;
  text-align: right;
  color: ${colors.body};

  margin-top: 5px;
`

export const AnimatedRectButtonView = styled.View`
  width: 100px;
  height: 85px;
  background-color: ${colors.red};
  margin-top: 15px;
  padding-left: 15px;
  border-radius: 20px;

  justify-content: center;
  align-items: center;

  position: relative;
  right: 20px;
`

export const DeleteRectButton = styled(RectButton)`

`
