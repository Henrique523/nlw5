import { Dimensions } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import styled from 'styled-components/native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const ScrollViewContainer = styled.ScrollView`
  flex: 1;
`

export const ViewContainer = styled.View`
  background-color: ${colors.shape};
  padding-top: ${getStatusBarHeight()}px;  
  flex: 1;
  align-items: center;
  justify-content: space-around;
`

export const PlantTitle = styled.Text`
  font-family: ${fonts.semiBold};
  font-size: 24px;
  line-height: 32px;
  color: ${colors.heading};
  text-align: center;
`

export const PlantDescription = styled.Text`
  font-family: ${fonts.regular};
  font-size: 17px;
  line-height: 25px;
  color: ${colors.body};
  text-align: center;
  max-width: ${Dimensions.get('window').width - 64}px;
`

export const SelectAlarmText = styled.Text`
  font-family: ${fonts.regular};
  font-size: 13px;
  line-height: 23px;
  color: ${colors.body};
  text-align: center;
`

export const TextButton = styled.TouchableOpacity`
  padding: 16px;
  border-radius: 4px;
`

export const TextButtonDescription = styled.Text`
  font-family: ${fonts.medium};
  font-size: 17px;
  color: ${colors.green};
  line-height: 23px;
`
