import React from 'react'
import { View, StyleSheet } from 'react-native'
import SmallButton from '../components/buttons/SmallButton'
import BackHeaderGreen from '../components/headers/BackHeaderGreen'
import SearchBox from '../components/SearchBox'

const BrowseProviders = () => {
  return (
    <View>
        <BackHeaderGreen title={'Browse Providers'}/>
        <View style={styles.search}>
            <SearchBox placeholderTxt={'Search by keywords'}/>
        </View>
        <View style={styles.buttonContainer}>
            <SmallButton buttonText={'Provider Type'}/>
            <SmallButton buttonText={'Location'}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    search: {
        marginTop: 20,
    },
    buttonContainer: {
        flexDirection: 'row', 
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
    },
})
export default BrowseProviders