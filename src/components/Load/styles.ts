import styled from 'styled-components/native'
import LottieView from 'lottie-react-native'

export const LoadContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const LottieAnimated = styled(LottieView)`
  background-color: transparent;
  width: 200px;
  height: 200px;
`