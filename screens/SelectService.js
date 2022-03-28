import React from 'react'
import { View, Pressable, Image, Text, StyleSheet } from 'react-native'
import XHeaderGreen from '../components/headers/XHeaderGreen'

const SelectService = () => {
  return (
    <View>
        <XHeaderGreen/>
        <View>
            <Pressable>
                <Text style={styles.txt}>I Need Postpartum Services</Text>
                <Image
                source={require('../assets/i-need-services.jpg')}
                style={styles.img}/>
            </Pressable>
            <Pressable>
                <Text style={styles.txt}>I Provide Postpartum Services</Text>
                <Image
                source={require('../assets/provider-services.jpg')}
                style={styles.img}/>
            </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    img: {
        height: 188, 
        width: 281,
        alignSelf: 'center',
        borderRadius: 100/4,
    }, 
    txt: {
        fontSize: 24,
        textAlign: 'center',
        color: '#7D3F1B',
    }
})

export default SelectService