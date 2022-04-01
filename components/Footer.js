import React from 'react'
import { View, Pressable, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { useNavigation } from '@react-navigation/native';


const Footer = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.footer}>
            <Pressable>
                <Icon name='home' style={styles.icon}/>
                <Text style={styles.txt}>Home</Text>
            </Pressable>
            <Pressable>
                <Icon name='search' style={styles.icon}/>
                <Text style={styles.txt}>Community</Text>
            </Pressable>
            <Pressable>
                {/* user-o icon is a placeholder until I can find the icon used in the wireframes */}
                <Icon name='user-o' style={styles.icon}/>
                <Text style={styles.txt}>Profile</Text>
            </Pressable>
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