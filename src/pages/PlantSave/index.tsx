import React, { useState, useEffect, useCallback } from 'react'
import { Alert, Platform } from 'react-native'
import { SvgFromUri } from 'react-native-svg'
import { useNavigation, useRoute } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import DateTimePicker, { Event } from '@react-native-community/datetimepicker'
import { format, isBefore } from 'date-fns'

import { Remember } from '../../components/Remember'
import { Button } from '../../components/Button'
import { PlantProps, savePlant } from '../../libs/storage'

import { ViewContainer, PlantDescription, PlantTitle, SelectAlarmText, TextButton, TextButtonDescription } from './styles'

export const PlantSave: React.FC = () => {
  const { navigate } = useNavigation()
  const [plant, setPlant] = useState<PlantProps>({} as PlantProps)
  const [selectedDateTime, setSelectedDateTime] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios')

  const handleSave = useCallback(async () => {
    try {
      await savePlant({ ...plant, dateTimeNotification: selectedDateTime })
      navigate('Confirmation', { 
        title: 'Tudo certo',
        subTitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor.',
        buttonTitle: 'Muito obrigado :D',
        icon: 'hug',
        nextScreen: 'MyPlants',
      })
    } catch {
      Alert.alert('Não foi possível salvar. 😢')
    }
  }, [plant])

  const handleChangeTime = useCallback((event: Event, dateTime: Date | undefined) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false)
    }
    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date())
      return Alert.alert('Escolha uma hora no futuro! ⏰')
    }

    if (dateTime) {
      setSelectedDateTime(dateTime)
    }
  }, [showDatePicker, selectedDateTime])

  const changeShowDatePicker = useCallback(() => {
    setShowDatePicker(oldValue => !oldValue)
  }, [showDatePicker])

  const setDatePickerFalse = useCallback(() => {
    setShowDatePicker(false)
  }, [showDatePicker])

  useEffect(() => {
    ;(async () => {
      const plantStoraged = await AsyncStorage.getItem('@plantmanager:currentPlant')
      if(plantStoraged) {
        const plantParsed: PlantProps = JSON.parse(plantStoraged)
        setPlant(plantParsed)
      }
    })()
  }, [])

  return (
    <ViewContainer>
      <SvgFromUri uri={plant.photo} width={150} height={150} />

      <PlantTitle>{plant.name}</PlantTitle>
      <PlantDescription>{plant.about}</PlantDescription>

      <Remember tip={plant.water_tips} />

      <SelectAlarmText>Escolha o melhor horário para ser lembrado.</SelectAlarmText>

      {
        Platform.OS === 'android' && (
          <TextButton activeOpacity={0.7} onPress={changeShowDatePicker}>
            <TextButtonDescription>Mudar Horário: {`${format(selectedDateTime, 'HH:mm')}`} </TextButtonDescription>
          </TextButton>
        )
      }

      {showDatePicker &&
        <DateTimePicker 
          value={selectedDateTime} 
          mode="time" 
          display="spinner" 
          onChange={handleChangeTime}
          onTouchCancel={setDatePickerFalse}
        />
      }

      <Button text="Cadastrar Planta" onPress={handleSave} />
    </ViewContainer>
  )
}
