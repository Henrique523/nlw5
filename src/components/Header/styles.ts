import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'


import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const HeaderContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin-top: ${getStatusBarHeight()}px;
`

export const HeaderTextContainer = styled.View`
  align-items: flex-start;
  justify-content: center;
`

export const RegularHeaderText = styled.Text`
  font-family: ${fonts.light};
  font-size: 32px;
  text-align: left;
  line-height: 36px;
  color: ${colors.heading};
`

export const BoldHeaderText = styled.Text`
  font-family: ${fonts.semiBold};
  font-size: 32px;
  text-align: left;
  line-height: 36px;
  color: ${colors.heading};
`

export const HeaderImage = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`
