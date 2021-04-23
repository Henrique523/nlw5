import { FlatList } from 'react-native'
import styled from 'styled-components/native'

import { PlantProps } from '../../libs/storage'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const MyPlantsContainer = styled.View`
  flex: 1;

  align-items: center;
  justify-content: space-between;
  padding: 50px 30px 0;
  background-color: ${colors.background};
`

export const NextPlantsContainer = styled.View`
  width: 100%;
`

export const NextPlants = styled.Text`
  font-family: ${fonts.semiBold};
  font-size: 24px;
  line-height: 32px;
  color: ${colors.heading};

  text-align: left;
`

export const PlantsList = styled(FlatList as new () => FlatList<PlantProps>)`
  margin-top: 16px;
  width: 100%;
`
