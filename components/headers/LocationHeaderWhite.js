import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { useNavigation } from '@react-navigation/native';
 

const LocationHeaderWhite = ({title}) => {
    const navigation = useNavigation()
    return (
        <View style={styles.header}>
            <View style={styles.container}>
                <Icon style={styles.icon} name='map-pin'/>
                <Text style={styles.text}>{title}</Text>
                <Pressable  onPress={()=>navigation.navigate('AccountSettings')}>
                    <Icon style={styles.icon} name='cog'/>
                </Pressable>
            </View>
        </View>
    )
}

LocationHeaderWhite.defaultProps = {
    title: 'New York City'
}

const styles = StyleSheet.create({
    header: {
        height: 120,
        backgroundColor: 'white',
        alignContent:'center',
        justifyContent: 'center',
    },
    container:{
        flexDirection: 'row', 
        width: "100%",
        alignContent: 'center', 
        justifyContent: 'space-around',
        alignSelf: 'center', 
        paddingTop: 60,

    },
    text: {
        color: 'black',
        fontSize: 24, 
    },
    icon: {
        fontSize: 24,
        color: '#7D3F1B'
    }
})

export default LocationHeaderWhite 