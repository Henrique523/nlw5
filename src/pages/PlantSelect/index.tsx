import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

import { 
  Container,
  HeaderSubHeaderContainer,
  MediumPlantSelectText,
  RegularPlantSelectText,
  EnvironmentListContainer,
  EnvironmentList,
  PlantsListContainer,
  PlantsList,
  flatContentStyles,
} from './styles'

import { Header } from '../../components/Header'
import { EnvironmentButton } from '../../components/EnvironmentButton'
import { PlantCardPrimary } from '../../components/PlantCardPrimary'
import { Load } from '../../components/Load'

import api from '../../services/api'
import colors from '../../styles/colors'
import { PlantProps } from '../../libs/storage'

interface PlantEnvironments {
  key: string
  title: string
}

export const PlantSelect: React.FC = () => {
  const { navigate } = useNavigation()

  const [plantManagerName, setPlantManagerName] = useState('')
  const [plantEnvironments, setPlantEnvironments] = useState<PlantEnvironments[]>([])
  const [plants, setPlants] = useState<PlantProps[]>([])
  const [environmentSelected, setEnvironmentSelected] = useState('all')
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [loadingMore, setLoadingMore] = useState(false)

  const fetchPlants = useCallback(async () => {
    const response = await api.get<PlantProps[]>(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`)
    if (!response.data) {
      setLoading(true)
    }

    if (page > 1) {
      setPlants(oldValue => [...oldValue, ...response.data])
    } else {
      setPlants([...response.data])
    }
    setLoading(false)
    setLoadingMore(false)
  }, [page, loading, loadingMore, plants])

  const handleFetchMore = useCallback((distance: number) => {
    if (distance < 1) {
      return
    }

    setLoadingMore(true)
    setPage(oldValue => oldValue + 1)
    fetchPlants()
  }, [page])

  useEffect(() => {
    ;(async () => {
      const response = await api.get<PlantEnvironments[]>('plants_environments?_sort=title&_order=asc')
      setPlantEnvironments([{key: 'all', title: 'Todos' }, ...response.data])
    })()
  }, [])

  useEffect(() => {
    fetchPlants()
  }, [])

  useEffect(() => {
    ;(async () => {
      const name = await AsyncStorage.getItem('@plantmanager:user')
      setPlantManagerName(name || '')
    })()
  }, [])

  const changeItemSelected = useCallback((newEnvironmentSelected: string) => {
    setEnvironmentSelected(newEnvironmentSelected)
  }, [])

  const goToPlantSave = useCallback(async (plant: PlantProps) => {
    await AsyncStorage.setItem('@plantmanager:currentPlant', JSON.stringify(plant))
    navigate('PlantSave')
  }, [navigate])

  const plantsFiltered = useMemo(() => {
    if(environmentSelected === 'all') {
      return plants
    }

    return plants.filter(environment => environment.environments.includes(environmentSelected))
  }, [environmentSelected, plants])

  if (loading) {
    return <Load />
  }

  return (
    <Container>
      <HeaderSubHeaderContainer>
        <Header regularText="Olá," boldText={plantManagerName} />

        <MediumPlantSelectText>Em qual ambiente</MediumPlantSelectText>
        <RegularPlantSelectText>você quer colocar sua planta?</RegularPlantSelectText>
      </HeaderSubHeaderContainer>

      <EnvironmentListContainer>
        <EnvironmentList
          keyExtractor={(item) => String(item.key)}
          data={plantEnvironments}
          renderItem={({ item }) => (
            <EnvironmentButton 
              title={item.title}
              active={item.key === environmentSelected}
              onPress={() => changeItemSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={flatContentStyles.contentContainer}
        />
      </EnvironmentListContainer>

      <PlantsListContainer>
          <PlantsList
            keyExtractor={(item) => String(item.id)}
            data={plantsFiltered}
            renderItem={({ item }) => (
              <PlantCardPrimary data={{ name: item.name, photo: item.photo }} onPress={() => goToPlantSave(item)} />
            )}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            onEndReachedThreshold={0.1}
            onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
            ListFooterComponent={
              loadingMore ?
              <ActivityIndicator color={colors.green} /> :
              <></>
            }
          />
      </PlantsListContainer>

    </Container>
  )
}
