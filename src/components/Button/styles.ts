import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${colors.green};
  height: 56px;
  width: ${Dimensions.get('window').width - 144}px;
  border-radius: 16px;

  justify-content: center;
  align-items: center;
`

export const ButtonText = styled.Text`
  font-family: ${fonts.medium};
  font-size: 17px;
  color: ${colors.white};
  line-height: 23px;
`
