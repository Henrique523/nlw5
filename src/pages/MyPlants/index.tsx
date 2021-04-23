import React, { useState, useEffect } from 'react'
import { format, formatDistance } from 'date-fns'
import { pt } from 'date-fns/locale'

import { Header } from '../../components/Header'
import { Remember } from '../../components/Remember'
import { loadPlants, PlantProps } from '../../libs/storage'

import { MyPlantsContainer, NextPlantsContainer, NextPlants, PlantsList } from './styles'
import { PlantCardSecondary } from '../../components/PlantCardSecondary'

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

  return (
    <MyPlantsContainer>
      <Header boldText="Plantinhas" regularText="Minhas" />

      <Remember tip={nextWatered} />

      <NextPlantsContainer>
        <NextPlants>Próximas Regadas</NextPlants>
      </NextPlantsContainer>

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
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: 1 }}
      />
    </MyPlantsContainer>
  )
}
