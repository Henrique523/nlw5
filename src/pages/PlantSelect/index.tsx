import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { ActivityIndicator } from 'react-native'

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

interface PlantEnvironments {
  key: string
  title: string
}

interface Plants {
  id: number
  name: string
  about: string
  water_tips: string
  photo: string
  environments: string[]
  frequency: {
    times: number
    repeat_every: string
  }
}

export const PlantSelect: React.FC = () => {
  const [plantEnvironments, setPlantEnvironments] = useState<PlantEnvironments[]>([])
  const [plants, setPlants] = useState<Plants[]>([])
  const [environmentSelected, setEnvironmentSelected] = useState('all')
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [loadingMore, setLoadingMore] = useState(false)

  const fetchPlants = useCallback(async () => {
    const response = await api.get<Plants[]>(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`)
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

  const changeItemSelected = useCallback((newEnvironmentSelected: string) => {
    setEnvironmentSelected(newEnvironmentSelected)
  }, [])

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
        <Header boldText="Guilherme" regularText="Olá," />

        <MediumPlantSelectText>Em qual ambiente</MediumPlantSelectText>
        <RegularPlantSelectText>você quer colocar sua planta?</RegularPlantSelectText>
      </HeaderSubHeaderContainer>

      <EnvironmentListContainer>
        <EnvironmentList
          keyExtractor={(item) => item.key}
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
            data={plantsFiltered}
            renderItem={({ item }) => (
              <PlantCardPrimary data={{ name: item.name, photo: item.photo }} />
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
