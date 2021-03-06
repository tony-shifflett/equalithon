import React from 'react'
import { ScrollView, View, Pressable, Image, Text, StyleSheet } from 'react-native'
import SmallButton from '../components/buttons/SmallButton'
import BusinessIntakeForm from '../components/forms/BusinessIntakeForm'
import BackHeaderGreen from '../components/headers/BackHeaderGreen'


const BusinessIntake = () => {
  return (
    <View style={styles.outerContainer}>
        <BackHeaderGreen title='Business Intake Form'/>
        <View style={styles.container}>
            <Image 
            source={require('../assets/circle-1.png')}
            style={styles.img}
           />
        </View>
        <ScrollView style={styles.form}>
            <BusinessIntakeForm/>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    outerContainer:{
        flex: 1,
    },
    container:{
        paddingTop: 24,
    },
    img: {
        height: 32, 
        width: 326,
        paddingTop: 24,
        alignSelf: 'center',
    }, 
    txt: {
        fontSize: 24,
        textAlign: 'center',
        color: '#7D3F1B',
    },
    form:{
        // height: 526,
        flex: 1, 
    },
})

export default BusinessIntake