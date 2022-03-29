import React from 'react'
import { View, Pressable, Image, Text, StyleSheet } from 'react-native'
import Footer from '../components/Footer'
import XHeaderGreen from '../components/headers/XHeaderGreen'

const SelectService = () => {
  return (
    <View>
        <XHeaderGreen title="Who Are You?"/>
        <View>
            <Pressable style={styles.container}>
                <Text style={styles.txt}>I Need Postpartum Services</Text>
                <Image
                source={require('../assets/i-need-services.jpg')}
                style={styles.img}/>
            </Pressable>
            <Pressable style={styles.container}>
                <Text style={styles.txt}>I Provide Postpartum Services</Text>
                <Image
                source={require('../assets/provider-services.jpg')}
                style={styles.img}/>
            </Pressable>
            <Footer/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    img: {
        height: 188, 
        width: 281,
        alignSelf: 'center',
        borderRadius: 100/8,
    }, 
    txt: {
        fontSize: 24,
        textAlign: 'center',
        color: '#7D3F1B',
    }, 
    container: {
        paddingTop: 75,
    }
})

export default SelectService