import React from 'react'
import { View } from 'react-native'
import SearchBox from '../components/SearchBox'
import BackHeaderGreen from '../components/headers/BackHeaderGreen'
import SmallButton from '../components/buttons/SmallButton'

const LocationPage = () => {
  return (
    <View>
        <BackHeaderGreen title='What is your location'/>
        <SearchBox/>
        <View>
            <SmallButton buttonText={'Continue'}/>
        </View>
    </View>
  )
}

export default LocationPage