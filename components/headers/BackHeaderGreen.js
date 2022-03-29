import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
 

const BackHeaderGreen = ({title}) => {
  return (
    <View style={styles.header}>
        <View style={styles.container}>
            <Icon style={styles.icon} name='arrow-left'/>
            <Text style={styles.text}>{title}</Text>
        </View>
    </View>
  )
}

BackHeaderGreen.defaultProps = {
    title: 'Okionu'
}

const styles = StyleSheet.create({
    header: {
        height: 120,
        backgroundColor: '#BFD8C6',
        alignContent:'center',
        justifyContent: 'center',
    },
    container:{
        flexDirection: 'row', 
        width: "100%",
        alignContent: 'center', 
        alignSelf: 'center', 
        paddingTop: 60,

    },
    text: {
        color: 'black',
        fontSize: 24, 
        paddingLeft: 20,
    },
    icon: {
        fontSize: 24,
        paddingRight: 20,
        paddingLeft: 20,
        color: '#7D3F1B'
    }
})

export default BackHeaderGreen