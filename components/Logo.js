import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const Logo = () => {
  return (
    <View>
        <Image 
        source={require('../assets/OKIONUapplogo.png')}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    img: {
        alignSelf: "center",
        height: 250,
        width: 250,
        borderRadius: 100/2,
    },
})

export default Logo

