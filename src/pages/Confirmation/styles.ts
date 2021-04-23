import styled from 'styled-components/native'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
`

export const SafeAreaContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Emoji = styled.Text`
  font-size: 96px;
`

export const Title = styled.Text`
  font-family: ${fonts.semiBold};
  font-size: 24px;
  text-align: center;
  line-height: 30px;
  color: ${colors.heading};

  margin-top: 64px;
`

export const ConfirmationText = styled.Text`
  font-family: ${fonts.regular};
  font-size: 17px;
  text-align: center;
  line-height: 25px;
  color: ${colors.body};
  max-width: 80%;

  margin-top: 16px;
`
