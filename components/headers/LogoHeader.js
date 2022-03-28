import React from 'react';
import { View, StyleSheet } from 'react-native'; 
import OptionsBar from '../OptionsBar';
import Logo from '../Logo';

const LogoHeader = () =>{
  return (
    <View style={styles.header}>
      <Logo/>
      <OptionsBar/>
    </View>
  )
}


const styles = StyleSheet.create({
  header: {
    height: 300, 
    backgroundColor: 'white',
    paddingTop: 50,
  },
})
export default LogoHeader