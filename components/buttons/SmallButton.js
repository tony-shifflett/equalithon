import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'

const SmallButton = ({buttonText}) => {
  return (
   <Pressable style={styles.btn}>
       <Text style={styles.btnTxt}>{buttonText}</Text>
   </Pressable>
  )
}

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row', 
        backgroundColor:"#a6381fff",
        borderRadius: 100/2,
        alignSelf: 'center',
        justifyContent: 'center',
        width: 129,
        height: 48,
    },
    btnTxt: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'white',
    },
})

SmallButton.defaultProps = {
    buttonText: 'Press Me',
}

export default SmallButton