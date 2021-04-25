import React, { useState, useEffect, useCallback } from 'react'
import { Alert } from 'react-native'
import { formatDistance } from 'date-fns'
import { pt } from 'date-fns/locale'

import { Header } from '../../components/Header'
import { Remember } from '../../components/Remember'
import { deletePlant, loadPlants, PlantProps } from '../../libs/storage'

import { PlantCardSecondary } from '../../components/PlantCardSecondary'
import { Load } from '../../components/Load'

import { MyPlantsContainer, NextPlantsContainer, NextPlants, PlantsList } from './styles'

export const MyPlants: React.FC = () => {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([])
  const [loading, setLoading] = useState(true)
  const [nextWatered, setNextWatered] = useState('')

  useEffect(() => {
    ;(async () => {
      const plantsStoraged = await loadPlants()

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      )

      setNextWatered(`Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime}`)
      setMyPlants(plantsStoraged)
      setLoading(false)
    })()
  }, [nextWatered])

  const handleRemove = useCallback((plant: PlantProps) => {
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
      {
        text: 'Não 🙏🏽',
        style: 'cancel',
      },
      {
        text: 'Sim 😅',
        onPress: async () => {
          try {
            await deletePlant(String(plant.id))

            setMyPlants(oldData => oldData.filter(item => item.id !== plant.id))
          } catch (error) {
            Alert.alert('Não foi possível remover! 😢')
          }
        }
      }
    ])
  }, [])

  if (loading) {
    return <Load />
  }
  return (
    <MyPlantsContainer>
      <Header boldText="Plantinhas" regularText="Minhas" />

      <Remember tip={nextWatered} />

      <NextPlantsContainer>
        <NextPlants>Próximas Regadas</NextPlants>

        <PlantsList
          data={myPlants}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary 
              data={{ 
                name: item.name,
                photo: item.photo,
                hour: String(item.dateTimeNotification).split('T')[1].split('.')[0]
              }}
              handleRemove={() => handleRemove(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </NextPlantsContainer>

    </MyPlantsContainer>
  )
}
