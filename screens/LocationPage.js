import React from 'react'
import { View, StyleSheet } from 'react-native'
import SearchBox from '../components/SearchBox'
import BackHeaderGreen from '../components/headers/BackHeaderGreen'
import SmallButton from '../components/buttons/SmallButton'

const LocationPage = () => {
  return (
    <View>
        <BackHeaderGreen title='What is your location'/>
        <View style={styles.search}>
            <SearchBox placeholderTxt={'Enter Street Address'}/>
        </View>
        <View>
            <SmallButton buttonText={'Continue'}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    search:{
        marginTop: 50,
        marginBottom: 50,
    },
})

export default LocationPage