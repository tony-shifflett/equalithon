import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const Logo = () => {
  return (
    <View>
        <Image 
        source={require('../assets/OKIONUapplogo.png')}
        style={styles.img}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    img: {
        alignSelf: "center",
        height: 250,
        width: 250,
        borderRadius: 250/2
    },
})

export default Logo

