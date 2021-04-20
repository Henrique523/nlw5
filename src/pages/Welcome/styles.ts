import { Dimensions } from 'react-native'
import { Feather } from '@expo/vector-icons'
import styled from 'styled-components/native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
`

export const SafeAreaViewContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
`

export const Title = styled.Text`
  font-family: ${fonts.heading};
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  color: ${colors.heading};
  margin-top: 38px;
`

export const Image = styled.Image`
  height: ${Dimensions.get('window').width * 0.7}px;
`

export const Subtitle = styled.Text`
  font-family: ${fonts.text};
  font-size: 17px;
  line-height: 25px;
  text-align: center;
  padding: 0 20px;
  color: ${colors.body};
`

export const NextButton = styled.TouchableOpacity`
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
`

export const NextButtonIcon = styled(Feather)`
  color: ${colors.white};
  font-size: 24px;
`
