import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { useNavigation } from '@react-navigation/native';
 

const XHeaderGreen = ({title}) => {
    const navigation = useNavigation()
    return (
        <View style={styles.header}>
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
                {/* The X button is set here to return to the login page pending discussion of appropriate behavior */}
                <Pressable  onPress={()=>navigation.navigate('LoginScreen')}>
                    <Icon style={styles.icon} name='close'/>
                </Pressable>
            </View>
        </View>
    )
}

XHeaderGreen.defaultProps = {
    title: 'Okionu'
}

const styles = StyleSheet.create({
    header: {
        height: 120,
        backgroundColor: '#BFD8C6',
        alignContent:'center',
        justifyContent: 'center',
        borderRadius: 100/4,
    },
    container:{
        flexDirection: 'row', 
        width: "100%",
        alignContent: 'center', 
        justifyContent: 'space-between',
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
        color: '#7D3F1B'
    }
})

export default XHeaderGreen