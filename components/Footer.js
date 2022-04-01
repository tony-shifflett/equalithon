import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const Footer = () => {
  return (
    <View style={styles.footer}>
        <View>
            <Icon name='home' style={styles.icon}/>
            <Text style={styles.txt}>Home</Text>
        </View>
        <View>
            <Icon name='search' style={styles.icon}/>
            <Text style={styles.txt}>Community</Text>
        </View>
        <View>
            {/* user-o icon is a placeholder until I can find the icon used in the wireframes */}
            <Icon name='user-o' style={styles.icon}/>
            <Text style={styles.txt}>Profile</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    footer: {
        height: 80,
        backgroundColor: '#BFD8C6',
        flexDirection: 'row',
        justifyContent: "space-evenly", 
        alignItems: 'center',
        // marginTop: 60,
        position: 'absolute', 
        flex: 0.1,
        left: 0, 
        right: 0, 
        bottom: -350,
        
    },
    icon: {
        alignSelf: 'center',
        fontSize: 14,
    },
    txt: {
        fontSize: 14,
    }
})

export default Footer