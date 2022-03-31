import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native'
import {Icon as EntypoIcon} from 'react-native-vector-icons/dist/FontAwesome';
import Icon from 'react-native-vector-icons/dist/Entypo';
import { useNavigation } from '@react-navigation/native';
 

const LocationHeaderWhite = ({title}) => {
    const navigation = useNavigation()
    return (
        <View style={styles.header}>
            <View style={styles.container}>
                <EntypoIcon style={styles.icon} name='location-pin'/>
                <Text style={styles.text}>{title}</Text>
                {/* The X button is set here to return to the login page pending discussion of appropriate behavior */}
                <Pressable  onPress={()=>navigation.navigate('LoginScreen')}>
                    <Icon style={styles.icon} name='cog'/>
                </Pressable>
            </View>
        </View>
    )
}

LocationHeaderWhite.defaultProps = {
    title: 'Okionu'
}

const styles = StyleSheet.create({
    header: {
        height: 120,
        backgroundColor: 'white',
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

export default LocationHeaderWhite