import AsyncStorage from '@react-native-async-storage/async-storage'
import { format } from 'date-fns'

export interface PlantProps {
  id: number
  name: string
  about: string
  water_tips: string
  photo: string
  environments: string[]
  frequency: {
    times: number
    repeat_every: string
  },
  dateTimeNotification: Date
}

interface StoragePlantProps {
  [id: string]: {
    data: PlantProps
  }
}

export async function savePlant(plant: PlantProps): Promise<void> {
  try {
    const data = await AsyncStorage.getItem('@plantmanager:plants')
    const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {}

    const newPlant = {
      [plant.id]: {
        data: plant
      }
    }

    await AsyncStorage.setItem(
      '@plantmanager:plants',
      JSON.stringify({ ...newPlant, ...oldPlants })
    )
  } catch (error) {
    throw new Error(error)
  }
}

export async function loadPlants(): Promise<PlantProps[]> {
  try {
    const data = await AsyncStorage.getItem('@plantmanager:plants')
    const plants: StoragePlantProps = data ? JSON.parse(data): {}

    const plantsSorted: PlantProps[] = Object.values(plants)
      .map(plant => ({ ...plant.data }))
      .sort((a, b) => 
        Math.floor(
          new Date(a.dateTimeNotification).getTime() / 1000 -
          Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
        ))

    return plantsSorted
  } catch (error) {
    throw new Error(error)
  }
}