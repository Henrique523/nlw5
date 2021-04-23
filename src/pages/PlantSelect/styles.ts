import { FlatList, StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { PlantProps } from '../../libs/storage'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

interface PlantEnvironments {
  key: string
  title: string
}

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`

export const HeaderSubHeaderContainer = styled.View`
  padding: 0 30px;
`

export const MediumPlantSelectText = styled.Text`
  font-family: ${fonts.medium};
  font-size: 17px;
  line-height: 23px;
  color: ${colors.body};
`

export const RegularPlantSelectText = styled.Text`
  font-family: ${fonts.regular};
  font-size: 17px;
  line-height: 23px;
  color: ${colors.body};
`

export const EnvironmentListContainer = styled.View``

export const EnvironmentList = styled(FlatList as new () => FlatList<PlantEnvironments>)``

export const PlantsListContainer = styled.View`
  flex: 1;
  padding: 0 32px;
  justify-content: center;
`

export const PlantsList = styled(FlatList as new () => FlatList<PlantProps>)``

export const flatContentStyles = StyleSheet.create({
  contentContainer: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    paddingLeft: 32,
    marginVertical: 32,
  },
})
