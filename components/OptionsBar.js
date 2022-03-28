import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native'

const OptionsBar = (props) =>{
  return (
    <View style={styles.options}>
        <Pressable onPress={()=>{props.formSelector('login')}}>
          <Text style={styles.optionsText}>Login</Text>
        </Pressable>
        <Pressable onPress={()=>{props.formSelector('signup')}}>
          <Text style={styles.optionsText}>Sign-Up</Text>
        </Pressable>
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