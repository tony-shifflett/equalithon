import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const OptionsBar = () =>{
  return (
    <View style={styles.options}>
        <Text style={styles.optionsText}>Login</Text>
        <Text style={styles.optionsText}>Sign-Up</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  options: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      padding: 40,
  },
  optionsText: {
      fontSize: 20,
  },
})
export default OptionsBar