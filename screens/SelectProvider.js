import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ProviderSelectionForm from '../components/forms/ProviderSelectionForm'
import LocationHeaderWhite from '../components/headers/LocationHeaderWhite'

const SelectProvider = () => {
  return (
    <View>
        <LocationHeaderWhite/>
        <ProviderSelectionForm/>
    </View>
  )
}

export default SelectProvider