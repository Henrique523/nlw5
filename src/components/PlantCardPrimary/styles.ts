import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const PlantCardPrimaryRectButton = styled(RectButton)`
  flex: 1;
  max-width: 45%;
  border-radius: 20px;
  background-color: ${colors.shape};
  padding: 10px 0;
  margin: 10px;

  align-items: center;
  justify-content: space-between;
`

export const PlantCardPrimaryImage = styled(SvgFromUri)`
  margin-bottom: 16px;
`

export const PlantCardPrimaryText = styled.Text`
  font-family: ${fonts.semiBold};
  font-size: 13px;
  line-height: 23px;
  color: ${colors.heading};
`
